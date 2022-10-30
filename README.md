# C.R.U.D-on-users

This is a backend project that has the gool to make a full C.R.U.D on the users. 

I used the mvc structure, typescript, express.js, express validator, mysql and typeorm as the database manager.

To setup the project, you have to download it and config your .env to your local database configurations and then run  ```npm run dev``` 
on the root folder. if it doesn't run, try ```npm install``` and the run again.

<h1>Create the user</h1>

![createUser](https://user-images.githubusercontent.com/92902916/198898866-d7f582f6-dce6-4909-bb88-1cfca827c59c.png)

<h1>Token</h1>

<p>After the user is created, a new token is generated</p>

![newToken](https://user-images.githubusercontent.com/92902916/198898931-69ce45d9-9c3b-4a99-94a4-eaa3c1d8a04f.png)

<h1>Get the user</h1>
<p>To be able to get the user, you have to provide the access token to the header.</p>

![getUser](https://user-images.githubusercontent.com/92902916/198899014-d6267190-41c6-4a66-a791-682725cd60e4.png)

<h1>Update the user</h1>
<p>You can provide any field you what to be updated. </p>
<strong>Remember, you have to provide the access token into the header!</strong>

<![updateUser](https://user-images.githubusercontent.com/92902916/198899082-1f2317d8-1527-4513-a1b3-d2abb20ca5a1.png)



