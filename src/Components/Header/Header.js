import React from "react";

import Logo from "../../Images/logo.png";
import Account from "../../Images/icon_account.svg";
import Basket from "../../Images/icon_basket.svg";
import Favorite from "../../Images/icon_favorite_header.svg";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header__top">
                        <div className="header__top-city">Москва</div>
                        <div className="header__top-menu">
                            <a href="">Новости</a>
                            <a href="">Контакты</a>
                            <a href="">Условия работы</a>
                            <a href="">Доставка</a>
                            <a href="">Оставить отзыв</a>
                        </div>
                        <div className="header__top-info">Пн - Пт: 08:00 - 17:00</div>
                    </div>
                    <div className="header__box">
                        <div className="header__logo">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <div className="header__middle">
                            <div className="header__desc">
                                <div className="header__desc-title">Крупнейший выбор товаров для праздника</div>
                                <div className="header__desc-subtitle">Оптовый интернет - магазин</div>
                            </div>
                            <div className="header__middle-bottom">
                                <span className="btn catalog__btn">КАТАЛОГ</span>
                                <div className="search__box">
                                    <input type="text" className="search__input" placeholder="Название товара или артикул"/>
                                    <span className="search__submit" />
                                </div>
                            </div>
                        </div>
                        <div className="header__right">
                            <div className="header__tel-box">
                                <div className="header__tel">
                                    <a href="tel:89009498373" className="tel">8 (900) 949 83-73</a>
                                    <span className="header__tel-bottom callback__btn">Заказать звонок</span>
                                </div>
                                <div className="header__tel">
                                    <a href="tel:89009498373" className="tel">8 (900) 949 83-73</a>
                                    <span className="header__tel-bottom">Бесплатно по РФ</span>
                                </div>
                            </div>
                            <div className="header__btns">
                                <div className="header__btn header__btn_account">
                                    <img src={Account} alt="Account" className="icon"/>
                                    <span className="text">Войти</span>
                                </div>
                                <div className="header__btn header__btn_basket">
                                    <img src={Basket} alt="Basket" className="icon"/>
                                    <span className="text">1144.50р.</span>
                                </div>
                                <div className="header__btn header__btn_favorite">
                                    <img src={Favorite} alt="Favorite" className="icon"/>
                                    <span className="text">Избранное</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="breadcrumb">
                <div className="container">
                    <span className="breadcrumb__item"><a href="">Главная</a></span>
                    <span className="breadcrumb__item"><a href="">Праздники</a></span>
                    <span className="breadcrumb__item"><a href="">День рождения</a></span>
                    <span className="breadcrumb__item last">Полиграфия</span>
                </div>
            </div>
            <div className="page__title">
                <div className="container">
                    <h1>Полиграфия ко дню рождения</h1> <span className="title__quantity">(1300 товаров)</span>
                </div>
            </div>
        </>
    )
};

export default Header;
