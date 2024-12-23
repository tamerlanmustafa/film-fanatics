const mongoose = require("mongoose");



const userReviewSchema = new mongoose.Schema({
    reviews: {type: String, required: true},
    likes: { type: Number, default: 0},
    dislikes: { type: Number, default: 0 },
    userName: {type: String}
});

const movieSchema = new mongoose.Schema({
    movieName : { type: String},
    releaseYear:{type: Number},
    genre: { type: String },
    director: {type: String},
    stillInTheaters: {type: Boolean},
    description: {type: String},
    coverPhotoUrl: {type:String},
    userReviews: [userReviewSchema]
});




const UserReview = mongoose.model("UserReview",userReviewSchema)

const Movie = mongoose.model('Movie', movieSchema)

module.exports = {
    UserReview,
    Movie
};