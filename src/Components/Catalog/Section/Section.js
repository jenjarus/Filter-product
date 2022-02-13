import React from "react";
import {useSelector} from "react-redux";
import SectionItem from './SectionItem';

const Section = () => {
    let data = useSelector((store) => store.itemsCart);

    const arrSections = data.map(el => el._source.SECTIONS);
    let arrData = []; // Массив из элементов фильтра

    arrSections.forEach(el => {
        for(let key in el) {
            arrData.push(el[key].NAME);
        }
    });

    const arrItem = arrData.filter((item, index) => arrData.indexOf(item) === index); // Убирает дубли

    return(
        <div className="catalog__section">
            <div className="container">
                <div className="section__items">
                    {arrItem.map((el, i) => <SectionItem key={i} data={el}/> )}
                </div>
            </div>
        </div>
    )
};

export default Section;
