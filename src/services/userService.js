import config from '../config';

const userService = {

    postUser(data) {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res =>
            (!res.ok) ? res.json().then(e => e.Promise.reject(e)) : res.json()
        )
    }
}

export default userService;