import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

const Home = () => (
  <div className="page-container home">
    <Head>
      <title>Chef in tha house</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <span>Chef in tha House</span> 👨‍🍳
      </h1>

      <p className="description">
        Connect professional restaurateurs and their kitchens with people at home
      </p>

      <div className="grid">
        <Link href="/hungry-gourmets">
          <div className="card">
            <h3>Hungry Gourmets &rarr;</h3>
            <p>Check if restaurant meals, strictly delivered to your place, are available in your area</p>
          </div>
        </Link>

        <Link href="/bored-chefs">
          <div className="card">
            <h3>Bored Chefs &rarr;</h3>
            <p>Do you work in the world of catering and do you want to offer meals at home in your area? find out how</p>
          </div>
        </Link>
      </div>
    </main>

    <Footer />
  </div>
)

export default Home
