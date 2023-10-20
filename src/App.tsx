import React, {useEffect, useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";
import {useWindowSize} from "./components/helpers/useWindowSize";


function App() {

    // const [burger, setBurger] = useState(false)

    const size = useWindowSize()
    // console.log(size)

    return (
        <div>
            {/*<div>Heder</div>*/}
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {/*{burger*/}
                {size > 700
                    ? <div className={styles.nav}>
                        {/*<div><NavLink className={({isActive})=>isActive ?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/protected'}>Protected Page</NavLink></S.NavWrapper>
                        {/*<div><a href="/page1">aHrefPage1</a></div>*/}
                    </div>
                    : <div className={styles.nav}>=</div>}
                <div className={styles.content}>
                    <Outlet/>
                    {/*<div>Footer</div>*/}
                    {/*<Site/>*/}
                </div>
            </div>
        </div>
    );
}


export default App;
