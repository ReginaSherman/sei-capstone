import Link from 'next/link'
import { useRouter } from "next/router"
import { Img } from '@chakra-ui/react'

const item = ({ item }) => {
    const router = useRouter()
    // const { id } = router.query
    return (
        <div>
            <Img src={item.image}/>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:8000/api/`)

    const item = await res.json()

    return {
        props: {
            item
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:8000/api/`)

    const items = await res.json()
    const ids = items.map(item => item.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false, //if we go to something that doesn't exist in the data, it will give a 404
    }

}
export default item