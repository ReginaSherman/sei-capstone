import React from 'react'
import ItemList from '../components/ItemList'

const home = ({items}) => {
  return (
    <div> 
        <ItemList items={items} />
    </div>
  )
}

export default home

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8000/api/items`)
    const items = await res.json()
  
    // Pass data to the page via props
    return { props: { items } }
  }