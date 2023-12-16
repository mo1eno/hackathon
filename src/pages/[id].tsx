import { IProject, IProjectMembers, IStudent } from "@/types/project";
import { useState } from "react";
import UIButton from "@/components/UIButton";
import { MdOutlineAccountCircle } from "react-icons/md";
import classes from "../Styles/components/project.module.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import router from "next/router";

const ProjectPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
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


    const startDate: Date = new Date(2023, 11, 16);
    const endDate: Date = new Date(2023, 11, 16);

    const projects: IProject = {project_id: 1, p_name: 'name', description: 'description', skills: 'skills', startdate: startDate, endgate: endDate, published: 1, status: 'string'}
    
    const dateReg: Date = new Date(2023, 11, 16);
    
    const members: IStudent = {
      fname: 'fname', sname: 'sname',
      stud_id: 1,
      email: "retet@gmail.com",
      date_reg: dateReg,
      login: "315eher",
      pass: "123"
    }
    return(
        <div className={classes['Project']}>
            <header className={classes["Project__Header"]}>
                <img onClick={() => router.push("/")} src="/images/IThub.b190e489.svg" alt="" />
                <UIButton onClick={openModal} type="string" children='Предложить проект'/>
                <input className={classes['Project__Header-input']} placeholder="Поиск проекта" type="text" />
                <IoNotificationsOutline style={{scale:"1.5"}}/>
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
            <div className={classes['Project__Main']}>
                <div className={classes['Project__Main-name']}>
                      <h1>{projects.p_name}</h1>
                      <div className={classes['Project__Main-status']}>{projects.status}</div>
                </div>
                <div className={classes['Project__Main__Members']}>
                    <h2>Участники</h2>
                    <ul className={classes['Project__Main__Member-list']}>
                    <li>{members.fname} {members.sname}</li>
                    <li>{members.fname} {members.sname}</li>
                    <li>{members.fname} {members.sname}</li>
                 </ul>
                </div>
                <div className={classes['Project__Main__Discription']}>
                  <p>{projects.description}</p>
                </div>
                <div className={classes['Project__Main__Skills']}>
                  <h2>Навыки</h2>
                  <ul className={classes['Project__Main__Skills-list']}>
                      <li>{projects.skills}</li>
                      <li>{projects.skills}</li>
                      <li>{projects.skills}</li>
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

export default ProjectPage;