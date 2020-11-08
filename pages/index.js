import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import dropboxV2Api from 'dropbox-v2-api';
import { FacebookProvider, Page } from 'react-facebook';
import BandcampPlayer from 'react-bandcamp'
import SpotifyPlayer from 'react-spotify-player';


function Home({ seo, main, sections }) {
  const { music, about, contact } = sections

  return (
    <div className={styles.container}>
      <Head>
        <title>{seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta description={seo.description} />
        <meta name="robots" content="index, follow"/>
      </Head>
      {/* <div id="fb-root" ></div>
      <script async defer samesite="true" crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=658342791545843" nonce="HqqiIP7n"></script> */}

      <main className={`${styles.main} container-fluid`}>
        <h1 className={styles.title}>{main.band}</h1>
        <h2 className={styles.tagline}>{main.tagline}</h2>
        <div className="row mb-5 mt-5">
          <div className="col-12 d-flex justify-content-center">
            <FacebookProvider appId="658342791545843">
              <Page href="https://www.facebook.com/theragind" tabs="timeline" width="700" />
            </FacebookProvider>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 text-center text-md-left">
            <h2>{music.title}</h2>
          </div>
          <div className="col-md-6">
            <SpotifyPlayer
              uri="spotify:album:0bt5XtAaiL8qIhCqAC3gXJ"
              size={{
                width: '100%',
                height: '600px'
              }}
              view='coverart'
              theme='black'
            />
          </div>
          <div className="col-md-6">
            <BandcampPlayer height="600px" width="500px" album={music.bandcamp.album} />
          </div>
        </div>

        <div className="row text-center text-md-left">
          <div className="col-12">
            <h2>{contact.title}</h2>
          </div>
          <h3 className="col-md-6">
            {contact.message}
          </h3>
          <h3 className="col-md-6">
            <a className="btn-block btn btn-primary-outline btn-primary btn-lg" href={`mailto:${contact.email}?subject=${contact.subject}`}>{contact.cta}</a>
          </h3>
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
  const data = await new Promise(function (resolve, reject) {
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