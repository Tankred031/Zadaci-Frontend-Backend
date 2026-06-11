class Library {
    constructor() {
        this.movies = [{
            id: 1,
            title: 'Pulp Fiction',
            director: 'Quentin Tarantino'
        }, {
            id: 2,
            title: 'Inception',
            director: 'Christopher Nolan'
        }, {
            id: 3,
            title: 'The Matrix',
            director: 'The Wachowskis'
        }];
    }

    getAllMovies() {
        return this.movies;
    }

    getMovieById(id) {
        return this.movies.find(movie => movie.id === parseInt(id))
    }

}

module.exports = new Library();