import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import styles from './project.module.css';

const Home = () => {

    return (
        <div>
            <Head>
                <title>WIM | COMPLETE</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div className={styles.Container}>
                <div className={styles.Container}>
                    <div className={styles.Box}>
                        <div>
                            <h1 className={styles.Title}>고래산 마을 라디오 앱</h1>
                            <p className={styles.Description}>연세가 있으신 분들이 앱 사용에 있어 어려움을 겪고 있음을 알고,</p>
                            <p className={styles.Description}>고래산마을 어르신들이 사용하실 수 있도록 직관적이고, 간편한 UI와 기능을 탑재한</p>
                            <p className={styles.Description}>들리는 라디오 앱을 제작하여 어르신들의 목소리를 듣고자 하였습니다.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image src={'/project/complete/whale1.png'} width={210} height={430} />
                            <Image src={'/project/complete/whale2.png'} width={210} height={430} />
                            <Image src={'/project/complete/whale3.png'} width={210} height={430} />
                            <Image src={'/project/complete/whale4.png'} width={210} height={430} />
                        </div>
                    </div>
                </div>
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
                <div className={styles.Container}>
                    <div className={styles.Box}>
                        <div>
                            <h1 className={styles.Title}>산격 3동 도시재생 국가사업</h1>
                            <p className={styles.Description}>문화의 거리를 통해 산격3동에 홍대 버스킹거리와 같은 활력공간을 만드는것이 목적입니다.</p>
                            <p className={styles.Description}>사업을 통해 지역 활력 및 지역주민 문화수준 증대, 지역주민의 휴식 공간 제공, 주위상권 활성화,</p>
                            <p className={styles.Description}>지역 홍보 및 관광객 유치 등의 효과를 기대하고 있습니다.</p>
                            <a href={'https://youtu.be/B7hDPArGkXQ'} style={{fontSize: 30}}>산격 3동 홍보 영상 보러가기</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image src={'/project/complete/sangyeok1.png'} width={210} height={430} />
                            <Image src={'/project/complete/sangyeok2.png'} width={210} height={430} />
                            <Image src={'/project/complete/sangyeok3.png'} width={210} height={430} />
                            <Image src={'/project/complete/sangyeok4.png'} width={210} height={430} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;