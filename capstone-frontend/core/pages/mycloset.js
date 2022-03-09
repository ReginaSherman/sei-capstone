import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, Button } from '@chakra-ui/react'
import NewItemForm from '../components/NewItemForm'

export default function MyCloset() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button onClick={onOpen}>Add an Item</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <NewItemForm />
            </Modal>
        </>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:8000/api/`)
//     const items = await res.json()

//     // Pass data to the page via props
//     return { props: { items } }
// }