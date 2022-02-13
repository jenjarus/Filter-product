import React from "react";

import Section from "./Section/Section";
import Sidebar from "./Sidebar/Sidebar";
import ActiveFilters from "./ActiveFilters/ActiveFilters";
import CatalogSort from "./CatalogSort";
import CartBox from "./CartBox/CartBox";

const Catalog = () => {
    return (
        <>
            <Section/>
            <div className="catalog__main">
                <div className="container">
                    <Sidebar/>
                    <div className="catalog__box">
                        <ActiveFilters/>
                        <div className="cart__items-top">
                            <CatalogSort/>
                        </div>
                        <CartBox/>
                        <div className="catalog__bottom">
                            <div className="catalog__bottom-info">
                                <div className="alert">Внимание!</div>
                                <div className="text">Оптовые цены на сайте действуют при покупке от 3000 руб.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Catalog;
