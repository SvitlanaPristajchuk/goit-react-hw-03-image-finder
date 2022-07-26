import s from "./ImageGallery.module.css"
import { Component } from 'react';

 const ImageGallery = ({ images }) => {
    return  (
        < ul 
    className={s.imageGallery}>
        {images.map(image => (
        <li key={image.id}>{image.name}</li>))}
    </ul>
    )
        }



export default ImageGallery