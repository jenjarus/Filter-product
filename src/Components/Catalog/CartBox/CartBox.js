import React from "react";
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const CartBox = () => {
    let data = useSelector((store) => store.itemsCart);
    const sortFlag = useSelector((store) => store.sortFlag);
    const filters = useSelector((store) => store.filters);
    const minPrice = useSelector((store) => store.minPrice);
    const maxPrice = useSelector((store) => store.maxPrice);

    // Фильтрация выводимого товара
    for (let key in filters) {
        if (Object.keys(filters[key]).length !== 0) {
            // Фильтрация по категории
            if (key === 'SECTIONS') {
                data = data.filter(el => {
                    const arrSections = el._source.SECTIONS;
                    let arrData = [];
                    for(let key in arrSections) {
                        arrData.push(arrSections[key].NAME);
                    }

                    const arrFind = arrData.map(el => filters[key].includes(el));

                    return arrFind.includes(true)
                });
            } else {
                data = data.filter(el => filters[key].includes(el._source.PROPERTYS[key]));
            }
        }
    }

    data = data.filter(el => el._source.PRICE.BASE >= minPrice && el._source.PRICE.BASE <= maxPrice);
    console.log(data)

    // Функции для сортировки
    const sortNameASC = (prev, next) => {
        const prevSort = prev._source.PROPERTYS.NAIMENOVANIE_DLYA_SAYTA;
        const nextSort = next._source.PROPERTYS.NAIMENOVANIE_DLYA_SAYTA;

        if (prevSort > nextSort) {
            return 1;
        } else if (prevSort < nextSort) {
            return -1;
        }
        return 0;
    };
    const sortNameDESC = (prev, next) => {
        const prevSort = prev._source.PROPERTYS.NAIMENOVANIE_DLYA_SAYTA;
        const nextSort = next._source.PROPERTYS.NAIMENOVANIE_DLYA_SAYTA;

        if (nextSort > prevSort) {
            return 1;
        } else if (nextSort < prevSort) {
            return -1;
        }
        return 0;
    };
    const sortPriceASC = (prev, next) => prev._source.PRICE.BASE - next._source.PRICE.BASE;
    const sortPriceDESC = (prev, next) => next._source.PRICE.BASE - prev._source.PRICE.BASE;

    // Выбираем функцию для сортировки
    let sortFunc;
    switch (sortFlag) {
        case 'nameASC': sortFunc = sortNameASC; break;
        case 'nameDESC': sortFunc = sortNameDESC; break;
        case 'priceASC': sortFunc = sortPriceASC; break;
        case 'priceDESC': sortFunc = sortPriceDESC; break;
        default: sortFunc = sortNameASC; break;
    }

    data = data.sort(sortFunc);

    return(
        <div className="cart__items">
            {data.length ? data.map((el, i) => <CartItem key={i} data={el}/> ) : 'не найдено'}
        </div>
    )
};

export default CartBox;
