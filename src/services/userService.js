import config from '../config';

const userService = {

    getUsers() {
        return fetch(`${config.API_ENDPOINT}/people`)
            .then(res => {
                if(!res.ok){
                    res.json().then(e => e.Promise.reject(e))
                } else {
                    return res.json()
            }
        })
    },

    postUser(data) {
        let user = {name: data}
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
        // .then(res => {
        //     if(!res.ok){ 
        //         res.json().then(e => e.Promise.reject(e))
        //     } else { 
        //         res.json()
        //     }
        // })
    },

    deleteCurrent() {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        })
        .then(res => {
            if(!res) {
                throw new Error('Something went wrong')
            }
        })
    }
}

export default userService;