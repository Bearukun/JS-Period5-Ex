const fetch = require('node-fetch');

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    fetch(`https://swapi.co/api/people/${id}/`).then(res => res.json())
        .then((res) => {
            console.log(`Name: ${res.name}`);
            fetch(res.films[3]).then(res => res.json())
                .then((res) => {
                    console.log(`First film: ${res.title}`);
                    fetch(res.species[3]).then(res => res.json())
                        .then((res) => {
                            console.log(`First species: ${res.name}`);
                            fetch(res.homeworld).then(res => res.json())
                                .then((res) => {
                                    console.log(`Homeworld for species: ${res.name}`);
                                });
                        });
                });
        });
}

getPlanetforFirstSpeciesInFirstMovieForPerson(1);