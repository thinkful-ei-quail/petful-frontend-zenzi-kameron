import config from '../config';




const CatServices = {

    getAllCats() {
        return fetch(`${config.API_ENDPOINT}/cats`)
        .then(res => 
            (!res.ok) ? res.json().then(e => e.Promise.reject(e)) : res.json()    
        )
    },

    getNextCat() {
        return fetch(`${config.API_ENDPOINT}/nextCat`)
        .then(res =>
            (!res.ok) ? res.json().then(e => e.Promise.reject(e)) : res.json()
        )
    }

}




export default CatServices;