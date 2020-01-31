import qs from 'qs';

const CLIENT_ID = 'e450b9fa4e413ef';
const ROOT_URL = 'https://api.imgur.com';
// const CLIENT_SECRET = '6797eab976197ab32498cd71127b48501b2b7c8e';

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };

        window.location = `${ ROOT_URL }/oauth2/authorize?${qs.stringify(queryString)}`;
    }
}
