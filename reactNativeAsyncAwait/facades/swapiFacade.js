const URL = "https://swapi.co/api/people/";
let maxValue = 15;

class swapiFacade {

    constructor() {
        this.init();
    }

    init = async () => {
        const res = await fetch(URL)
        const data = await res.json();
        maxValue = await parseInt(data.count); 
    }

    getRandomPerson = async () => {
        let personId = 0;
        do {
            personId = Math.floor(Math.random() * maxValue) + 1;
        } while (personId === 17 || personId > maxValue);
        return await this.getPerson(personId);
    }

    getPerson = async (id) => {
        const response = await fetch(URL.concat(id));
        const data = await response.json();
        return data;
    }

}

export default new swapiFacade;