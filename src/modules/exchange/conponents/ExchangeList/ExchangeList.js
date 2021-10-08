import React from 'react';
import s from './ExchangeList.module.css';
import ExchangeItem from '../ExchangeItem/ExchangeItem';
import ExchangeListHeader from "../ExchangeListHeader/ExchangeListHeader";
import ExchangeRecharts from "../ExchangeRecharts/ExchangeRecharts";


function ExchangeList({exchange}) {

    return (
        <>
            <ul className={s.exchange__list}>
                <li className={s.exchange__list__item}>
                    <ExchangeListHeader/>
                </li>
                <ExchangeRecharts/>
                {exchange.map((item) => <ExchangeItem key={item.id} item={item}/>)}
            </ul>
        </>
    )
}

export default ExchangeList;

