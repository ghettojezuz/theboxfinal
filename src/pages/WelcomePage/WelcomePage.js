import React, {useEffect, useRef} from 'react';
import HeaderContainer from "../../components/Header/HeaderContainer";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import FooterContainer from "../../components/Footer/FooterContainer";
import {unauthorizedLinks} from "../../utils/HeaderLinks";

const WelcomePage = () => {

    return (
        <div className="animated fadeIn">
            <HeaderContainer authDetect={true} links={unauthorizedLinks}/>
            <section className="first-section">
                <div className="container">
                    <h1>Предиктивная аналитика потребления электроэнергии и экономических показателей Российской Федерации</h1>
                    <Button variant={"contained"}
                            color={"primary"}
                            className="main-btn"
                            size={"large"}
                            component={Link}
                            to={"/app/user/main"}>Начать</Button>
                </div>
            </section>
            <section className="wavy-section">
                <svg id="top-wave" viewBox="0 0 1440 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 271L60 248.417C120 225.833 240 180.667 360 162.6C480 144.533 600 153.567 720 162.6C840 171.633 960 180.667 1080 153.567C1200 126.467 1320 63.2333 1380 31.6167L1440 0V271H1380C1320 271 1200 271 1080 271C960 271 840 271 720 271C600 271 480 271 360 271C240 271 120 271 60 271H0Z" fill="#3F51B5"/>
                </svg>
                <div className="content">
                    <h2 className="content__title"> Надежность электроснабжения – основа нормального функционирования социальных и промышленных
                        объектов.  </h2>
                    <div className="content__text"> База для роста экономики и качества жизни и своевременное планирование строительства сетевых и генерирующих мощностей</div>
                </div>
                <svg id="bottom-wave" viewBox="0 0 1439 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-1 132L59 119.784C119 107.568 239 83.1362 359 68.545C479 53.6144 599 48.8638 719 51.2391C839 53.6144 959 63.455 1079 70.9203C1199 78.0463 1319 83.1362 1379 85.5116L1439 87.8869V0H1379C1319 0 1199 0 1079 0C959 0 839 0 719 0C599 0 479 0 359 0C239 0 119 0 59 0H-1V132Z" fill="#3F51B5"/>
                </svg>
            </section>
            <section className="human-section">
                <div className="container">
                    <div className="content">
                        <h2 className="content__title"> Отслеживание статистики электропотребления в реальном времени по территориям и отраслям. </h2>
                        <div className="content__text"> Прогнозирование загрузки существующих
                            энергосистем, оптимальное планирование их развития и хэджирование рисков снижения надежности
                            электроснабжения в максимально загруженных элементах системы</div>
                        <img id="human" src="../../assets/img/human.png" alt=""/>
                    </div>
                </div>
            </section>
            <FooterContainer/>
        </div>
    )
};

export default WelcomePage;