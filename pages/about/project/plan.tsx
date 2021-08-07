import Head from "next/head";
import React from "react";
import styles from './project.module.css';

const Home = () => {

    return (
        <div>
            <Head>
                <title>WIM | PLAN</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div className={styles.Container}>
                <div className={styles.Box}>
                    <h1>Plan</h1>
                </div> 
            </div>
        </div>
    )
}

export default Home;