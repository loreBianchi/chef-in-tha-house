import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'

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
      <p className="chefs-intro">First, <Link href="/chefs-registration"><a className="chefs-intro-link">register your business to chef-in-tha-house</a></Link></p>
      <p className="chefs-intro">Second, <Link href="/chefs-list"><a className="chefs-intro-link">check the chefs' list</a></Link></p>
    </section>
    <Footer />
  </div>
)

export default BoredChefs
