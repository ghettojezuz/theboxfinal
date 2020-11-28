import React, {useState, useEffect} from 'react';
import Header from "./Header";
import {Link} from "react-router-dom";
import {store} from "../../App";
import {connect} from "react-redux";
import {setIsAuth} from "../../store/actions";

const HeaderContainer = (props) => {

    const [linkList, setLinkList] = useState(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const getLinks = (links) => {
            let lastIndex = links.length - 1;
            if (props.hasExit) {
                return links.map((link, index) => {
                    return <Link key={index}
                                 to={link.href}
                                 className="header-links__item underlined"
                                 onClick={index === lastIndex ? handleExit : null}>
                        {link.text}
                    </Link>
                })
            } else {
                return links.map((link, index) => {
                    return <Link key={index}
                                 to={link.href}
                                 className="header-links__item underlined">
                        {link.text}
                    </Link>
                })
            }

        };

        let linkList = props.links;

        if (props.authDetect) {
            if (store.getState().auth.isAuth) {
                linkList[linkList.length-1] = {text: "Начать", href: "/app/user/main"};
            }
        }

        setLinkList(getLinks(linkList));
    }, []);

    const handleExit = () => {
          props.setIsAuth(false);
    };


    return <Header linkList={linkList}
                   isActive={isActive}
                   setIsActive={setIsActive}/>
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    setIsAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);