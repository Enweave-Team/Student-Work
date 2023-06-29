import React, {FC} from 'react';
import './AboutUsComponent.scss';
import InfoBlock from "./InfoBlock";

type Props = {
    article: string;
}
const AboutUsComponent: FC<Props> = ({article}) => {
    return (
        <div className='about-wrapper'>
            <div className='about-item'>
                <span className='span-article-main'>{article}</span>
                <div className='text-item'>
                    <p>Ми є провідним постачальником послуг з написання різних видів студентських
                        робіт, таких як есе,
                        реферати, курсові роботи, дипломні роботи та інші.</p>

                    <span className='span-br'>
                    Наша компанія пропонує послуги виключно професійних письменників, які мають великий досвід у
                    написанні
                    студентських робіт. Крім того, ми гарантуємо повну конфіденційність і безпеку ваших персональних
                    даних
                    та інформації про замовлення.</span>
                    <div className='info-block-item'>
                        <InfoBlock numberInfo='5' text='Років у галузі'/>
                        <InfoBlock numberInfo='3000+' text='Виконаних робіт'/>
                        <InfoBlock numberInfo='1000+' text='Постійних клієнтів'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsComponent;