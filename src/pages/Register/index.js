import useAxiosPost from '@/Controller/useFetch';
import {
  updateCompany,
  updatePassword,
  updateUsername,
} from '@/Modals/Reducers/Reducer';
import { baseUrl } from '@/Modals/Url/Url';
import styles from '@/styles/Register.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const userData = useSelector((state) => state.Appreducer.userData);
  const { isLogin } = useSelector((state) => state.Appreducer.userData);
  const inputRef = useRef();
  const [info, setInfo] = useState(true);

  const { isLoading, postData, dispatch, error, fetchData } = useAxiosPost(
    `${baseUrl}/register`,
    userData,
    'Register'
  );

  useEffect(() => {
    let a = true;

    setTimeout(() => {
      setInfo(false);
    }, 3000);

    return () => {
      let a = false;
    };
  });

  return (
    <>
      <Head>
        <title>Ob - Register</title>
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

      <main className={styles.main}>
        <form action="" ref={inputRef}>
          {error && <span className={styles.Error}>{fetchData}</span>}
          {isLoading && (
            <span className={styles.Loading}>
              <div></div>
            </span>
          )}

          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder={info ? 'min. 6 character' : 'Username'}
              onChange={(e) => dispatch(updateUsername(e.target.value))}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Company"
              onChange={(e) => dispatch(updateCompany(e.target.value))}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <input
              type="password"
              placeholder={info ? 'min. 8 character' : 'Password'}
              onChange={(e) => dispatch(updatePassword(e.target.value))}
            />
          </div>
          <div className={styles.wrapper}>
            <Link href="/Login">
              <span className={styles.register}>Login</span>
            </Link>

            <span
              className={styles.buttonWrapper}
              onClick={(e) => {
                e.preventDefault();
                postData();
                inputRef.current.reset();
              }}
            >
              <button></button>
            </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
