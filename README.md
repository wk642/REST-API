# WELCOME TO MY BOOKS REST API PROJECT
## Table of contents
  1. [Prerequisites](#prerequisites)
  2. [Step by step to clone ](#clone)
  3. [Step by step to create your local database ](#database)
___
## Prerequisites <a name="prerequisites"></a>
##### ⭐ Postgres - (Creating a local database)  
##### ⭐ express  
##### ⭐ node  
##### ⭐postman  
---
###### (You will need to have everything installed for this to work)
###### README is for mac users. 
---
## Step By Step to clone <a name="clone"></a>
1. Goto your Terminal
2. Goto the location you want to clone my repository to
3. Clone my project
   ```git
    git clone https://github.com/wk642/REST-API.git
    ```
4. If you are going to make changes to my code please do the following:
   ```
   cd REST-API
    ls -la
    // if you see a .git (if not, skip next line only)
    rm -rf .git
    git remote -v
    // if this not blank or pointing to yours
    git remote remove origin
    // you can add yours back
    
 5. Reminder: install express

***
## Step by step to create your local database <a name="database"></a>
1. Goto your Terminal
2. Go into postgresss  
   `psql`
3. Create a database  
   `CREATE DATABASE your_database_name`
4. Open up the folder you cloned into VSCode / your text editor. 
5. Open up db.js
6. On line 3-9 you will see this, please update the info accordingly: 
   - [ ] On line 4 change user to your username  
    `user: 'YOUR_USERNAME', `
   - [ ] On line 5 change user to your password  
    `password: 'YOUR_PASSWORD', `
   - [ ] On line 8 change user to your username  
    `database: 'YOUR_DATABASE', `