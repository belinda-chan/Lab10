//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const actors = require('./routers/actor');
const movies = require('./routers/movie');
const path = require('path');

const app = express();
app.use("/", express.static(path.join(__dirname, "dist/movieAng")));

app.listen(8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true , useUnifiedTopology: true},  function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});


//Configuring Endpoints

//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:actid/movies', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);
app.delete('/deleteallactors', actors.deleteAllActors); //DELETE ALL ACTORS ENDPOINT - extra points

//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/deleteallmovies', movies.deleteAllMovies);//DELETE ALL MOVIES ENDPOINT - extra points

// Q1 Delete Movie By ID
app.delete('/movies/:id', movies.deleteOne);

// Q2 Delete Actor and All Their Movies
app.delete('/actors/allmovies/:id', actors.deleteActMovies);

// Q3 Remove a movie from the list of movies of an actor
app.post('/delmovfromact/:actid/:movid', actors.deleteMovFromActor);

// Q4 Remove an actor from the list of actors in a movi
app.post('/delactfrommov/:actid/:movid', movies.deleteActFromMovie);

// Q5 Add an existing actor to the list of actors in a movie
// WEEK 9 TASK 4
app.post('/movies/:movid/actor', movies.addActor);

// Q6 Retrieve (GET) all the movies produced between year1 and year2, where year1>year2.
app.get('/moviesbetween/:y2/:y1', movies.getBetween);

// Q7 New Get All Actors Method
app.get('/actorsnew', actors.getAllNew);

//Q8 New Get All Movies Method
app.get('/moviesnew', movies.getAllNew);


// WEEK 9 LAB TASKS
// Task 3: Delete Before a Year
app.delete('/moviesbefore/:y', movies.deleteBefore);

// Task 4: Add Actor to Movie
app.post('/movies/:movieTitle/', movies.addActorW9);