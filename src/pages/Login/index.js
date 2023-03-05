import { inputValidation } from '@/Controller/inputValidation';
import useAxiosPost from '@/Controller/useFetch';
import {
  isUserLogin,
  updatePassword,
  updateUsername,
} from '@/Modals/Reducers/Reducer';
import { baseUrl } from '@/Modals/Url/Url';
import styles from '@/styles/Login.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const { username, password } = useSelector(
    (state) => state.Appreducer.userData
  );
  const inputRef = useRef();

  const { isLoading, postData, dispatch, error, fetchData } = useAxiosPost(
    `${baseUrl}/login`,
    { username, password },
    'Login'
  );

  const isLogin = useSelector((state) => state.Appreducer.isLogin);

  /* eslint-disable */
  useEffect(() => {
    let a = true;
    a && dispatch(isUserLogin(false));

    return () => {
      let a = false;
    };
  }, []);
  /* eslint-enable */

  const getLogin = async (e) => {
    e.preventDefault();
    await postData();
    inputRef.current.reset();

    dispatch(updateUsername(''));
    dispatch(updatePassword(''));
  };

  return (
    <>
      <Head>
        <title>Ob - Login</title>
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

          <>
            <input
              name="username"
              placeholder="Username"
              onChange={(e) => dispatch(updateUsername(e.target.value))}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                dispatch(updatePassword(e.target.value));
                inputValidation(e);
              }}
            />
          </>

          <div className={styles.wrapper}>
            <Link href="/Register">
              <span className={styles.register}>Register</span>
            </Link>

            <span
              className={styles.buttonWrapper}
              onClick={(e) => {
                getLogin(e);
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
