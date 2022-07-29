import axios from "axios";

const API_KEY ='27144211-7692123c331450892536fcf0f';


  //const URL = {
   //BASE_URL: `https://pixabay.com/api/`,
  // IMAGE_TYPE: `photo`,
   //ORIENTATION: `horisontal`,
   // PER_PAGE: 12,
   // KEY: `27144211-7692123c331450892536fcf0f`,

//}


axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
   key: API_KEY,
   orientation: 'horisontal',
   image_type: 'photo',
   per_page: 12,
}

export const getImages = async (query, page) => {
   const response = await axios.get(`?q=${query}&pade=${page}`);
   return response.data;
}






