import React, {FC} from 'react';
import './RegistrationForm.scss';
import ReactDOM from "react-dom";
import Button from "../Button/Button";

type Props = {
    onConfirm?: any;
}
const ModalBackdrop: FC<Props> = ({onConfirm}) => {
    return (
        <div onClick={onConfirm} className='backdrop'/>
    )
}
const ModalOverlay: FC<Props> = ({onConfirm}) => {

    return (
        <form className='registrationForm'>
            <span className='span-name'>Реєстрація</span>
            <div className='registration-item'><p>Ім’я та прізвище</p>
                <input type="text" placeholder='Вводьте сюди...'/></div>
            <div className='registration-item'><p>Email</p>
                <input type="text" placeholder='example@gmail.com'/></div>
            <div className='registration-item'><p>Пароль</p>
                <input type="text" placeholder='Пароль має містити букви, цифри, символи'/></div>
            <div className='registration-item'><p>Повторіть пароль</p>
                <input type="text" placeholder='Пароль має містити букви, цифри, символи'/></div>
            <p>чи увійти через</p>
            <Button onConfirm={onConfirm} text='Зареєструватися'/>
        </form>
    )
}
const RegistrationForm: FC<Props> = ({onConfirm}) => {
    const backdrop = document.getElementById('backdrop-root')!
    const overlay = document.getElementById('overlay-root')!

    return (
        <>
            {ReactDOM.createPortal(<ModalBackdrop onConfirm={onConfirm}/>, backdrop)}
            {ReactDOM.createPortal(<ModalOverlay/>, overlay)}
        </>
    );
};

export default RegistrationForm;