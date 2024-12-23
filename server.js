const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
// const path = require('path');
const movieController = require("./controllers/moviesControllers");

 
dotenv.config(); 
const app = express();
app.set("view engine", "ejs");
  

const PORT = process.env.PORT || 4000 

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); 
app.use(morgan("dev")); 
// app.use(express.static(path.join(__dirname, "public")));
  
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected")
});

mongoose.connection.on("error", (err) => { 
  console.log(err, "Mongoose failed to connect")
}); 

// const Movie = require("./models/movies")

app.get('/', movieController.getAllMovies)

app.get('/movies/new', movieController.createForm)

app.get("/movies/:id/edit",movieController.editForm)

app.get('/movies/seed', movieController.seedMovies)

app.get("/movies/:id", movieController.getOneMovie)

app.get("/movies/:id/review/new", movieController.addReview)

app.post("/movies/:id/review", movieController.createReview)

app.post("/movies",movieController.createMovie)

app.put("/movies/:id",movieController.editMovie)

app.delete("/movies/:id",movieController.deleteAMovie)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

 
