import React, {useState} from "react";
import FilterItem from "./FilterItem";
import {useSelector} from "react-redux";

const Filter = ({title, nameClassComp, nameFilter, open = false}) => {
    let data = useSelector((store) => store.itemsCart);
    const [openBox, setOpenBox] = useState(open);
    const arrData = data.map(el => el._source.PROPERTYS[nameFilter]); // Массив из элементов фильтра
    const arrItem = arrData.filter((item, index) => arrData.indexOf(item) === index); // Убирает дубли

    let openClass = openBox ? ' open' : '';

    return(
        <div className={`filter__box filter-${nameClassComp}` + openClass}>
            <div className="filter__title" onClick={() => setOpenBox(!openBox)}>{title}:</div>
            <div className="filter__items">
                {arrItem.map((el, i) => (el) ? <FilterItem key={i} data={el} nameFilter={nameFilter}/> : '' )}
            </div>
        </div>
    )
};

export default Filter;
