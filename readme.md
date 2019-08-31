### Quiz Maker , Perspective Tool
This is a technical challenge for `chooseshift.com`

Description : This project includes all features that a website needs to make a quiz maker app/website . including both website & API like a real project.

The project made by Laravel 5.8 for the backend framework and Vue.js + Vuex for frontend.

The project includes the following features:

- Admin Login / Logout
- Create / Remove / Edit > Quizzes ( Admin )
- Create / Remove / Edit > Dimensions ( Admin )
- Create / Remove / Edit > Questions for each Quiz ( Admin )
- Create / Remove / Edit > Explanations for each Result of Quizzes ( Admin )
- User ability to participate in quizzes ( User )
- User ability to get a result according to it's answers for each quiz ( User )
- Check Answers For Each Participant ( Admin )

### How to setup
1. run command : `composer install`
2. run command : `npm install`
3. create two databases for `Web Service` & `Testing Environment`
4. change `.env.example` File to `.env` and setup .env database information
5. change `.env.example` File to `.env.testing` and setup .env.testing database information for Unit & Feature Tests
6. run command : `php artisan key:generate`
7. run command : `php artisan migrate`
8. run command : `php artisan passport:install --force`
9. copy second `Client ID` and `Client Secret` after running the previous command.
10. paste `Client ID` and `Client Secret` to `.env` and `.env.testing` files. ( because we use these secret code for admin login request )
11. run command : `php artisan db:seed`
12. run command : `npm rum watch`
13. run command : `php artisan serve`
14. open web server 

Done !

### Setup Unit & Feature Testing Environment

- step1: create a new database for test
- step2: change `.env.example` File to `.env.testing` and setup .env.testing database information for Unit & Feature Tests
- run command :  `phpunit`
