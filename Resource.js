/***
*
* EXAMPLE USAGE
*
* Resource.index('users')
* Resource.store('users', { email: 'daniel@tighten.co' })
* Resource.show('users', 1)
* Resource.update('users', { id: 1, email: 'daniel.coulbourne@gmail.com' })
* Resource.destroy('users', 1)
*
***/

import axios from 'axios';

class Resource {
    constructor() {
        this.url = '/api';
    }

    index(resource) {
        return this.http('GET', resource);
    }

    store(resource, payload) {
        return this.http('POST', resource, payload);
    }

    show(resource, id) {
        return this.http('GET', resource, null, id);
    }

    update(resource, payload) {
        return this.http('PUT', resource, payload, payload.id);
    }

    destroy(resource, id) {
        return this.http('DELETE', resource, null, payload.id);
    }

    http(method, resource, payload = null, path = '') {
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: `${ this.url }/${ resource }/${ path }`,
                headers: {
                    'Accept': 'application/json',               // I'm assuming your token is in App.apiToken
                    'Authorization': 'Bearer ' + App.apiToken   // Do what you gotta do for your own Auth.
                },
                data: payload
            }).then(response => {
                return resolve(response.data);
            }).catch(error => {
                reject({ error });
            });
        });
    }
}

export default new Resource();
