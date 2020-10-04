import config from '../config';

const userService = {

    getUsers() {
        return fetch(`${config.API_ENDPOINT}/people`)
            .then(res => {
                if(!res.ok){
                    return res.json().then(e => {throw e})
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
    },

    deleteCurrent() {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok){
                return res.json().then(e => {throw e})
            }
            else { return }
        }
        )
    }
}

export default userService;