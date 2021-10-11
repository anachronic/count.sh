import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>count.sh - The stupid counter you need that one time</title>
        <meta name="description" content="Just a simple web counter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Counter />
      </main>
    </div>
  )
}
