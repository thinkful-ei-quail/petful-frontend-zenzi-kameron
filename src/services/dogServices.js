import config from '../config';


const DogServices = {

    getAllDogs() {
        return fetch(`${config.API_ENDPOINT}/pets/dogs`)
        .then(res => {
            if(!res.ok){
                res.json().then(e => e.Promise.reject(e))
            } else {
                return res.json()
            }
        })
    },

    getNextDog() {
        return fetch(`${config.API_ENDPOINT}/pets/dog`)
        .then(res =>
            (!res.ok) ? res.json().then(e => e.Promise.reject(e)) : res.json()
        )
    },

    deleteCurrent() {
        return fetch(`${config.API_ENDPOINT}/pets/dog`, {
            method: 'DELETE'
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => e.Promise.reject(e))
            : null
        )
    }

}


export default DogServices;