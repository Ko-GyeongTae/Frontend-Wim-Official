import Head from "next/head";
import Image from 'next/image'
import React from "react";
import styles from './wimceo.module.css';

const Home = () => {

    return (
        <div>
            <Head>
                <title>WIM | CEO</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div className={styles.Container}>
                <div className={styles.MainBox}>
                    <div className={styles.Header}>
                        <Image src={'/ceo/profile.jpeg'} width={400} height={400} alt=""/>
                        <div className={styles.HeaderText}>
                            <h1 style={{fontSize: 60}}>전우진 CEO</h1>
                            <h2> - 전국 IoT 비즈니스 아이디어 공모전 3등 수상</h2>
                            <h2> - 대경권 공공데이터 활용 대회 2등 수상</h2>
                            <h2> - 경북대학교 ‘슬기로운 컴학대회’ 개최</h2>
                            <h2> - 경북대학교 컴퓨터학부 보안연구회 소속</h2>
                        </div>
                    </div>
                    <div className={styles.Body1}>
                        <h3>저는 도전적인 성격의 소유자입니다.</h3>
                        <h3>새로운 일은 신나는 일! 주저없이 뛰어듭니다.</h3>
                    </div>
                    <div className={styles.Body2}>
                        <h3>저는 매 순간 최선을 다하여</h3>
                        <h3>제가 원하는 것을 얻고자 끊임없이 노력합니다.</h3>
                    </div>
                    <div className={styles.Body3}>
                        <h3>저는 사람들을 만나는 것을 좋아하며,</h3>
                        <h3>형성된 인적 네트워크로 새로운 가치를 만들어내고자 합니다.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;