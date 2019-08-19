const _ = require("lodash");
const bcrypt = require("bcrypt");
const {Post, User} = require("../models");
const {generateAuthToken} = require('../misc/generateToken')
const {validate} = require("../validations/post");
const extract = require('mention-hashtag');
const sendmail = require('../misc/sendEmail');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// This function creates a new post.
exports.create = async function (req, res) {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error);

    const post = new Post(_.pick(req.body, ["content", "userId"]));

    const mentions = extract(req.body.content, {symbol: false});
    post.mentions = mentions ? mentions : null;
    if (mentions) {
        for (let username of mentions) {
            let user = await User.findOne({where: {username: username}});
            if (user) {
                // send Notification Email;;;
                const to = user.email;
                const subject = 'Mention Notification';
                const body = 'Hello, You have been mentioned in a new post. Check it now!';
                await sendmail(to, subject, body);
                console.log(`Sent to ${user.email}`);
            }
        }
    }

    const hashtags = extract(req.body.content, {symbol: false, type: '#'});
    post.hashtags = hashtags ? hashtags : null;

    await post.save();

    res.send(_.pick(post, ["id", "content", "createdAt", "mentions", "hashtags"]));
};

// This function will view a certain post.
exports.view = async function (req, res) {
    const postId = req.params.postId;
    if (!postId) return res.status(400).send('Invalid post Id.');

    const post = await Post.findOne({where: {id: postId}});
    if (!post) return res.status(400).send("Post does not exist.");

    res.send(_.pick(post, ["id", "content"]));
};

// This function will view posts by user.
exports.getUserPosts = async function (req, res) {
    const username = req.params.username;
    if (!username) return res.status(400).send('Invalid username.');

    const user = await User.findOne({where: {username: username}});
    if (!user) return res.status(400).send("User does not exist.");

    // const posts = await Post.findAll({where: {userId: user.id}});
    const posts = await user.getPosts();
    if (!posts) return res.status(400).send("User has no posts.");

    res.send(posts);
};

// This function will view posts by hashtag.
exports.getHashtagPosts = async function (req, res) {
    const hashtag = req.params.hashtag;
    if (!hashtag) return res.status(400).send('Invalid hashtag.');

    const posts = await Post.findAll({where: {hashtags: {[Op.like]: `%${hashtag}%`}}});
    if (!posts) return res.status(400).send("Hashtag has no posts.");

    res.send(posts);
};

// This function will view most recent posts. in the last 5 days
exports.getRecentPosts = async function (req, res) {
    const posts = await Post.findAll({
        where: {
            createdAt: {
                [Op.lt]: new Date(),
                [Op.gt]: new Date(new Date() - 5 * 24 * 60 * 60 * 1000) /* last 5 days! */
            }
        }
    });
    if (!posts) return res.status(400).send("Hashtag has no posts.");

    res.send(posts);
};
