import React from "react";
import Head from 'next/head';
import style from './index.module.css';

const Home = () => {

    return (
        <div>
            <Head>
                <title>WIM | Project</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div className={style.Container}>
                <div className={style.Category}>
                    <h1>Wim의 완성된 프로젝트</h1>
                </div>
                <div className={style.Category}>
                    <h1>Wim의 진행중인 프로젝트</h1>
                </div>
                <div className={style.Category}>
                    <h1>Wim의 계획중인 프로젝트</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;