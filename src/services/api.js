import axios from "axios";



const URL = {
   BASE_URL: `https://pixabay.com/api/`,
   IMAGE_TYPE: `photo`,
   ORIENTATION: `horisontal`,
    PER_PAGE: 12,
    KEY: `27144211-7692123c331450892536fcf0f`,

}


axios.defaults.baseURL = '${URL.BASE_URL}?key=${URL.KEY}&image_type=${URL.IMAGE_TYPE}&per_page=${URL.PER_PAGE}&orientation=${URL.ORIENTATION}';

//export async function getImages (guery, page =1) {
 //  const {
 //       data: { hits }, 
 //   } = await axios.get (`?`);
 //   return hits;

//}

export const getImages = async () => {
   const response = await axios.get(`/images`);
   return response.data;
}

 // export const axios = require ('axios').default;

//axios
//.get('${URL.BASE_URL}?key=${27144211-7692123c331450892536fcf0f}&image_type=${URL.IMAGE_TYPE}&per_page=${URL.PER_PAGE}&orientation=${URL.ORIENTATION}')
//.then((response) => {console.log(response.data)})
//.catch ((error) => { console.error (error)})







