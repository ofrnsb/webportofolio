import { updatePassword, updateUsername } from '@/Modals/Reducers/Reducer';
import styles from '@/styles/Login.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Ob - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <input
            placeholder="Username"
            onChange={(e) => dispatch(updateUsername(e.target.value))}
          />
          <input
          type="password"
            placeholder="Password"
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />

          <div className={styles.wrapper}>
            <Link href="/Register">
              <span className={styles.register}>Register</span>
            </Link>

            <span className={styles.buttonWrapper}>
              <button></button>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;