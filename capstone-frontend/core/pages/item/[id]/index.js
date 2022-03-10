import Link from 'next/link'
import { useRouter } from "next/router"
import { Img } from '@chakra-ui/react'
import ItemDetail from '../../../components/ItemDetail'

const item = ({ item }) => {
    // const router = useRouter() 
    // const { id } = router.query
    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:8000/api/items/${context.params.id}`)
    console.log(res)
    const item = await res.json()

    return {
        props: {
            item,
        }
    }
}

// export const getStaticPaths = async () => {
//     const res = await fetch(`http://localhost:8000/api/`)

//     const items = await res.json()
//     const ids = items.map(item => item.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false, //if we go to something that doesn't exist in the data, it will give a 404
//     }

// }
export default item