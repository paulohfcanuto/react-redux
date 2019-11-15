import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID edc97bcffa4097f5872b6d660bb539351c53e9a19a92ccaeebee389080074b24'
    }
});