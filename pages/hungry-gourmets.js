import Head from 'next/head'
import Footer from '../components/Footer'

const HungryGourmets = () => (
  <div className="page-container gourmets">
    <Head>
      <title>Chef in tha house - hungry gourmets page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="gourmets-icon"><h1>🤤</h1></div>
    <section className="grad-2">
      <p className="gourmets-intro">
        We know that in this sad period many chefs are also at home and their restaurants are closed. 
        If you are the owner of a facility that has all the credentials to be able to cook meals in compliance with current hygiene regulations 
        and you want to offer home cooked meals, this is the right place!
      </p>
      <p></p>
    </section>
    <Footer />
  </div>
)

export default HungryGourmets
