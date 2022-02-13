import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeMinPrice, changeMaxPrice, resetPrice} from "../../../Actions";
import Data from "../../../data";

const FilterPrice = () => {
    const dispatch = useDispatch();
    const [openBox, setOpenBox] = useState(true);
    const [minPrice, setMinPrice] = useState(Data.hits.total.minPrice);
    const [maxPrice, setMaxPrice] = useState(Data.hits.total.maxPrice);
    const min = Data.hits.total.minPrice;
    const max = Data.hits.total.maxPrice;

    let openClass = openBox ? ' open' : '';

    const clickReset = () => {
        setMinPrice(Data.hits.total.minPrice);
        setMaxPrice(Data.hits.total.maxPrice);
        dispatch(resetPrice());
    };

    const onChangeMin = ({target}) => {
        let { value, min, max } = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        setMinPrice(value);
        dispatch(changeMinPrice(value))
    };

    const onChangeMax = ({target}) => {
        let { value, min, max } = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        setMaxPrice(value);
        dispatch(changeMaxPrice(value))
    };

    return(
        <div className={"filter__box filter-price" + openClass}>
            <div className="filter__title" onClick={() => setOpenBox(!openBox)}>Цена,:</div>
            <div className="filter__items">
                <label className="input_box">
                    <input type="number" value={minPrice} min={min} max={max} onChange={onChangeMin} />
                    <span className="text">от</span>
                </label>
                <label className="input_box">
                    <input type="number" value={maxPrice} min={min} max={max} onChange={onChangeMax} />
                    <span className="text">до</span>
                </label>
            </div>
            <div className="reset__filter-price" onClick={clickReset}>Сбросить</div>
        </div>
    )
};

export default FilterPrice;
