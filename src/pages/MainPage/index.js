import { isUserLogin } from '@/Modals/Reducers/Reducer';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const isLogin = useSelector((state) => state.Appreducer.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      Router.push('/Login');
    }

    return () => {
      dispatch(isUserLogin(false));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ondi Butarbutar — Software Engieer</title>
        <title>Ob — Home</title>
        <meta
          name="keywords"
          content="Ondi Frans Butarbutar, software engineer, portfolio, Bank Negara Indonesia, projects, data-driven"
        />
        <meta name="author" content="Ondi Frans Butarbutar" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ondi Frans Butarbutar - Software Engineer"
        />
        <meta
          property="og:description"
          content="Welcome to Ondi Frans Butarbutar's software engineer portfolio. Ondi is currently working at Bank Negara Indonesia and has delivered mission-focused, data-driven projects and new features that drive results and help achieve business goals."
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLogin && (
        <main className={styles.main}>
          <div className={styles.main__description}>
            <main className={styles.main__Title}>Software Enginner.</main>
            <p>
              I&#39;m Ondi Frans Butarbutar, a Software Engineer — currently
              working at Bank Negara Indonesia, and have delivered
              mission-focused, data-driven projects and new features that drive
              results and help achieve business goals I&#39;m{' '}
            </p>
          </div>

          <button className={styles.main__circleButton}>X</button>

          <Link href="/Resume">
            <button className={styles.main__circleButton}>X</button>
          </Link>
        </main>
      )}
    </>
  );
}
