import React, {FC, useState} from 'react';
import './RegistrationForm.scss';
import ReactDOM from "react-dom";
import CustomInput from "../CustomInput/CustomInput";

type Props = {
   onConfirm?: any;

}
const RegistrationForm: FC<Props> = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRep, setPasswordRep] = useState('')

    const handlerChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handlerChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlerChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handlerChangePasswordRep = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordRep(event.target.value)
    }

    const ModalBackdrop = () => {
        return (
            <div className='backdrop'>

            </div>
        )
    }
    const ModalOverlay: FC<Props> = () => {
        return (
            <>
                <CustomInput placeholder='Вводьте сюди...' article='Ім’я та прізвище' type='text' value={name} change={handlerChangeName}/>
                <CustomInput placeholder='example@gmail.com' type='text' value={email} change={handlerChangeEmail} article='Email'/>
                <CustomInput placeholder='Пароль має містити букви, цифри, символи' type='password' value={password} change={handlerChangePassword} article='Пароль'/>
                <CustomInput placeholder='Пароль має містити букви, цифри, символи' type='password' value={passwordRep} change={handlerChangePasswordRep}
                             article='Повторіть пароль'/>
            </>
        )
    }

    const backdrop = document.getElementById('backdrop-root')!
    const overlay = document.getElementById('overlay-root')!

    return (
        <>
            {/*{ReactDOM.createPortal(<ModalBackdrop />, backdrop)}*/}
            {ReactDOM.createPortal(<ModalOverlay  />, overlay)}
        </>
    );
};

export default RegistrationForm;