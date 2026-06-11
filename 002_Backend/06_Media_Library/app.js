const express = require('express');
const library = require('./LIbrary');

const app = express();
const port = 3000;


app.listen(port, function() {
    console.log(`App is listening on port ${port}`);    
});

app.get('/movies', (req, res) => {
    res.status(200).json({
        movies: library.getAllMovies()
   });    
});

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = library.getMovieById(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({error: 'Movie not found'});
    }
});