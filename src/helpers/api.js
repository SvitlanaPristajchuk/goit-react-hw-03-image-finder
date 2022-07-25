import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=27144211-7692123c331450892536fcf0f&image_type=photo&orientation=horizontal&per_page=12';

export const getImages = async () => {
    const response = await axios.get('/values');
    return response.data;
  };




