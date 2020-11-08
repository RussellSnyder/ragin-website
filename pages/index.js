import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import dropboxV2Api from 'dropbox-v2-api';

function Home({ seo, main }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="fb-root" />
      <script async defer samesite="true" crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=658342791545843" nonce="HqqiIP7n"></script>

      <main className={`${styles.main} container-fluid`}>
        <h1 className={styles.title}>{main.band}</h1>


        <div className="row mb-5">
          <div className="col-sm-6">
            <h2 className={styles.tagline}>{main.tagline}</h2>
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

export async function getStaticProps() {
  const dropbox = dropboxV2Api.authenticate({
    token: process.env.DROPBOX_TOKEN
  })


  const response = await dropbox({
    resource: 'files/download',
    parameters: {
      path: '/pages/home/EN.json'
    }
  })

  // const reader = new FileReader();
  // console.log(response)
  const data = await new Promise(function(resolve,reject) {
    response.on('readable', () => {
      response.setEncoding('utf8');
      const json = response.read()
      console.log(json);
      resolve(JSON.parse(json))
    })
  })
  
  
  return {
    props: data
  }

}


export default Home