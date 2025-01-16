use('student');

// ? we will be working here in 'players'  collection

// db.players.insertMany([{
//     name: "Lionel Messi",
//     game: "Football",
//     age: 38,
//     hobbies: [
//         "Football",
//         "Fifa",
//         "Cardio"
//     ]
// },
// {
//     name: "Virat Kohli",
//     game: "Cricket",
//     age: 34,
//     hobbies: [
//         "Football",
//         "Cricket",
//         "Gym"
//     ] 
// },
// {
//     name: "Neymar Jr.",
//     game: "Football",
//     age: 36,
//     hobbies: [
//         "Tennis",
//         "Hockey",
//         "Singing"
//     ]  
// },
// ])

// db.players.find();

// ? update age of lionel messi to 20
// db.players.updateOne({name: 'Lionel Messi'}, {
//     $set: {
//         age: 20,
//     }
// });
// db.players.find();

// ? update age of virat to 50
// db.players.updateOne({name:'Virat Kohli'}, {
//     $set: {
//         age: 50,
//     }
// });
// db.players.find();


// ? update game of neymar to golf

// db.players.updateOne({name: 'Neymar Jr.'}, {
//     $set: {
//         game: 'golf',
//     }
// });
// db.players.find();

// when the players have common names
// db.players.updateOne({_id: ObjectId('67888e8bd337eb0e69166941')}, {
//     $set: {
//         game: 'kabbadi',
//         age: 32,
//     }
// });
// db.players.find();      

    // ? increase age of all players by 10
    // ? $inc syntax
    // db.players.updateMany({}, {$inc: {age: 10,}},
    // );
    // db.players.find();


    // ? decrease age of all players by 5
//     db.players.updateMany({}, {$inc: {age: -5,}},
//     );
// db.players.find();

    // ? multiply age of all players by 2
    // ? $mul syntax
    // db.players.updateMany({}, {$mul: {age: 2,}},
    //     );
    // db.players.find();

    // ? divide age of all players by 2
    // db.players.updateMany({}, {$mul: {age: 1/2, }},
    //     );
    //     db.players.find();

    // ? increase age of messi by 5
    // db.players.updateOne({name: 'Lionel Messi'}, {
    //     $inc : {age : 5},
    // })
    // db.players.find();

    // ? divide age of neymar by 5
    // db.players.updateOne({name: 'Neymar Jr.'}, {
    //     $mul : {age: 1/5},
    // });
    // db.players.find();

// ? array operators

// ? add 'Hiking' as hobby to Lionel Messi
// ? $push syntax

// db.players.updateOne({name: 'Lionel Messi'}, {
//     $push: {
//         hobbies: "Hiking",
//     }
// });

// db.players.find();

// ? add 'cycling', 'swimming', 'reading'

// db.players.updateOne({name: "Lionel Messi"}, {
//     $push: {
//         hobbies: {$each:[
//             'Cycling',
//             'Reading',
//             'Swimming',
//         ]
//         }
//     }
// })

// db.players.find();


// ? pop
// ? applicable in array to remove the items
// db.players.updateOne({name: "Lionel Messi"}, {
//     $pop: {
//         hobbies: 1,     // ? 1 removes from the last and -1 removes from starting
//     }
// });   

// db.players.find(); 

// ? addToSet => adds items in array only if it doesnot exist
// db.players.updateOne({name: 'Lionel Messi'}, {
//     $addToSet : {
//         hobbies: "Hiking",
//     }
// });

// db.players.find();


// ? add 'movies' , 'music', 'horse-riding' in virat kohli
// db.players.updateOne({name: 'Virat Kohli'}, {
//     $addToSet : {
//         hobbies: {
//             $each : [
//                 "Movies",
//                 "Music",
//                 "Horse-Riding",
//             ]
//         }
//     }
// });

// db.players.find();


// ? $pull =>  directly removes item base upon values/ condition

// db.players.updateOne({name: "Virat Kohli"}, {
//     $pull : {
//         hobbies: 'Gym',
//     }
// });
// db.players.find(); 


// ? to pull multiple values

// ? $pullAll => removes all items specified

// db.players.updateOne({name: "Virat Kohli"}, {
//     $pullAll : {
//         hobbies: ['Music', 'Horse-Riding'],
//     }
// })

// db.players.find();

// db.players.updateMany({}, {
//     $set : {
//         marks: [25, 32, 56, 67, 54, 6],
//     },
// });

// db.players.find();


// ? pull marks less than 50
// db.players.updateOne({name: "Lionel Messi"}, {

//         $pull : {
//             marks: {$lt : 50},
//     }
// });

// db.players.find();

// ? remove marks greater than 32 for virat kohli

db.players.updateOne({name: 'Virat Kohli'}, {
    $pull : {
        marks: {$gt: 32},
    }
});

db.players.find();