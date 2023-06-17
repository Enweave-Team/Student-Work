import React from 'react';
import './JoinOurTeam.scss';
import WhiteButton from "../Button/WhiteButton";

const JoinOurTeam = () => {
    return (
        <div className='join-wrapper'>
           <span className='span-article'>Приєднуйся до
                команди!</span>
            <div className='join-items'>
                <span className='join-item-span'>
                <p>Student Helper — це хороший спосіб збільшити свої доходи, працюйте вдома у зручний для Вас час.
                    Заповніть
                    форму виконавців і назавжди попрощайтеся з однотипною роботою за графіком 5/2!</p>
                    </span>
                <WhiteButton text='Стати виконавцем'/>
            </div>
        </div>
    );
};

export default JoinOurTeam;