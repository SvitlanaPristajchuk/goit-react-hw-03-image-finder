import axios from "axios";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import URL from './settings'

axios.defaults.baseURL = '${URL.BASE_URL}?key=${27144211-7692123c331450892536fcf0f}&image_type=${URL.IMAGE_TYPE}&per_page=${URL.PER_PAGE}&orientation=${URL.ORIENTATION}';



 export const getImages = async () => {
     const response = await axios.get('./images');
     return response.data;
 }




