import React, {FC} from 'react';
import './ReviewsCardItem.scss';
import { ReactComponent as Star} from "../../assets/star.svg";

type Props = {
    id: number;
    images: string;
    text: string;
    userName: string;
}
const ReviewsCardItem: FC<Props> = ({images, text, id,userName}) => {
    console.log(images)
    return (
        <div key={id} className='cardItem-wrapper'>
            <img className='cardItem-photo' src={images} alt="AS"/>
            <span className='cardItem-name'>{userName}</span>
            <span className='cardItem-review'>{text}</span>
            <div className='star-item'><Star/><Star/><Star/><Star/><Star/></div>
        </div>
    );
};

export default ReviewsCardItem;