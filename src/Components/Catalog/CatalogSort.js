import React, {useState} from "react";
import {changeSortFlag} from "../../Actions";
import {useDispatch} from "react-redux";

const arrSortFlag = [
    {flag: 'nameASC', text: 'От А до Я'},
    {flag: 'nameDESC', text: 'От Я до А'},
    {flag: 'priceASC', text: 'Сначала дешевые'},
    {flag: 'priceDESC', text: 'Сначала дорогие'}
];

const CatalogSort = () => {
    const [openClass, setOpenClass] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className="catalog__sort">
            <div className="select_box">
                <div className="select" onClick={() => setOpenClass(!openClass)}>Сортировать по</div>
                <div className={"select__list" + (openClass ? " open" : "")}>
                    {arrSortFlag.map(el =>
                        <div className="sort__item" onClick={() => {
                            dispatch(changeSortFlag(el.flag));
                            setOpenClass(!openClass);
                        }}>{el.text}</div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default CatalogSort;
