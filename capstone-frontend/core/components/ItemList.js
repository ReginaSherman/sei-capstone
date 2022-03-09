import ItemCard from './ItemCard'
import ItemDetail from './ItemDetail'
import { SimpleGrid } from '@chakra-ui/react'

const ItemList = ({ items }) => {
    return (
        <div>
            <SimpleGrid minChildWidth='250px' spacing='20px'>
                {items.map((item) => (
                    <ItemCard item={item} />
                ))}
            </SimpleGrid>
        </div>

    )
}

export default ItemList