const models = require('../models/movies')

const movies = [
    {
      id: 1,
      movieName: "Inception",
      releaseYear: 2010,
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      stillInTheaters: false,
      coverPhotoUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
      description: "A skilled thief who specializes in entering the subconscious of others must perform his most dangerous mission: planting an idea into someone’s mind."
    },
    {
      id: 2,
      movieName: "The Godfather",
      year: 1972,
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      stillInTheaters: false,
      coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son in this classic mafia tale."
    },
    {
      id: 3,
      movieName: "Parasite",
      year: 2019,
      genre: "Thriller, Drama",
      director: "Bong Joon Ho",
      stillInTheaters: false,
      coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      description: "A poor family schemes to become employed by a wealthy household by posing as unrelated, highly qualified individuals."
    },
    {
      id: 4,
      movieName: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime",
      director: "Christopher Nolan",
      stillInTheaters: false,
      coverPhotoUrl: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      description: "Batman faces off against the Joker, a criminal mastermind intent on plunging Gotham City into chaos."
    },
    {
      id: 5,
      movieName: "Pulp Fiction",
      year: 1994,
      genre: "Crime, Drama",
      director: "Quentin Tarantino",
      stillInTheaters: false,
      coverPhotoUrl: "https://www.popphoto.com/uploads/2021/12/03/Pulp-vertical.jpg?auto=webp",
      description: "Interconnected stories of crime, redemption, and violence unfold in Tarantino's cult classic film, blending dark humor and shocking twists."
  },
  {
    id: 6,
    movieName: "Forrest Gump",
    releaseYear: 1994,
    genre: "Drama, Romance",
    director: "Robert Zemeckis",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    description: "The story of a man with a low IQ who unwittingly influences major historical events."
  },
  {
    id: 7,
    movieName: "The Matrix",
    releaseYear: 1999,
    genre: "Sci-Fi, Action",
    director: "The Wachowskis",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description: "A hacker discovers the reality he lives in is a simulation, and he must fight to free humanity."
  },
  {
    id: 8,
    movieName: "Gladiator",
    releaseYear: 2000,
    genre: "Action, Drama",
    director: "Ridley Scott",
    stillInTheaters: false,
    coverPhotoUrl: "https://cdns-images.dzcdn.net/images/cover/e4a2b155bcfe69895de1eacfffcc9b70/500x500.jpg",
    description: "A former Roman general seeks revenge against the corrupt emperor who murdered his family."
  },
  {
    id: 9,
    movieName: "Interstellar",
    releaseYear: 2014,
    genre: "Sci-Fi, Drama",
    director: "Christopher Nolan",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    description: "A team of astronauts ventures through a wormhole in search of a new habitable planet."
  },
  {
    id: 10,
    movieName: "The Shawshank Redemption",
    releaseYear: 1994,
    genre: "Drama",
    director: "Frank Darabont",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of decency."
  },
  {
    id: 11,
    movieName: "Fight Club",
    releaseYear: 1999,
    genre: "Drama, Thriller",
    director: "David Fincher",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
    description: "An insomniac office worker forms an underground fight club that evolves into something much more."
  },
  {
    id: 12,
    movieName: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: 2001,
    genre: "Adventure, Fantasy",
    director: "Peter Jackson",
    stillInTheaters: false,
    coverPhotoUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873821/the-lord-of-the-rings-9781608873821_hr.jpg",
    description: "A young hobbit embarks on a quest to destroy a powerful ring that could bring darkness to the world."
  },
  {
    id: 13,
    movieName: "The Avengers",
    releaseYear: 2012,
    genre: "Action, Sci-Fi",
    director: "Joss Whedon",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    description: "Earth's mightiest heroes must unite to stop a cosmic threat from destroying the planet."
  },
  {
    id: 14,
    movieName: "The Silence of the Lambs",
    releaseYear: 1991,
    genre: "Thriller, Crime",
    director: "Jonathan Demme",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    description: "A young FBI agent seeks the help of an imprisoned cannibalistic killer to catch another serial killer."
  },
  {
    id: 15,
    movieName: "Schindler's List",
    releaseYear: 1993,
    genre: "Biography, Drama",
    director: "Steven Spielberg",
    stillInTheaters: false,
    coverPhotoUrl: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    description: "A businessman in Nazi-occupied Poland saves hundreds of Jewish lives by employing them in his factories."
  }
    
  ];
  
  module.exports = movies;
  