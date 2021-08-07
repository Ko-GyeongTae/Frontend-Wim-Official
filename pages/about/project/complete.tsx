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
                            <Image src={'/project/complete/whale1.png'} width={210} height={430} alt=""/>
                            <Image src={'/project/complete/whale2.png'} width={210} height={430} alt=""/>
                            <Image src={'/project/complete/whale3.png'} width={210} height={430} alt=""/>
                            <Image src={'/project/complete/whale4.png'} width={210} height={430} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.Container}>
                    <div className={styles.Box}>
                        <div>
                            <h1 className={styles.Title}>학생 창업 유망 300 선정</h1>
                            <p className={styles.Description}>우리는 상상을 현실로 만들어가는 중입니다.</p>
                            <p className={styles.Description}>이러한 과정에서 전국에 있는 학생창업 유망 300팀 안에 선정될 수 있게 되었습니다.</p>
                            <p className={styles.Description}>우리의 미래를 향한 발자국 앞으로도 잘 지켜봐주시면 감사하겠습니다.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image src={'/project/complete/mainban.png'} width={840} height={430} alt=""/>
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
                            <Image src={'/project/complete/sangyeok1.png'} width={210} height={430} alt=""/>
                            <Image src={'/project/complete/sangyeok2.png'} width={210} height={430} alt=""/>
                            <Image src={'/project/complete/sangyeok3.png'} width={210} height={430} alt=""/>
                            <Image src={'/project/complete/sangyeok4.png'} width={210} height={430} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;