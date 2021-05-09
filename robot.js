const axios = require('axios').default;

const cookies = {};

const session = axios.create();
session.defaults.withCredentials = true;
session.defaults.headers['user-agent'] = 'Chrome/51.02704.63';

function parseCookies(response) {
    const setCookies = response.headers['set-cookie'];
    
    for (const cookie of setCookies) {
        const pair = cookie.split(';')[0].split('=');
        cookies[pair[0]] = pair[1];

    }
}

async function main() {
    const initialRequest = await session.get('https://fr.grepolis.com/');
    parseCookies(initialRequest);
    console.log(cookies);
};

main();