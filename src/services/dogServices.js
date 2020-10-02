import config from '../config';


const DogServices = {

    getAllDogs() {
        return fetch(`${config.API_ENDPOINT}/dogs`)
        .then(res => 
            (!res.ok) ? res.json().then(e => e.Promise.reject(e)) : res.json()    
        )
    },

    getNextDog() {
        return fetch(`${config.API_ENDPOINT}/nextDog`)
        .then(res =>
            (!res.ok) ? res.json().then(e => e.Promise.reject(e)) : res.json()
        )
    }

}


export default DogServices;