import React, {FC} from 'react';
import './AboutUs.scss';
import InfoBlock from "./InfoBlock";

type Props = {
    article: string;
}
const AboutUs: FC<Props> = ({ article }) => {
    return (
        <div className='about-wrapper'>
            <div className='about-item'>
                <span className='span-article'>{article}</span>
                <div className='text-area'><p>Ми є провідним постачальником послуг з написання різних видів студентських
                    робіт, таких як есе,
                    реферати, курсові роботи, дипломні роботи та інші.
                    <br/>
                    Наша компанія пропонує послуги виключно професійних письменників, які мають великий досвід у
                    написанні
                    студентських робіт. Крім того, ми гарантуємо повну конфіденційність і безпеку ваших персональних
                    даних
                    та інформації про замовлення.</p>
                    <div className='infoblock-item'>
                        <InfoBlock numberInfo='5' text='Років у галузі'/>
                        <InfoBlock numberInfo='3000+' text='Виконаних робіт'/>
                        <InfoBlock numberInfo='1000+' text='Постійних клієнтів'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;