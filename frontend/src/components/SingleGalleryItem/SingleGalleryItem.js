import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';



const SingleGalleryItem = ({ galleryItem, index, filterGalleryItems, column }) => {
    const { img } = galleryItem;
    // console.log(filterGalleryItems)
    const [photoIndex, setPhotoIndex] = useState(index);
    const [open, setOpen] = useState(false);
    const lightboxImages = filterGalleryItems.map(img => img.img);
    const images = lightboxImages;
    return (
        <>
            {open && (
                <Lightbox

                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}

        </>
    );
};

export default SingleGalleryItem;