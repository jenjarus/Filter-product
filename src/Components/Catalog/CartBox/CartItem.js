import React from "react";
import {ReactComponent as IconFavorite} from '../../../Images/icon_favorite.svg';

const CartItem = ({data}) => {
    const dataSourse = data._source;

    const cartArticul = dataSourse.RM_ARTICLE;
    const cartImgUrl = 'https://xn--h1aeekjh.xn--p1ai/' + dataSourse.DETAIL_PICTURE;
    const cartUrl = 'https://xn--h1aeekjh.xn--p1ai' + dataSourse.URL;
    const cartName = dataSourse.RM_NAME;
    const cartPrice = dataSourse.PRICE.BASE.toFixed(2);
    const cartOldPrice = dataSourse.PRICE.OLD ? dataSourse.PRICE.OLD.toFixed(2) : 0;
    const cartMinPart = dataSourse.PROPERTYS.MINIMALNAYA_PARTIYA + ' ' + dataSourse.PROPERTYS.CML2_BASE_UNIT;
    const cartStoreVoronezh = dataSourse.STORE[475] + ' ' + dataSourse.PROPERTYS.CML2_BASE_UNIT;
    const cartStoreRostov = dataSourse.STORE[472] + ' ' + dataSourse.PROPERTYS.CML2_BASE_UNIT;

    return(
        <div className="cart">
            <div className="cart__top">
                <span className="cart__articul">Артикул: <span className="cart__elem">{cartArticul}</span></span>
                <span className="cart__favorite">
                    <IconFavorite/>
                </span>
            </div>
            <div className="cart__img">
                <img src={cartImgUrl} alt={cartName}/>
            </div>
            <div className="cart__name">
                <a href={cartUrl}>{cartName}</a>
            </div>
            <div className="cart__price">
                <span className="price">{cartPrice}</span>
                {cartOldPrice ? <span className="price-old">{cartOldPrice}</span> : ''}
            </div>
            <div className="cart__bottom">
                <div className="cart__line">
                    <div className="cart__available">
                        Наличие на складах:
                        <div className="cart__elem">Ростов-на-Дону - {cartStoreRostov}.</div>
                        <div className="cart__elem">Воронеж - {cartStoreVoronezh}.</div>
                    </div>
                    <button className="btn btn__cart">В корзину</button>
                </div>
                <div className="cart__line">
                    <div className="cart__action-period"></div>
                    <span className="cart__min-lot">Мин. партия: <span className="cart__elem">{cartMinPart}</span>.</span>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
