import Head from "next/head";
import Image from 'next/image';
import React from "react";
import styles from './project.module.css';

const Home = () => {

    return (
        <div>
            <Head>
                <title>WIM | PROCEED</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div className={styles.Container}>
                <div className={styles.Box}>
                    <div>
                        <h1 className={styles.Title}>같이 사면 더 저렴해진다! 크누마켓</h1>
                        <p className={styles.Description}>비싼 배달/배송비와 1인가구에게는 많은 양의 제품을</p>
                        <p className={styles.Description}>경북대학교 학생들과 나누면서 각자의 부담을 덜 수 있도록</p>
                        <p className={styles.Description}>개인이 공동구매를 진행할 수 있는 플랫폼 앱을 제작하였습니다.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image src={'/project/proceed/knu1.png'} width={210} height={430} />
                        <Image src={'/project/proceed/knu2.png'} width={210} height={430} />
                        <Image src={'/project/proceed/knu3.png'} width={210} height={430} />
                        <Image src={'/project/proceed/knu4.png'} width={210} height={430} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;