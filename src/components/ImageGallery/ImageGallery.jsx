import s from "./ImageGallery.module.css"
import { Component } from 'react';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";


 const ImageGallery = ({ images }) => {
    return  (
        < ul className={s.imageGallery}>

        {images.map(image => (
            <ImageGalleryItem
         key={image.id}>{image.name}
         </ImageGalleryItem>))}
    </ul>
    )
        }



export default ImageGallery