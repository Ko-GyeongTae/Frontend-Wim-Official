import React from "react";
import Head from 'next/head';
import style from './index.module.css';
import Link from "next/link";

const Home = () => {

    return (
        <div>
            <Head>
                <title>WIM | Project</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div className={style.Container}>
                <Link href={'/about/project/complete'} passHref>
                <div className={style.Category}>
                    <h1>Wim의 완성된 프로젝트</h1>
                </div>
                </Link>
                <Link href={'/about/project/proceed'} passHref>
                <div className={style.Category}>
                    <h1>Wim의 진행중인 프로젝트</h1>
                </div>
                </Link>
                <Link href={'/about/project/plan'} passHref>
                <div className={style.Category}>
                    <h1>Wim의 계획중인 프로젝트</h1>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;