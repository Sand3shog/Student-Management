use('student');

// we will be working here in 'movies' collection
db.movies.find();

// ? comparison operator
// ? $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin

// ? find movies whose runtime is 60

    // db.movies.find({runtime : {$eq: 60}}); //it means runtime === 60


// ? Find movies whose weight is greater than 95

    // db.movies.find({weight: {$gt: 95}});
    
// ? Find movies whose rating is greater than 9

    // db.movies.find({"rating.average": {$gt: 9}});

// ? Find movies whose rating is greater than equal to 8.
    // db.movies.find({"rating.average": {$gte: 8}});

// ? Find movies whose weight is less than 65

    // db.movies.find({weight: {$lt: 65}});
    // db.movies.find({weight: {$lt: 65}}).count();  // to count how many movies satisfies the condition

// ? Find movies who rating is less than or equal to 5

    // db.movies.find({"rating.average": {$lte: 5}});

// ? find movies whose country is  United States

    // db.movies.find({"network.country.name" : {$eq: 'United States'}});

// ? find movies whose country is not united states

    // db.movies.find({"network.country.name" : {$ne: 'United States'}});


// ? Logical operators
// $and, $or, $not, $nor,

// ? find movies whose rating is 9 or country is 'United States'

    // db.movies.find({$or: [{"rating.average": 9}, 
    // {"network.average.name": 
    // 'United States'}]}).count();

// ? find movies whose status is Ended or average rating is less than 5
// db.movies.find({$or: [{status: "Ended"}, 
//     {"rating.average": 
//         {$lt: 5}}]});

// ? find movies genres is Thriller and rating is less than 7

// db.movies.find({$and: [{"rating.average": {$lt: 7}},
//     {genres: 'Thriller'}]
// })


// db.movies.find({$and: [{"rating.average": {$lt: 7}},
//     {genres: 'Thriller'}]
// }, {genres: 1, rating: 1, name: 1})  // this shows the code with this properties only


// ? find movies whose genre is neither 'Drama' nor 'comedy'

// db.movies.find({$nor: [{genres: 'Drama'}, 
//     {genres: 'Comedy'}
// ]}, {genres: 1, name: 1});


// ? find movies whose genre is not Drama
// db.movies.find({genres: {$not: {$eq: "Drama"}}});
// db.movies.find({genres: {$ne: "Drama"}});


// ? find movies whose genres is 'Comedy' and rating is greater than 9

// db.movies.find({$and: [{genres: "Comedy"}, 
//     {"rating.average": {$gt: 9}}
// ]});

                // or
// db.movies.find({genres: "Comedy", "rating.average": {$gt: 9}});

// ? find movies whose rating is either 7 or 7.5 0r 8 or 8.5 or 9 or 9.1 or 9.2 or 9.3

// db.movies.find({$or: [{"rating.average": 7},
//     {"rating.average": 7.5},
//     {"rating.average": 8},
//     {"rating.average": 8.5},
//     {"rating.average": 9},
//     {"rating.average": 9.1},
//     {"rating.average": 9.2},
//     {"rating.average": 9.3}
// ]}).count();


                // or we can use
// ? in
// db.movies.find({
//     "rating.average": {$in: [7, 7.5, 8, 8.5, 9, 9,1, 9.2, 9.3]}
// });

// $nin for not in