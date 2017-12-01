//Incomplete :/

const fetch = require('node-fetch');

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    await fetch(`https://swapi.co/api/people/${id}/`).then(res => res.json())
        .then((res) => {
            console.log(`Name: ${res.name}`);
              afetch(res.films[3]).then( async res => res.json())
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

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);