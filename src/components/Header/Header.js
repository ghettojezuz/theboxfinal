import React from 'react';
import {Link} from "react-router-dom";

const classNames = require("classnames");

const Header = ({linkList, isActive, setIsActive}) => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to="/" className="header-logo">
                        <svg width="152" height="49" viewBox="0 0 152 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path d="M39.1096 4.59372H9.89032C6.97023 4.59372 4.59375 6.96867 4.59375 9.88876V39.1096C4.59375 42.0296 6.97023 44.4061 9.89032 44.4061H39.1096C42.0297 44.4061 44.4062 42.0296 44.4062 39.108V9.88885C44.4062 6.96876 42.0297 4.59372 39.1096 4.59372ZM41.3438 39.1097C41.3438 40.3408 40.3423 41.3437 39.1097 41.3437H9.89032C8.65762 41.3437 7.65625 40.3407 7.65625 39.1081V9.88885C7.65625 8.65769 8.65772 7.65632 9.89032 7.65632H39.1096C40.3423 7.65632 41.3437 8.65778 41.3437 9.88885V39.1097H41.3438Z" fill="#222222"/>
                                <path d="M18.375 0C17.5282 0 16.8438 0.686022 16.8438 1.5313V6.125C16.8438 6.97028 17.5282 7.6563 18.375 7.6563C19.2219 7.6563 19.9063 6.97028 19.9063 6.125V1.5313C19.9063 0.686022 19.2219 0 18.375 0Z" fill="#222222"/>
                                <path d="M12.25 0C11.4032 0 10.7188 0.686022 10.7188 1.5313V6.125C10.7188 6.97028 11.4032 7.6563 12.25 7.6563C13.0969 7.6563 13.7812 6.97028 13.7812 6.125V1.5313C13.7812 0.686022 13.0969 0 12.25 0Z" fill="#222222"/>
                                <path d="M36.75 0C35.9032 0 35.2188 0.686022 35.2188 1.5313V6.125C35.2188 6.97028 35.9032 7.6563 36.75 7.6563C37.5969 7.6563 38.2812 6.97028 38.2812 6.125V1.5313C38.2812 0.686022 37.5969 0 36.75 0Z" fill="#222222"/>
                                <path d="M30.625 0C29.7782 0 29.0938 0.686022 29.0938 1.5313V6.125C29.0938 6.97028 29.7782 7.6563 30.625 7.6563C31.4719 7.6563 32.1563 6.97028 32.1563 6.125V1.5313C32.1563 0.686022 31.4719 0 30.625 0Z" fill="#222222"/>
                                <path d="M24.5 0C23.6532 0 22.9688 0.686022 22.9688 1.5313V6.125C22.9688 6.97028 23.6532 7.6563 24.5 7.6563C25.3469 7.6563 26.0313 6.97028 26.0313 6.125V1.5313C26.0313 0.686022 25.3469 0 24.5 0Z" fill="#222222"/>
                                <path d="M18.375 41.3438C17.5282 41.3438 16.8438 42.0298 16.8438 42.8751V47.4688C16.8438 48.3141 17.5282 49.0001 18.375 49.0001C19.2219 49.0001 19.9063 48.3141 19.9063 47.4688V42.8751C19.9063 42.0297 19.2219 41.3438 18.375 41.3438Z" fill="#222222"/>
                                <path d="M12.25 41.3438C11.4032 41.3438 10.7188 42.0298 10.7188 42.8751V47.4688C10.7188 48.3141 11.4032 49.0001 12.25 49.0001C13.0969 49.0001 13.7812 48.3141 13.7812 47.4688V42.8751C13.7812 42.0297 13.0969 41.3438 12.25 41.3438Z" fill="#222222"/>
                                <path d="M36.75 41.3438C35.9032 41.3438 35.2188 42.0298 35.2188 42.8751V47.4688C35.2188 48.3141 35.9032 49.0001 36.75 49.0001C37.5969 49.0001 38.2812 48.3141 38.2812 47.4688V42.8751C38.2812 42.0297 37.5969 41.3438 36.75 41.3438Z" fill="#222222"/>
                                <path d="M30.625 41.3438C29.7782 41.3438 29.0938 42.0298 29.0938 42.8751V47.4688C29.0938 48.3141 29.7782 49.0001 30.625 49.0001C31.4719 49.0001 32.1563 48.3141 32.1563 47.4688V42.8751C32.1563 42.0297 31.4719 41.3438 30.625 41.3438Z" fill="#222222"/>
                                <path d="M24.5 41.3438C23.6532 41.3438 22.9688 42.0298 22.9688 42.8751V47.4688C22.9688 48.3141 23.6532 49.0001 24.5 49.0001C25.3469 49.0001 26.0313 48.3141 26.0313 47.4688V42.8751C26.0313 42.0297 25.3469 41.3438 24.5 41.3438Z" fill="#222222"/>
                                <path d="M6.125 29.0937H1.5313C0.68449 29.0937 0 29.7797 0 30.625C0 31.4703 0.68449 32.1563 1.5313 32.1563H6.125C6.97181 32.1563 7.6563 31.4703 7.6563 30.625C7.6563 29.7797 6.97181 29.0937 6.125 29.0937Z" fill="#222222"/>
                                <path d="M6.125 35.2188H1.5313C0.68449 35.2188 0 35.9048 0 36.75C0 37.5953 0.68449 38.2813 1.5313 38.2813H6.125C6.97181 38.2813 7.6563 37.5953 7.6563 36.75C7.6562 35.9047 6.97181 35.2188 6.125 35.2188Z" fill="#222222"/>
                                <path d="M6.125 10.7188H1.5313C0.68449 10.7188 0 11.4048 0 12.25C0 13.0953 0.68449 13.7813 1.5313 13.7813H6.125C6.97181 13.7813 7.6563 13.0953 7.6563 12.25C7.6562 11.4047 6.97181 10.7188 6.125 10.7188Z" fill="#222222"/>
                                <path d="M6.125 16.8438H1.5313C0.68449 16.8438 0 17.5298 0 18.3751C0 19.2204 0.68449 19.9064 1.5313 19.9064H6.125C6.97181 19.9064 7.6563 19.2204 7.6563 18.3751C7.6563 17.5298 6.97181 16.8438 6.125 16.8438Z" fill="#222222"/>
                                <path d="M6.125 22.9687H1.5313C0.68449 22.9687 0 23.6547 0 24.5C0 25.3453 0.68449 26.0313 1.5313 26.0313H6.125C6.97181 26.0313 7.6563 25.3453 7.6563 24.5C7.6563 23.6547 6.97181 22.9687 6.125 22.9687Z" fill="#222222"/>
                                <path d="M47.4688 29.0937H42.875C42.0282 29.0937 41.3438 29.7797 41.3438 30.625C41.3438 31.4703 42.0282 32.1563 42.875 32.1563H47.4688C48.3156 32.1563 49 31.4703 49 30.625C49 29.7797 48.3156 29.0937 47.4688 29.0937Z" fill="#222222"/>
                                <path d="M47.4688 35.2188H42.875C42.0282 35.2188 41.3438 35.9048 41.3438 36.75C41.3438 37.5953 42.0282 38.2813 42.875 38.2813H47.4688C48.3156 38.2813 49 37.5953 49 36.75C49 35.9047 48.3156 35.2188 47.4688 35.2188Z" fill="#222222"/>
                                <path d="M47.4688 10.7188H42.875C42.0282 10.7188 41.3438 11.4048 41.3438 12.25C41.3438 13.0953 42.0282 13.7813 42.875 13.7813H47.4688C48.3156 13.7813 49 13.0953 49 12.25C49 11.4047 48.3156 10.7188 47.4688 10.7188Z" fill="#222222"/>
                                <path d="M47.4688 16.8438H42.875C42.0282 16.8438 41.3438 17.5298 41.3438 18.3751C41.3438 19.2204 42.0282 19.9064 42.875 19.9064H47.4688C48.3156 19.9064 49 19.2204 49 18.3751C49 17.5298 48.3156 16.8438 47.4688 16.8438Z" fill="#222222"/>
                                <path d="M47.4688 22.9687H42.875C42.0282 22.9687 41.3438 23.6547 41.3438 24.5C41.3438 25.3453 42.0282 26.0313 42.875 26.0313H47.4688C48.3156 26.0313 49 25.3453 49 24.5C49 23.6547 48.3156 22.9687 47.4688 22.9687Z" fill="#222222"/>
                            </g>
                            <path d="M68.1797 34H65.3789V19.2695H60.3398V16.8672H73.2188V19.2695H68.1797V34ZM86.9648 34H84.1992V26.0312C84.1992 25.0312 83.9961 24.2852 83.5898 23.793C83.1914 23.3008 82.5547 23.0547 81.6797 23.0547C80.5234 23.0547 79.6719 23.4023 79.125 24.0977C78.5859 24.7852 78.3164 25.9414 78.3164 27.5664V34H75.5625V15.7656H78.3164V20.3945C78.3164 21.1367 78.2695 21.9297 78.1758 22.7734H78.3516C78.7266 22.1484 79.2461 21.6641 79.9102 21.3203C80.582 20.9766 81.3633 20.8047 82.2539 20.8047C85.3945 20.8047 86.9648 22.3867 86.9648 25.5508V34ZM96.457 34.2344C94.4414 34.2344 92.8633 33.6484 91.7227 32.4766C90.5898 31.2969 90.0234 29.6758 90.0234 27.6133C90.0234 25.4961 90.5508 23.832 91.6055 22.6211C92.6602 21.4102 94.1094 20.8047 95.9531 20.8047C97.6641 20.8047 99.0156 21.3242 100.008 22.3633C101 23.4023 101.496 24.832 101.496 26.6523V28.1406H92.8594C92.8984 29.3984 93.2383 30.3672 93.8789 31.0469C94.5195 31.7188 95.4219 32.0547 96.5859 32.0547C97.3516 32.0547 98.0625 31.9844 98.7188 31.8438C99.3828 31.6953 100.094 31.4531 100.852 31.1172V33.3555C100.18 33.6758 99.5 33.9023 98.8125 34.0352C98.125 34.168 97.3398 34.2344 96.457 34.2344ZM95.9531 22.8906C95.0781 22.8906 94.375 23.168 93.8438 23.7227C93.3203 24.2773 93.0078 25.0859 92.9062 26.1484H98.7891C98.7734 25.0781 98.5156 24.2695 98.0156 23.7227C97.5156 23.168 96.8281 22.8906 95.9531 22.8906ZM117.48 20.8047C119.098 20.8047 120.355 21.3906 121.254 22.5625C122.16 23.7344 122.613 25.3789 122.613 27.4961C122.613 29.6211 122.156 31.2773 121.242 32.4648C120.328 33.6445 119.059 34.2344 117.434 34.2344C115.793 34.2344 114.52 33.6445 113.613 32.4648H113.426L112.922 34H110.859V15.7656H113.613V20.1016C113.613 20.4219 113.598 20.8984 113.566 21.5312C113.535 22.1641 113.512 22.5664 113.496 22.7383H113.613C114.488 21.4492 115.777 20.8047 117.48 20.8047ZM116.766 23.0547C115.656 23.0547 114.855 23.3828 114.363 24.0391C113.879 24.6875 113.629 25.7773 113.613 27.3086V27.4961C113.613 29.0742 113.863 30.2188 114.363 30.9297C114.863 31.6328 115.68 31.9844 116.812 31.9844C117.789 31.9844 118.527 31.5977 119.027 30.8242C119.535 30.0508 119.789 28.9336 119.789 27.4727C119.789 24.5273 118.781 23.0547 116.766 23.0547ZM137.309 27.4961C137.309 29.6133 136.766 31.2656 135.68 32.4531C134.594 33.6406 133.082 34.2344 131.145 34.2344C129.934 34.2344 128.863 33.9609 127.934 33.4141C127.004 32.8672 126.289 32.082 125.789 31.0586C125.289 30.0352 125.039 28.8477 125.039 27.4961C125.039 25.3945 125.578 23.7539 126.656 22.5742C127.734 21.3945 129.254 20.8047 131.215 20.8047C133.09 20.8047 134.574 21.4102 135.668 22.6211C136.762 23.8242 137.309 25.4492 137.309 27.4961ZM127.875 27.4961C127.875 30.4883 128.98 31.9844 131.191 31.9844C133.379 31.9844 134.473 30.4883 134.473 27.4961C134.473 24.5352 133.371 23.0547 131.168 23.0547C130.012 23.0547 129.172 23.4375 128.648 24.2031C128.133 24.9688 127.875 26.0664 127.875 27.4961ZM143.367 27.3789L139.02 21.0391H142.16L145.113 25.5742L148.09 21.0391H151.207L146.848 27.3789L151.43 34H148.312L145.113 29.1484L141.926 34H138.809L143.367 27.3789Z" fill="#222222"/>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="49" height="49" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <ul className="header-links">
                        {linkList}
                    </ul>
                    <div className={classNames("header-toggle", isActive ? "active" : "")}
                         onClick={() => setIsActive(!isActive)}>
                        <span className="header-toggle__line"> </span>
                        <span className="header-toggle__line"> </span>
                        <span className="header-toggle__line"> </span>
                    </div>
                    <div className={classNames("header-links--mobile", isActive ? "active" : "")}>
                        {linkList}
                    </div>
                </div>
            </header>

        </>
    )
};

export default Header;