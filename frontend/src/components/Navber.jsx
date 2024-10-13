import { Button, IconButton, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/imgs/navbar/logo.png";
import arrowmenu from "../assets/imgs/navbar/arrowmenu.png";
import china from "../assets/imgs/navbar/china.jpg";
import thai from "../assets/imgs/navbar/thai.jpg";
import eng from "../assets/imgs/navbar/eng.jpg";
import facebook from "../assets/imgs/navbar/facebook.png";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Profile from "./Profile";
import { useAuth } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";


function Navbar({ scroll, width }) {

    useEffect(() => {
        console.log("scroll=>", scroll)
    }, [scroll])
    const { t, i18n } = useTranslation()
    const init = [
        { path: "/", title: t("home"), subTitle: [], statusActive: true },
        { path: "#", title: t("about_us"), subTitle: [], statusActive: false },
        {
            path: "#", title: t("services"), subTitle:
                [
                    { path: "#", title: t("auditing"), statusActive: false },
                    { path: "#", title: t("accounting"), statusActive: false },
                    { path: "#", title: t("tax_services"), statusActive: false },
                    { path: "#", title: t("payroll"), statusActive: false },
                ], statusActive: false
        },
        { path: "#", title: t("article"), subTitle: [], statusActive: false },
    ]
    const [pathData, setPathData] = useState(init);
    const [language, setLanguage] = useState([
        { lang: <img className="w-[16px] h-[11px]" src={eng} alt=""></img>, title: "EN" },
        { lang: <img className="w-[16px] h-[11px]" src={thai} alt="" ></img>, title: "TH" },
        { lang: <img className="w-[16px] h-[11px]" src={china} alt=""></img>, title: "ZH" }
    ]);
    const [contect, setContect] = useState([
        { text: "082-529-7313" },
        { text: "Email Us" },
    ]);
    const [contectImg, setContectImg] = useState([
        { img: <img className="w-[14px] h-[14px]" src={facebook} alt=""></img> },
        { img: <MailOutlineIcon sx={{ width: "18px", height: "18px" }}></MailOutlineIcon> },
        { img: <PhoneIcon sx={{ width: "18px", height: "18px" }}></PhoneIcon> }
    ]);
    const { user, setUser } = useAuth()
    const location = useLocation();
    const [isShow, setIsShow] = useState(true);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [languageData, setLanguageData] = useState("EN");
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenLanguage, setIsOpenLanguage] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [openSubTitleIndex, setOpenSubTitleIndex] = useState(null);

    const onClickOpen = () => {
        setIsOpenProfile(!isOpenProfile)
    };

    const handleClickActive = (index) => {
        const newArray = pathData.map((item, i) => {
            if (index === i) {
                return { ...item, statusActive: true };
            } else {
                return { ...item, statusActive: false };
            }
        });
        setPathData(newArray);
    };

    const onClickLanguage = (data) => {
        i18n.changeLanguage(data);
        setLanguageData(data)
    };

    useEffect(() => {
        setPathData([...init])
    }, [languageData])

    useEffect(() => {
        if (location?.pathname == '/login' || location?.pathname == '/register') {
            setIsShow(false)
        } else {
            setIsShow(true)
        }
    }, [location?.pathname])

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const toggleSubTitle = (index) => {
        setOpenSubTitleIndex(openSubTitleIndex === index ? null : index);
    };

    const closeMobileMenu = () => {
        setIsOpenMenu(false)
        setOpenSubTitleIndex(null);
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClose = () => {
        setHoveredIndex(false);
    };


    return (
        <>
            {isShow &&
                (
                    <>
                        {width ? (
                            <div className={scroll ? "bg-navbar scroll" : "bg-navbar"}>
                                <div className="navbar-box" >
                                    <div className="navbar-logo">
                                        <img src={logo} alt="Logo Connect" className="img-logo"></img>
                                    </div>
                                    <div className="navbar-detail">

                                        <div className={"border-b-[1px] border-[#e8e8e8] lg:border-transparent lg:border-b-0 " + (scroll ? "navbar-contact contact-scroll " : "navbar-contact")}>
                                            <ul className="flex gap-[20px] pl-[10px]">
                                                {language?.map((data, index) =>
                                                (
                                                    <React.Fragment key={index}>
                                                        <li className="lt-lang" onClick={() => onClickLanguage(data?.title)}>
                                                            {data?.lang}
                                                        </li>
                                                    </React.Fragment>
                                                )
                                                )}
                                            </ul>
                                            <ul className="flex items-center gap-[40px]">
                                                {contect?.map((data, index) =>
                                                (
                                                    <li className="text-contact text-[#023a51] text-[18px] font-[600]" key={index}>
                                                        {data?.text}
                                                    </li>
                                                )
                                                )}
                                            </ul>
                                            <ul className="flex items-center gap-[15px]">
                                                {contectImg?.map((data, index) =>
                                                (
                                                    <li className="btn-img" key={index}>
                                                        {data?.img}
                                                    </li>
                                                )
                                                )}
                                                <>
                                                    {user ?
                                                        (
                                                            <IconButton aria-label="AccountCircleIcon" onClick={onClickOpen}>
                                                                <AccountCircleIcon />
                                                                {isOpenProfile &&
                                                                    <Profile></Profile>
                                                                }
                                                            </IconButton>
                                                        ) : (
                                                            <Button component={Link} to="/login" className="btn-login">{t("login")}</Button>
                                                        )
                                                    }
                                                </>
                                            </ul>
                                        </div>
                                        <div className="navbar">
                                            <ul className="navbar-item">
                                                {pathData?.map((data, index) =>
                                                (
                                                    <React.Fragment key={index}>
                                                        <Link to={data.path} className={data?.statusActive ? "active item-path" : "item-path"}>
                                                            <li key={index}
                                                                onClick={closeMobileMenu}
                                                                onMouseEnter={() => handleMouseEnter(index)}
                                                            >
                                                                <a className={data?.statusActive ? "" : " "}
                                                                    onClick={() => { () => handleClickActive(index) }}
                                                                    >
                                                                    {data?.title}
                                                                </a>
                                                                {data?.subTitle?.length > 0 &&
                                                                    <React.Fragment >
                                                                        <KeyboardArrowDownIcon sx={{ color: "#023a51" }}></KeyboardArrowDownIcon>
                                                                        <div
                                                                            className="sub-menu-hover"
                                                                            onMouseEnter={() => handleMouseEnter(index)}
                                                                            onMouseLeave={handleMouseLeave}
                                                                        >
                                                                            {hoveredIndex === index && (
                                                                                data.subTitle.map((dataItem, idx) => (
                                                                                    <MenuItem
                                                                                        className="sub-item"
                                                                                        key={idx}
                                                                                        onClick={handleClose}
                                                                                    >
                                                                                        {dataItem.title}
                                                                                    </MenuItem>
                                                                                ))
                                                                            )}
                                                                        </div>
                                                                    </React.Fragment>
                                                                }
                                                            </li>
                                                        </Link>
                                                    </React.Fragment>
                                                )
                                                )}
                                            </ul>
                                            <button className="btn-contact">{t("contact_us")}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={"bg-navbar-menu"}>
                                <div className="navbar-menu-box" >
                                    <div className="navbar-menu-logo">
                                        <img src={logo} alt="Logo Connect" className="img-logo"></img>
                                    </div>
                                    <div className="navbar-menu-contact">
                                        <ul className="navbar-menu-language flex gap-[20px] pl-[10px]">
                                            {language?.map((data, index) =>
                                            (
                                                <React.Fragment key={index}>
                                                    <li className="lt-lang" onClick={() => onClickLanguage(data?.title)}>
                                                        {data?.lang}
                                                    </li>
                                                </React.Fragment>
                                            )
                                            )}
                                        </ul>
                                        <ul className="navbar-menu-language-mobile flex gap-[20px] pl-[10px] " onClick={() => setIsOpenLanguage(!isOpenLanguage)} >
                                            <li className="lt-language-title xl:hidden">
                                                {languageData}
                                            </li>
                                        </ul>
                                        {isOpenLanguage &&
                                            <div className="language-mobile xl:hidden">
                                                {language?.map((data, index) =>
                                                (
                                                    <React.Fragment key={index}>
                                                        <li className="lt-language" onClick={() => onClickLanguage(data?.title)}>
                                                            {data?.lang}
                                                        </li>
                                                    </React.Fragment>
                                                )
                                                )}
                                            </div>
                                        }
                                    </div>

                                    <div className="navbar-menu">
                                        {user ?
                                            (
                                                <IconButton aria-label="AccountCircleIcon" onClick={onClickOpen}>
                                                    <AccountCircleIcon />
                                                    {isOpenProfile &&
                                                        <Profile></Profile>
                                                    }
                                                </IconButton>
                                            ) : (
                                                <Button component={Link} to="/login" className="btn-login">{t("login")}</Button>
                                            )
                                        }
                                        <button onClick={toggleMenu} className="btn-menu">
                                            <img src={arrowmenu}></img>
                                        </button>
                                        {isOpenMenu &&
                                            <ul className="navbar-menu-item">
                                                {pathData?.map((data, index) =>
                                                (
                                                    <React.Fragment key={index}>
                                                        <Link
                                                            onClick={closeMobileMenu}
                                                            to={data.path}
                                                            className={data?.statusActive ? "active-menu item-menu-path " : "nav_link item-menu-path "}
                                                        >
                                                            <li className={(data?.subTitle?.length ? "flex" : "") + " w-full text-center"}>
                                                                <a
                                                                    className={(data?.subTitle?.length ? "pl-[24px] flex-1 text-center " : "text-center ") + (data?.statusActive ? "active-menu" : "menu")}
                                                                    onClick={() => {
                                                                        handleClickActive(index)
                                                                    }}
                                                                >
                                                                    {data?.title}
                                                                </a>
                                                                {data?.subTitle?.length > 0 && (
                                                                    <KeyboardArrowDownIcon
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            e.preventDefault();
                                                                            toggleSubTitle(index);
                                                                        }}
                                                                        className={`keyboard-arrow ${data?.statusActive ? "active-arrow" : ""}`}
                                                                    />
                                                                )}
                                                            </li>
                                                        </Link>
                                                        {data?.subTitle?.length > 0 &&
                                                            openSubTitleIndex === index && (
                                                                <ul className="sub-menu" onClick={closeMobileMenu}>
                                                                    {data.subTitle.map((sub, subIndex) => (
                                                                        <li key={subIndex} className="sub-menu-item">
                                                                            <Link
                                                                                to={sub.path}
                                                                                className={
                                                                                    sub.statusActive
                                                                                        ? "active-submenu item-submenu-path"
                                                                                        : "nav_link item-submenu-path"
                                                                                }
                                                                            >
                                                                                {sub.title}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                    </React.Fragment>
                                                )
                                                )}
                                            </ul>
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </>

                )
            }
        </>



    )
}

export default Navbar 