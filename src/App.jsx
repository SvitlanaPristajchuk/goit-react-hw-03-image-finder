
import "./App.css";
import { Component } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import { Formik } from "formik";
import * as API from ".helpers/api"







class App extends Component {
  state = {
    images: [],
    isLoading: false 
    
   }
 async getImages(values) {
const images = await API.getImages(values);
console.log(images);

  }
  render() {
    const { isLoading } = this.state
    return (
      <>
      <Searchbar onSubmit={this.getImages}/>
      </>
    );
  }
}



export default App;
