## Introduction

This project is the backend of A Hub of Ice and Fire - DLC Task, 

A sample for logged in user, Restful api built using Node.js, Express and ORM (sequelizejs) using MYSQL driver.

## Setup

Make sure to follow all these steps exactly as explained below. 

* Clone or Download the repository.
* Create new database, default development name is **task_development**.
* You can edit database info from the **config/default.json** file && **config/dbConfig.js**.
* open your terminal and navigate to the project directory.
* write in terminal
```
npm install
npm install sequelize-cli -g
```
* Install git if not installed in your computer according to your operating system.
* Edit configuration file in config/default.json with your credentials.
* run migrations to create tables in database.
```
* sequelize db:migrate
```
* run seeds to insert new user in database to be used in the system.
```
* sequelize db:seed:all
```
* Start the application
```
* npm start
```
Your app should now be running on localhost:3000.
If that port is busy, you can set a different point in config/default.json.

Home directory will view a general information about the GOT series from **https://anapioficeandfire.com/** API.

Open up your browser and head over to:

```
* http://localhost:3000/users/register
{
	"firstName":"Ahmed",
	"lastName":"Hamdy",
	"username":"ahmed2",
	"email":"ahmedhamdy@gmail.com",
	"password":"123456"
}
```


```
* http://localhost:3000/auth/login
{
	"email":"ahmedhamdy@gmail.com",
	"password":"123456"
}
```

```
* http://localhost:3000/users/profile/ahmed
Header 
{
    x-auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhaG1lZCIsImlhdCI6MTU2NjE2NDI3N30.5HO35x246JbXacXN5hAEfzt3bs9BlRxb9-N8m5VjihA
}
```

```
* http://localhost:3000/posts/create
Header 
{
    x-auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhaG1lZCIsImlhdCI6MTU2NjE2NDI3N30.5HO35x246JbXacXN5hAEfzt3bs9BlRxb9-N8m5VjihA
}
{
	"content":"This is a test post with mention to @amir @omar and hashtag #first_post #first_test",
	"userId": 8
}
```

```
* http://localhost:3000/posts/view/5
Header 
{
    x-auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhaG1lZCIsImlhdCI6MTU2NjE2NDI3N30.5HO35x246JbXacXN5hAEfzt3bs9BlRxb9-N8m5VjihA
}
```

```
* http://localhost:3000/posts/user/ahmed
Header 
{
    x-auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhaG1lZCIsImlhdCI6MTU2NjE2NDI3N30.5HO35x246JbXacXN5hAEfzt3bs9BlRxb9-N8m5VjihA
}
```

```
* http://localhost:3000/posts/hashtag/first_hashtag
Header 
{
    x-auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhaG1lZCIsImlhdCI6MTU2NjE2NDI3N30.5HO35x246JbXacXN5hAEfzt3bs9BlRxb9-N8m5VjihA
}
```

```
* http://localhost:3000/posts/recent
```

