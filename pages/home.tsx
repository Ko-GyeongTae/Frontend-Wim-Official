import Head from 'next/head'
import Link from 'next/link'
import styles from './home.module.css'

export default function Home() {
    return (
        <div className={styles.Container}>
            <Head>
                <title>WIM | HOME</title>
                <link rel="icon" href="/wimicon.svg" />
            </Head>
            <div style={{marginBottom: 70}}>
                <h1 className={styles.Title}>Wim</h1>
                <h2 className={styles.SubTitle}>Where Is My?</h2>
                <p className={styles.Description}>수없이 많은 앱들이 쏟아져 나오는 지금의 시장 속에서 내가 찾고자 하는 앱만을 모아둔다는 의미를 가지고 있습니다.</p>
                <p className={styles.Description}>우리 생활에서 꼭 필요한, 동시에 유용한 앱을 만들겠다는 의지를 담고 있습니다.</p>
            </div>
            <div>
                <Link href={'/about/project/'} passHref><h1>Wim의 사업 둘러보기</h1></Link>
            </div>
            <div>
                <Link href={'/about/wimceo'} passHref><h1>Wim의 대표 알아보기</h1></Link>
            </div>
        </div>
    )
}
