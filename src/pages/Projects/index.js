import Timeline from '@/Components/Timeline';
import { isUserLogin } from '@/Modals/Reducers/Reducer';
import styles from '@/styles/Project.module.css';
import Head from 'next/head';
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
        <title>Ob - Projects</title>
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
          <section className={`${styles.main__section} ${styles.projects}`}>
            <Timeline />
          </section>
        </main>
      )}
    </>
  );
};

export default Index;
