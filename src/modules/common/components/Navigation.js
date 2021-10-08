import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {

    return (
        <>
            <ul className={s.list}>
                <li>
                    <Link to={'/converter'} activeClassName={s.active} className={s.list__item}>Converter</Link>
                </li>
                <li>
                    <Link to={'/exchange'} activeClassName={s.active} className={s.list__item}>Exchange</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation;
