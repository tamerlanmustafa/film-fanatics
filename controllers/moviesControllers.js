const models = require("../models/movies");
const moviesDB = require('../DB/moviesDB');






const getAllMovies = async (req,res) => {
    try {
        const allMovies = await models.Movie.find();
        res.render("movies/index", {movies: allMovies, message: "Hello World"});
    } catch (err) {
        res.redirect("/");
    }
};

const getOneMovie = async (req,res) => {
    try {
        const foundMovie = await models.Movie.findById(req.params.id);
        res.render(`movies/show`, { movie: foundMovie })       
    } catch (err) {
        res.redirect("/");
    }
}


const createMovie = async (req, res) => {
    
    req.body.stillInTheaters = req.body.stillInTheaters ? true : false;
  
    try {
      
      await models.Movie.create(req.body);
      res.redirect("/");
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  


const createReview = async (req, res) => {
    try {
        const movie = await models.Movie.findById(req.params.id)
        movie.userReviews.push(req.body)
        await movie.save()
        res.redirect(`/`);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const addReview = async (req, res) => {
    const movie = await models.Movie.findById(req.params.id)
    res.render('movies/review',{movie})
}


const createForm= async (req,res)=>{
res.render("movies/newmovie")
}
const editForm = async (req,res) => {
    const editedMovie = await models.Movie.findById(req.params.id)
    res.render("movies/edit",{movie:editedMovie})
}


const seedMovies = async (req, res) => {
    try {
        const clearMovies = await models.Movie.deleteMany()
        const seededData = await models.Movie.create(moviesDB)
        res.send('Database sedded')
    } catch (err) {
        res.send('Error here')
    }
}


const editAReview = async (req,res) => {
    try {
        const methodOverrideovie = await models.Movie.findbyIdAndUpdate(req.params.movieId);
    } catch (err) {
        res.redirect(`/movies/${req.params.id}`);
    }
}

const deleteAMovie = async (req,res) => {
    await models.Movie.findByIdAndDelete(req.params.id)
    res.redirect("/")
}

const editMovie = async (req,res) => {
    try {
        if (req.body.stillInTheaters=== "on") {
            req.body.stillInTheaters = true;
    } else {
        req.body.stillInTheaters = false;
    }
    await models.Movie.findByIdAndUpdate(req.params.id,req.body)
    res.direct(`/movies/${req.params.id}`);
} catch (err) {
    res.redirect(`/movies/${req.params.id}`);
}
};


module.exports = {
    getAllMovies,
    getOneMovie,
    editAReview,
    createMovie,
    seedMovies,
    createReview,
    addReview,
    deleteAMovie,
    editMovie,
    createForm,
    editForm
}