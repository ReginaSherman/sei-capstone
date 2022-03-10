import React from 'react'
import { Box, Badge, StarIcon, Image } from '@chakra-ui/react'


const ItemDetail = ({ item }) => {
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={item.image} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
            >
            {item.title}
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {item.size}
          </Box>
          <Box>
            {item.description}
          </Box>
          <Box>
            {item.owner}
          </Box>
        </Box>
      </Box>
    )
  }
  

export default ItemDetail