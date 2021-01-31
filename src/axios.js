import axios from 'axios';

const instance = axios.create({
    baseURL:`https://indianrailapi.com/api/v2/SpecialTrains/apikey/34cc482d4de3166c1a80eac6956ad676/`
});

export default instance;