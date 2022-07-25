import s from "./ImageGalerry"


 const ImageGallery =({ images }) => {
    return <ul 
    className={s.imageGallery}>
        {images.map(image => (
        <li key={image.id}>{images.name}</li>))}
    </ul>
}


export default ImageGallery