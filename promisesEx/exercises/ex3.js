const fetch = require('node-fetch');
const express = require('express');
const app = express();
const PORT = 3000;
const url = 'https://jsonplaceholder.typicode.com/photos?albumId=';
const numbers = ["1", "3", "5", "7", "9"];

getAlbumById = (id) => {
    return new Promise((resolve, reject) => {
        fetch(url.concat(id)).then(res => res.json())
            .then((res) => {
                resolve({
                    albumId: id,
                    album: res
                        .filter(item => item.title.split(' ').length === 3)
                        .map(item => {
                            return { id: item.id, title: item.title };
                        })
                });
            });
    });
};

app.get('/api/albumthreewords', (req, res) => {
    let promises = [];
    for (let i = 0; i < numbers.length; i++)
        promises.push(getAlbumById(numbers[i]));
    Promise.all(promises).then(values => res.json(values));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));