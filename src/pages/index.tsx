import classes from "../Styles/components/main.module.scss"
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import UIButton from "../components/UIButton";
import Card from "../components/Card";
import Modal from "../components/Create";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import router from "next/router";
import { IProject } from "@/types/project";
import ProjectList from "@/components/ProjectList";
import Create from "../components/Create";


const Main =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const startDate: Date = new Date(2023, 11, 16);
    const endDate: Date = new Date(2023, 11, 16);

    const projects :IProject[] = [
      {project_id: 1, p_name: 'name', description: 'description', skills: 'skills', startdate: startDate, endgate: endDate, published: 1, status: 'string'},
      {project_id: 2, p_name: 'name2', description: 'description2', skills: 'skills2', startdate: startDate, endgate: endDate, published: 1, status: 'string'},
      {project_id: 3, p_name: 'name3', description: 'description3', skills: 'skills3', startdate: startDate, endgate: endDate, published: 1, status: 'string'}
    ]


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
                <img onClick={() => router.push("/")} src="/images/IThub.b190e489.svg" alt="" />
                <UIButton onClick={openModal} type="string" children='Предложить проект'/>
                <input className={classes['Main__Header-input']} placeholder="Поиск проекта" type="text" />
                <IoNotificationsOutline style={{scale:"1.5"}}/>
                <UIButton onClick={() => router.push("/reg")} type="number" children='Войти'/>
                <div className={classes["dropdown"]}>
                    <MdOutlineAccountCircle style={{scale:"2"}} onMouseEnter={toggleMenu} />
                    {isMenuOpen  && (
                    <div onMouseLeave={toggleMenu} className={classes["dropdown-menu"]}>
                    <div style={{cursor:"pointer"}} onClick={() => router.push("/portfolio")}>Портфолио</div>
                    <div onClick={handleLogout}>Выход</div>
                </div>
      )}
                </div>
                
            </header>
            
            <div className={classes['Main__Projects']}>
                  <ProjectList projects={projects}/>
            </div>
            <Create isOpen={isModalOpen} onClose={closeModal}>
            
            </Create>
        </div>
    )
}

export default Main