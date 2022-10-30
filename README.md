# C.R.U.D-on-users

<strong>This is a backend project that has the gool to make a full C.R.U.D on the users. </strong>

<strong> I used the mvc structure, typescript, express.js, express validator, mysql and typeorm as the database manager.</strong>

<strong>To setup the project, you have to download it and config your .env with your local database configurations and then run  ```npm run dev``` 
on the root folder. if it doesn't run, try ```npm install``` and then run again.</strong>

<h1>Create the user</h1>

![createUser](https://user-images.githubusercontent.com/92902916/198898866-d7f582f6-dce6-4909-bb88-1cfca827c59c.png)

<h1>Token</h1>

<p>After the user is created, a access token is generated. That is gonna allow you to config the user </p>
<p>You can set the token's lifetime in the ```.env``` file. The default is set to 1H. </p>

![newToken](https://user-images.githubusercontent.com/92902916/198898931-69ce45d9-9c3b-4a99-94a4-eaa3c1d8a04f.png)

<h1>Get the user</h1>
<p>To be able to get the user, you have to provide the access token to the header.</p>

![getUser](https://user-images.githubusercontent.com/92902916/198899014-d6267190-41c6-4a66-a791-682725cd60e4.png)

<h1>Update the user</h1>
<p>You can provide any field you what to be updated. </p>
<p>Any field is optional. </p>
<small>Remember, you have to provide the access token into the header!</>


![updateUser](https://user-images.githubusercontent.com/92902916/198899082-1f2317d8-1527-4513-a1b3-d2abb20ca5a1.png)

<h1>Delete the user</h1>
<p>to delete the user, you have to provide the access token into the header.</p>

![deleteUser](https://user-images.githubusercontent.com/92902916/198899308-6a44ed93-fdb8-44fe-8524-3600a85452ef.png)

<h1>Login a user</h1>
<p>To login a user, you have to provide the email and the password and then, if successfully, you receive a new access token</p>

![login_correct](https://user-images.githubusercontent.com/92902916/198899453-986c49da-7978-4e66-929b-2ec2550b3632.png)



