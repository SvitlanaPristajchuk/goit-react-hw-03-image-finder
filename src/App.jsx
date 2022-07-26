
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
    error: null
   }

   async componentDidMount() {
     try {
       this.setState ({ isLoading: true })
      const images = await API.getImages({ images });
      this.setState ({ images, isLoading: false })

     } catch (error) {
       this.setState({ error:true, isLoading: false})


     }
   
   }

  render() {
    const { isLoading, images, error } = this.state
    return (
      <>
      {error && ( <p> Does not exist </p> ) }
      <Searchbar onSubmit={this.getImages}/>
      { isLoading ? 'LOADING' : <ImageGallery images={images} /> }

      
      </>
    );
  }
}



export default App;
