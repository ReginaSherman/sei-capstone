import '../styles/Home.module.css'
import Link from 'next/link'
import { Img } from '@chakra-ui/react'

const ItemCard = ({ item }) => {
  return (
    <Link href='/item/[id]' as={`/item/${item.id}`}>
        <a>
            <Img className='Img' boxSize='250px' objectFit='cover' src={item.image}/>
        </a>
    </Link>
  )
}

export default ItemCard