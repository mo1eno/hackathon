import classes from "../Styles/main.module.scss"
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import UIButton from "./UIButton";
import Card from "./Card";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Main: React.FC =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const handleLogout = () => {
        // Логика выхода из аккаунта
        console.log('Logout');
      };

      const handlePortfolio = () => {
        // Логика перехода на страницу портфолио
        console.log('Go to portfolio');
      };

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    return(
        <div className={classes["Main"]}>
            <header className={classes["Main__Header"]}>
                <img onClick={() =>navigate('/')} src="/images/IThub.b190e489.svg" alt="" />
                <UIButton onClick={openModal} type="string" children='Предложить проект'/>
                <input className={classes['Main__Header-input']} placeholder="Поиск проекта" type="text" />
                <IoNotificationsOutline style={{scale:"1.5"}}/>
                <UIButton onClick={() =>navigate('/reg')} type="number" children='Войти'/>
                <div className={classes["dropdown"]}>
                    <MdOutlineAccountCircle style={{scale:"2"}} onMouseEnter={toggleMenu} />
                    {isMenuOpen  && (
                    <div onMouseLeave={toggleMenu} className={classes["dropdown-menu"]}>
                    <div style={{cursor:"pointer"}} onClick={() =>navigate('/portfolio')}>Портфолио</div>
                    <div onClick={handleLogout}>Выход</div>
                </div>
      )}
                </div>
                
            </header>
            
            <div className={classes['Main__Projects']}>
                <Card name="Проект" discription="Описание проекта" skills="Java" skills1="PHP" skills2="JavaScript" />
                <Card name="Проект" discription="Описание проекта" skills="Java" skills1="PHP" skills2="JavaScript" />
                <Card name="Проект" discription="Описание проекта" skills="Java" skills1="PHP" skills2="JavaScript" />
                <Card name="Проект" discription="Описание проекта" skills="Java" skills1="PHP" skills2="JavaScript" />
                <Card name="Проект" discription="Описание проекта" skills="Java" skills1="PHP" skills2="JavaScript" />
                <Card name="Проект" discription="Описание проекта" skills="Java" skills1="PHP" skills2="JavaScript" />
            
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            
            </Modal>
        </div>
    )
}

export default Main