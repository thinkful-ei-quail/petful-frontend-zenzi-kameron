import config from '../config';




const CatServices = {

    getAllCats() {
        return fetch(`${config.API_ENDPOINT}/pets/cats`)
        .then(res => {
            if(!res.ok){
                return null
            } else {
                return res.json()
            }
        })
    },

    getNextCat() {
        return fetch(`${config.API_ENDPOINT}/pets/cat`)
        .then(res => {
            if(!res.ok){
                return null
            } else {
                return res.json()
            }
        }
        )
        .catch()
    },

    deleteCurrent() {
        return fetch(`${config.API_ENDPOINT}/pets/cat`, {
            method: 'DELETE'
        })
        .then(res => {
            if(!res.ok){
                return null
            } else {
                return res.json()
            }
        }
        )
        .catch()
    }

}




export default CatServices;