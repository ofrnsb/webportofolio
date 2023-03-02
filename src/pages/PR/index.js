import { isUserLogin } from '@/Modals/Reducers/Reducer';
import styles from '@/styles/CV.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
  const isLogin = useSelector((state) => state.Appreducer.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      Router.push('/Login');
    } else {
      dispatch(isUserLogin(true));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ob - PR</title>
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

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLogin && (
        <main className={styles.main}>
          <Link
            href="/Projects"
            className={`${styles.main__section} ${styles.projects}`}
          >
            <section>Projects</section>
          </Link>

          <section className={styles.main__sectionImage}>
            <Image alt="piano" src="/images/piano.jpeg" fill />
          </section>

          <section className={styles.main__sectionImage}>
            <Image alt="piano" src="/images/keyboard.jpeg" fill />
          </section>

          <Link
            href="/Resume"
            className={`${styles.main__section} ${styles.resume}`}
          >
            <section>Resume</section>
          </Link>
        </main>
      )}
    </>
  );
};

export default Index;
