
import "./App.css";
import { Component } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import { Formik } from "formik";
import * as API from "./services/api"
import ImageGallery from "./components/ImageGallery/ImageGallery";



class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null, 
    searchQuery: '',
    page: 1,
   }
async componentDidMount (prevProps, prevState) {
  const data = API.getImages ('', 1)
  .then ((res) => console.log(res))
}
  render() {
    const { isLoading, images, error } = this.state
    return (
      <>
      {error &&  <p> Does not exist </p>  }
      <Searchbar onSubmit={this.getImages} />
      {isLoading ? ('LODING')
      : ( <ImageGallery images={images} />  )}
     
      

      
      </>
    );
  }
}




export default App;
