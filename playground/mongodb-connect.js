//const MongoClient = require('mongodb').MongoClient;
//The code below will do the same as the one above but using ES6 object destructuring
//Using the comma within the {} allows us to grab more methods from require('mongodb')
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // By using a return statement it prevents the rest of the function from executing
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    _id: 123,
    text: 'Something to do',
    completed: false
    }, (err, result) => {

    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));

  });

  db.close();
});
