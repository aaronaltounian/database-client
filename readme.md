## Setup
* Fork, Clone, npm install mongoose

## Intro
We want to build a console app that will allow a user to provide input and save it to a database. The user must also be able to retrieve information to view it.

We are going to use readline to accept information from the user so we need to be comfortable using this tool.

The user will be presented with a menu with a number representing the options. When the user enters the number and hits enter, your code needs to execute the appropriate task.

Decide what "thing" you want your app to represent. We will keep it simple and only input information for one "thing". products, students, vehicles..etc.

Replace all instances of "thing" with your choice.


## Database
* Make sure you have a database setup somwhere that is running and have the connection string.
* Use mongoose to connect to it in index.js
* Decide on what your collection is going to be
* Use the web interface or robo 3t to add some test data if you want


## Model
* Create a model folder and a model file for whatever "thing" you have choosen
* Create a mongoose schema and model with at least 3 properties

## Find All
* In find-all.js, use the mongoose model.find() to retrieve all things from the database. Call done() passing in the data array.
* In findAllThings(), in the done callback, loop the data array and console.log out each item in a user friendly manner, don't console.log the entire array
* Then display the main menu again
* Bonus: only show 5 items at a time and have the user hit enter to page to the next 5 items.

## Find By Id
* In find-by-id.js, use the model.findById() to retrieve one thing by id. Call the done() callback, passing in the one thing.
* In findThingById, in the done callback, console log out the thing in a user friendly way
* Then display the main menu again

## Find By
* In find-by.js, use the model.find() to retrieve one thing by a certain property depending on what your thing is. Call the done() callback passing in the one thing
* In findThing(), in the done callback, console log out the thing in a user friendly way
* Then display the main menu again

## Create
* We want to create a new document in the database by asking the user for the input for it.
* In askForInput(), add as many readline.questions as you need to get all the input for your thing
* Store the answers in the object newThing
* When all questions are answered call create(), passing in newThing
* In create.js, use your mongoose model to save the information to the database.
* Show the main menu again in the done callback
* Bonus: add verification. Ask if the information looks good as a yes/no questions. If the answer is yes, save it. If the answer is no, ask for the input again.

## Question
* Why is it important to put the mongoose code in seperate files such as create.js instead of in index.js
