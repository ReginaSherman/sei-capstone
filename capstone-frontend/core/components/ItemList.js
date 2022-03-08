import ItemDetail from './ItemDetail'
import { SimpleGrid } from '@chakra-ui/react'

const ItemList = ({ items }) => {
    return (
        <div>
            <SimpleGrid minChildWidth='120px' spacing='20px'>
                {items.map((item) => (
                    <ItemDetail item={item} />
                ))}
            </SimpleGrid>
        </div>

    )
}

export default ItemList