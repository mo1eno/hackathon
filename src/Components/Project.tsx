import { MdOutlineAccountCircle } from "react-icons/md";
import classes from "../Styles/project.module.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import UIButton from "./UIButton";
import { useNavigate } from "react-router-dom";
const Project = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const navigate = useNavigate();

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
        <div className={classes['Project']}>
            <header className={classes["Project__Header"]}>
                <img onClick={()=> navigate('/')} src="/images/IThub.b190e489.svg" alt="" />
                <UIButton onClick={openModal} type="string" children='Предложить проект'/>
                <input className={classes['Project__Header-input']} placeholder="Поиск проекта" type="text" />
                <IoNotificationsOutline style={{scale:"1.5"}}/>
                <div className={classes["dropdown"]}>
                    <MdOutlineAccountCircle style={{scale:"2"}} onMouseEnter={toggleMenu} />
                    {isMenuOpen  && (
                    <div onMouseLeave={toggleMenu} className={classes["dropdown-menu"]}>
                    <div onClick={handlePortfolio}>Портфолио</div>
                    <div onClick={handleLogout}>Выход</div>
                </div>
      )}
                </div>
                
            </header>
            <div className={classes['Project__Main']}>
                <div className={classes['Project__Main-name']}>
                      <h1>Name</h1>
                      <div className={classes['Project__Main-status']}>Статус</div>
                </div>
                <div className={classes['Project__Main__Members']}>
                    <h2>Участники</h2>
                    <ul className={classes['Project__Main__Member-list']}>
                    <li>member</li>
                    <li>member</li>
                    <li>member</li>
                 </ul>
                </div>
                <div className={classes['Project__Main__Discription']}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor voluptatum non fuga eos eligendi nemo hic porro, aperiam voluptates, doloremque 
                    minus minima fugit dolorum dolorem illum atque nostrum recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor voluptatum non fuga eos eligendi nemo hic porro, aperiam voluptates, doloremque 
                    minus minima fugit dolorum dolorem illum atque nostrum recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor voluptatum non fuga eos eligendi nemo hic porro, aperiam voluptates, doloremque
                    </p>
                </div>
                <div className={classes['Project__Main__Skills']}>
                  <h2>Навыки</h2>
                  <ul className={classes['Project__Main__Skills-list']}>
                      <li>Skill1</li>
                      <li>Skill2</li>
                      <li>Skill3</li>
                  </ul>
                </div>
                <div className={classes['Project__Buttons']}>
                <UIButton type="number" children="Редактировать"/>
                <UIButton type="number" children="Пригласить"/>
                <UIButton type="active" children="Удалить участника"/>
                <UIButton type="active" children="Покинуть"/>
                </div>
            </div>
        </div>
    )
}
export default Project