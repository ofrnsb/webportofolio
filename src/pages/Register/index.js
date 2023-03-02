import useAxiosPost from '@/Controller/useFetch';
import {
  updateCompany,
  updatePassword,
  updateUsername,
} from '@/Modals/Reducers/Reducer';
import { baseUrl } from '@/Modals/Url/Url';
import styles from '@/styles/Login.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const userData = useSelector((state) => state.Appreducer.userData);
  const { isLogin } = useSelector((state) => state.Appreducer.userData);
  const inputRef = useRef();

  const { postData, dispatch, error, fetchData } = useAxiosPost(
    `${baseUrl}/register`,
    userData,
    'Register'
  );

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
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => dispatch(updateUsername(e.target.value))}
          />
          <input
            type="text"
            placeholder="Company"
            onChange={(e) => dispatch(updateCompany(e.target.value))}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />

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
