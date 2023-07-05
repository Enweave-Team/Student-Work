import React from 'react';
import './JoinOurTeam.scss';
import WhiteButton from "../Button/WhiteButton";
import {Link} from "react-router-dom";

const JoinOurTeam = () => {
    return (
        <div className='join-wrapper'>
           <span className='span-sub-article'>Приєднуйся до
                команди!</span>
            <div className='join-items'>
                <span className='join-item-span'>
                <p>Student Helper — це хороший спосіб збільшити свої доходи, працюйте вдома у зручний для Вас час.
                    Заповніть
                    форму виконавців і назавжди попрощайтеся з однотипною роботою за графіком 5/2!</p>
                    </span>
                <Link to='/performer'><WhiteButton text='Стати виконавцем'/></Link>
            </div>
        </div>
    );
};

export default JoinOurTeam;