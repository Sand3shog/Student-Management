use('student');

// ? we will be working here in 'students' collection

// db.students.find();

// ? Insertion
// crud operation
// ? CREATE => add, insert 

// insertOne => insert one document
// insertMany => insert many document

// db.students.insertOne({
//     name: 'Sandesh',
//     scores: 100,
// });

// db.students.insertMany([{
//     name: 'Shirish',
//     scores: 85,
// },
// {
//     name: 'shreemon',
//     scores: 45,  
// }]);

// db.students.find();

// ? Find
// db.students.find({ name: 'Shirish'});


// ? DELETE

// delete student which name is shreemon
// db.products.deleteOne({name: 'shreemon'}); //deletes first object
// db.students.find();



// db.students.deleteMany({name: 'shreemon'});  //if contains many shreemon names

//db.students.deleteMany({}); //to delete all products in table
