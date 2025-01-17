use('student');

// here we will be working in movies dataset
// db.movies.find();

// ? aggregate -> read operation -> doesnot change content of db

// ? pipeline stage
// $match, $project, $sort, $skip, $limit, $lookup, $unwind

// ? $Match is output and $project is input here
// db.movies.aggregate([{
//     $match : {
//         'rating.average' : {$gt: 8},
//     },
// },
// {
//     $project: {
//       name: 1,
//       rating: 1,
//     }
// }
// ]);

// ? find movies whose rating is greater than 7 and less than 9 and display name and rating

// db.movies.aggregate([{
//     $match : {
//         'rating.average': {$gt: 7, $lt: 9}
//     }
// },
// {
//     $project: {
//         name: 1,
//         rating: 1,
//     }
// }]);

// ? read operation by  creating new property i.e avgRating
// db.movies.aggregate([{
//     $match : {
//         'rating.average': {$gt: 7, $lt: 9}
//     }
// },
// {
//     $project: {
//         movieName: '$name',
//         avgRating: '$rating.average',
//     }
// }]);

// ? find movies whose genre is Thriller and comedy and show movie name and genre

// db.movies.aggregate([{
//     $match : {
//         $and: [{genres: 'Thriller'},
//         {genres: 'Comedy'}],
//     }
// }, {
//     $project: {
//         name: 1,
//         genres: 1,
//     }
// }]);

              // ? or we can use $all
// db.movies.aggregate([{$match: {
//   genres:{$all : ["Thriller", "Comedy"]}
// }}])


// ? find movies whose runtime is greater than 60
//  db.movies.aggregate([{
//     $match: {
//         runtime: {$gt: 50},
//     }
//  }, {
//     $project: {
//       name: 1,
//       runtime: 1,
//     }
//  }]);


// ? sort 
// ? ascending sort : 1
// ? descending sort: -1
//  db.movies.aggregate([{
//     $match: {
//         runtime: {$gt: 50},
//     }
//  }, 
//  {
//     $sort: {
//         runtime: -1,
//     }
//  },
//  {
//     $project: {
//       name: 1,
//       runtime: 1,
//     }
//  }]);

// ? find all movies sort them in descending order of rating  and select name and rating

    // db.movies.aggregate([{
    //     $match: {},
    // },
    // {
    //     $sort: {
    //         "rating.average" : -1
    //     }
    // }, {
    //     $project: {
    //     name: 1,
    //     rating: 1,
    //     }
    // }]);

// ? find movies whose rating is greater than 8 and genres is "Action" and 
//  ? sort them in order of their name is ascending order project name, genres, rating

// db.movies.aggregate([{
//     $match: {
//         "rating.average" : {$gt: 8},
//         genres:  "Action",
//     }
// }, {
//     $sort: {
//         name: 1,
//     }
// }, {
//     $project: {
//     name:1,
//     genres: 1,
//     rating: 1
//     }
// }]);


// ? find movies whose runtime is less than 120 or network country is "Canada"
// ? sort them from runtime ascending
// ? show project name, runtime, network

// db.movies.aggregate([{
//     $match: {
//         $or : [{
//             runtime: {$lt: 120}
//         }, {
//             "network.country.name" : "Canada",
//         }]
//     }
// }, {
//     $sort:{
//         runtime: 1
//     }
// }, {
//     $project: {
//         name: 1,
//         runtime: 1,
        // network: 1,
//         countryName: "network.country.name"
//     }
// }, {
//     $limit: 5
// }]);

// db.users.insertMany([{
//     name: "Rakesh",
//     age: 22,
//     hobbies: ["Cycling", "Hiking"]
// }, {
//     name: "sujan",
//     age: 12,
// }]);

db.users.aggregate([{
    $match: {}
}, {
    $unwind: {
      path: "$hobbies",
      preserveNullAndEmptyArrays: true,
    }
}]);








