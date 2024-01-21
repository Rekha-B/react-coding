import { useEffect, useState} from 'react';
import { images } from './constants';

const ImageSlider = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
       const timer = setTimeout(() => onHandleNextBtnClick() , 5000);

       return () => {
         clearTimeout(timer);
       }
    },[activeImageIndex]);

    const onHandlePreviousBtnClick = () => {
        setActiveImageIndex(!activeImageIndex ? images.length - 1 : activeImageIndex - 1)
    }

    const onHandleNextBtnClick = () => {
        setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
    return (
        <div className='flex justify-center'>
            <button className='font-bold p-4 m-10' onClick={() => onHandlePreviousBtnClick()}>Previous</button>
            {
                images.map((image, index) => <img key={index} src={image} alt="wallpaper" className={"w-[700px] h-[500px] object-contain " + (activeImageIndex === index ? 'block' : 'hidden')}/>)
            }
             
            <button className='font-bold p-4 m-10' onClick={() => onHandleNextBtnClick()}>Next</button>
        </div>
    )
}

export default ImageSlider;