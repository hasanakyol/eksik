import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eksik.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          eksik.com
        </h1>

        <p className={styles.description}>
         We're the people behind a revolutionary new EVM wallet for iOS and Android.
        </p>


      </main>

      <footer className={styles.footer}>
          Powered by Avalanche
      </footer>
    </div>
  )
}
