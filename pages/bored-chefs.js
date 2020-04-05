import Head from 'next/head'

import Footer from '../components/Footer'
import ChefsRegistrationForm from '../components/ChefsRegistrationForm'

const BoredChefs = () => (
  <div className="page-container chefs">
    <Head>
      <title>Chef in tha house - bored chefs page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="chefs-icon"><h1>👩‍🍳</h1></div>
    <section className="grad">
      <p className="chefs-intro">
        We know that in this sad period many chefs are also at home and their restaurants are closed. 
        If you are the owner of a facility that has all the credentials to be able to cook meals in compliance with current hygiene regulations 
        and you want to offer home cooked meals, this is the right place!
      </p>
      <p></p>
      <ChefsRegistrationForm />
    </section>
    <Footer />
  </div>
)

export default BoredChefs
