import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
const PER_PAGE = 40;

const getImages = async (search, page) => {
    const params = new URLSearchParams({
        key:'34901085-4ade6b8affa3f0eec4a7cea0c',
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE
    });
    const url = `https://pixabay.com/api/?${params.toString()}`
    const response = await axios(url);
    
            return response.data;
}
export { PER_PAGE, getImages };