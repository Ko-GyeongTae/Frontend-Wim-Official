import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import style from './index.module.css'
import Link from 'next/link'

export default function Home() {
  const [position, setPosition] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const onScroll = () => {
    console.log(window.scrollY);
    setInnerWidth(window.innerWidth);
    setPosition(innerWidth >= 625 ? window.scrollY : window.scrollY * 0.8);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div className={style.Container}>
      <Head>
        <title>WIM | HOME</title>
      </Head>
      <div className={style.Container}>
        <div className={style.begin} style={{
          backgroundPositionY: position / -1.2,
          paddingTop: 60
        }}>
          <div>
            <h2 className={style.subtitleText}>Welcome To</h2>
            <h1 className={style.titleText}>Wim</h1>
          </div>
        </div>

        <div style={{
          opacity: (position-300) / 200,
          color: 'black',
          fontSize: 30,
          marginBottom: 50,
          alignItems:'center',
          paddingLeft: (innerWidth - 650) / 2,
        }}>
          <div style={{width: '375px auto'}}>
            <div style={{paddingLeft: innerWidth < 625 ? innerWidth / 2 - 125 : 187.5}}>
              <Image src={'/images/wimlogo.svg'} width={250} height={250}/>
            </div>
            <h1>Wim이 시작된 질문 한마디</h1>
          </div>
        </div>

        <div className={style.desc} style={{
          transform: `translateX(${innerWidth >= 625 ? position-100 : position-450}px)`,
          marginBottom: 100,
          width: '375px auto'
        }}>
          <div>
            <h1 style={{fontSize: 60}}>Where is my?</h1>
            <p style={{fontSize: 20}}>수없이 많은 앱들이 쏟아져 나오는 시장 속, 내가 찾고자 하는 앱만을 모아둡니다</p>
          </div>
        </div>
        <div className={style.desc} style={{
          transform: `translateX(${innerWidth >= 625 ? -position + 2450 : -position + 1700}px)`
        }}>
          <div>
            <h1 style={{fontSize: 60}}>상상을 현실로!</h1>
            <p style={{fontSize: 20}}>생활에 꼭 필요한, 동시에 유용한 앱을 만듭니다</p>
          </div>
        </div>
        <div>
          <h1
            style={{
              opacity: (position - 1000) / 200,
              transform: `translateX(${innerWidth >= 625 ? position - 950 : position - 1300}px)`,
              color: 'black',
              fontSize: 60,
              marginBottom: 50
            }}>Wim에 대해 궁금하다면?
          </h1>
        </div>
        <div className={style.begin_repo}
          style={{
            opacity: (position - 1200) / 200,
            backgroundPositionY: position / -15,
            paddingTop: 40,
            textAlign: 'center',
            textJustify: '-moz-initial',
          }}
        >
          <h3 style={{ fontSize: 120, color: 'white' }}>Join with Wim!</h3>
          <Link href={'/home'} passHref>
            <p style={{ fontSize: 50, color: 'white'}}>Wim에 대해 알아보러 가기</p>
          </Link>
        </div>
      </div>
    </div>

  )
}
