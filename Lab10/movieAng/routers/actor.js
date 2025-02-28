  
const mongoose = require('mongoose');
const Actor = require('../models/Actor');
const Movie = require('../models/Movie');

module.exports = {
    getAll: function (req, res) {
        Actor.find(function (err, actors) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.json(actors);
            }
        });
    },
    createOne: function (req, res) {
        let newActorDetails = req.body;
        newActorDetails._id = new mongoose.Types.ObjectId();
        let actor = new Actor(newActorDetails);
        actor.save(function (err) {
            res.json(actor);
        });
    },
    getOne: function (req, res) {
        Actor.findOne({ _id: req.params.id })
            .populate('movies')
            .exec(function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                res.json(actor);
            });
    },
    updateOne: function (req, res) {
        Actor.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, actor) {
            if (err) return res.status(400).json(err);
            if (!actor) return res.status(404).json();
            res.json(actor);
        });
    },
    deleteOne: function (req, res) {
        Actor.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },
    addMovie: function (req, res) {
        Actor.findOne({ _id: req.params.actid }, function (err, actor) {
            if (err) return res.status(400).json(err);
            if (!actor) return res.status(404).json();
            Movie.findOne({ _id: req.body.id }, function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();
                actor.movies.push(movie._id);
                actor.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(actor);
                });
            })
        });
    },
    //delete all actors extra task
    deleteAllActors: function(req,res){
        Actor.deleteMany({}, function(err){
            if(err) res.json(err)
            else
 
            res.json({"msg" : "Actors Deleted"})

        })
     
    },


    // Q2 Delete Actor and All Their Movies
    deleteActMovies : function(req, res){
        // First find the Actor that user wants to delete
        Actor.findById(req.params.id ,function (err, data){
            if (err) return res.status(400).json(err);
            // Now have thst you have the actor and its movies, delete all the actors movies from movie collection 
            Movie.deleteMany({_id: data.movies }, function (err){
                if (err) res.json(err)
                else
                // Now movies are deleted, delete actor from actor collection
                Actor.findOneAndRemove({ _id: req.params.id }, function (err) {
                    if (err) return res.status(400).json(err);
                    res.json({"msg" : "Actor & Movies Deleted"})
                }); 
            })
        })
    },
    // Q3 Remove a movie from the list of movies of an actor
    deleteMovFromActor : function (req, res){
        // first find actor which is in the body of req
        // Actor.updateOne({_id: req.params.id},  )
        let actorIdToRemove = req.params.actid;
        let movieIdToRemove = req.params.movid;
        
        Actor.findOne({ _id: actorIdToRemove }, function (err, actor) {
            if (err) return res.status(400).json(err);
            if (!actor) return res.status(404).json();
            Movie.findOne({ _id: movieIdToRemove }, function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();
                actor.movies.pull(movie._id);
                actor.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(actor);
                });
            })
        });
    },
    // Q7 New Get All Actors
    getAllNew: function (req, res) {
        Actor.find().populate('movies').exec(function (err, actors) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.json(actors);
            }
        });
    },

}