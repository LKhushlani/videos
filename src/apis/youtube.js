import axios from 'axios';

const KEY='AIzaSyDC_TyWVVoaLCbt7fJ6hXa6k_Kxklbe6rk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
    part: 'snippet',
    type: 'video',
    maxResults :5,
    key : KEY
    }

})

