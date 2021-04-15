import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home(props) {

  const onButtonClick = () => {
    router.replace(router.asPath);
  }

  const router = useRouter();
  const affirmation = props.data.affirmation; 

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Affirmativ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Affirmativ</a>
          </div>
        </nav>
      </header>

      <main className="container-fluid d-flex w-100 m-0 align-items-center border text-center text-white p-5 display-5" id="affirmation-container">
          <div className="row col-9 mx-auto">
            <p>{affirmation}
            </p>
            <button className="btn mt-3 col-6 mx-auto btn-outline-light" type="button" onClick={onButtonClick}>
              Next Affirmation
            </button>
      </div>
      </main>
    </div>
  )
}

export async function getServerSideProps (context) {
  const res = await fetch('https://www.affirmations.dev');
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: { data }
  }
}