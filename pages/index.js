import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ragin' Diarrhea | Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="fb-root"/>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=658342791545843" nonce="HqqiIP7n"></script>

      <main className={`${styles.main} container-fluid`}>
        <h1 className={styles.title}>
          Ragin Diarrhea 
        </h1>


        <div className="row mb-5">
          <div className="col-sm-6">
            <h2 className={styles.tagline}>
              Circus Ska aus Herzogenaurach
            </h2>
          </div>
          <div className="col-sm-6">
            <div className="fb-page" data-href="https://www.facebook.com/theragind" data-tabs="timeline" data-width="" data-height="300px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/theragind" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/theragind">Ragin&#039; Diarrhea Facebook Page</a></blockquote></div>
          </div>
        </div>

        <div className="row mb-5">
          <h2>Music</h2>
        </div>

        <div className="row mb-5">
          <h2>Peeps</h2>
        </div>

        <div className="row mb-5">
          <h2>Contact</h2>
        </div>

      </main>

      <footer className={styles.footer}>
        Website by <a className="pl-1" href="https://github.com/RussellSnyder">Russell Snyder</a>
      </footer>
    </div>
  )
}
