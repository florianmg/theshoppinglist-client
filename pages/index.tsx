import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Button from '../components/button';
import Card from '../components/card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Button: </h3>
        <Button text="Button de test" onClick={() => alert('cool !')} />
        <h3>Card: </h3>
        <Card name="courgette aux poireaux" />
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
