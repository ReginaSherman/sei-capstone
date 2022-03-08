import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import ItemList from '../components/ItemList'
import ItemDetail from '../components/ItemDetail'

import MyCloset from './mycloset'

export default function Home({ items }) {
  return (
    <div className='container'>
      <ItemList items={items} />
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/`)
  const items = await res.json()
  console.log(items)

  // Pass data to the page via props
  return { props: { items } }
}