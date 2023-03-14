import DropDown from '@/Components/DropDown';
import useAxiosPost from '@/Controller/useFetch';
import { baseUrl } from '@/Modals/Url/Url';
import styles from '@/styles/MoneyManagement.module.css';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import Head from 'next/head';
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Index = () => {
  const { isLoading, getData, dispatch, error, fetchData, mManagement } =
    useAxiosPost(`${baseUrl}/moneymanagement`);

  useEffect(() => {
    let a = true;

    a && alert('The backend for this feature is still under construction');

    return () => {
      let a = false;
    };
  }, []);

  const chartLabels = [
    ...new Set(([] || mManagement).map((item) => item.name)),
  ];

  const data = {
    //ambil dari balikan Backend(name)
    labels: chartLabels,
    datasets: [
      {
        // label: 'Spending:',
        //ambil dari balikan (amount)
        data: ([] || chartLabels).map((name) =>
          mManagement.reduce(
            (total, item) => (item.name === name ? total + item.amount : total),
            0
          )
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          '#000000',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          '000000',
        ],
        borderWidth: 1,
      },
    ],
  };

  const getSubmit = (e) => {
    e.preventDefault();
    console.log(chatData);
    getData();
  };

  return (
    <>
      <Head>
        <title>Ondi Butarbutar — Software Engieer</title>
        <title>Ob — Money Management</title>
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

      <div className={styles.mainDiv}>
        <section className={styles.chart}>
          <Doughnut
            data={data}
            width={'30%'}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'right',
                  rtl: true,
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 12,
                  },
                },
              },
            }}
            className={styles.doughnut}
          />
        </section>

        <form className={styles.formUser} onSubmit={(e) => getSubmit(e)}>
          <DropDown />

          <input type="number" name="Amount" placeholder="Amount" />
          <input type="date" name="date" placeholder="Date" />
          <input type="text" name="note" placeholder="Note" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Index;
