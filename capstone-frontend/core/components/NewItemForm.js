import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import {
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

const NewItemForm = () => {
    const { onClose } = useDisclosure()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [size, setSize] = useState('')
    const [owner, setOwner] = useState('')

    const submitItem = async () => {
        try{
        const res = await fetch('http://localhost:8000/api/items', {
            method: 'POST',
            body: JSON.stringify({ title, image, category, description, size, owner }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
        const data = await res.json()
        console.log(data )
    } catch (err){
        console.error(err);
    }
    }

    return (
        <div>
            <ModalContent>
                <ModalHeader>Add an Item</ModalHeader>
                <ModalCloseButton />
                <form action="/action_page.php">
                    <FormControl isRequired>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input
                            id='title'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                        <FormLabel htmlFor='image'>Image</FormLabel>
                        <Input
                            id='image'
                            variant='unstyled'
                            type='file'
                            value={image}
                            onChange={e => setImage(e.target.value)} />
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <Input
                            id='description'
                            type='text'
                            placeholder='Description'
                            value={description}
                            onChange={e => setDescription(e.target.value)} />
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select
                            id='category'
                            placeholder='Category'
                            value={category}
                            onChange={e => setCategory(e.target.value)}>
                            <option>Top</option>
                            <option>Bottom</option>
                            <option>Dress</option>
                            <option>Shoes</option>
                            <option>Sweater</option>
                            <option>Jacket</option>
                            <option>Misc</option>
                        </Select>
                        <FormLabel htmlFor='size'>Size</FormLabel>
                        <Select
                            id='size'
                            placeholder='Size'
                            value={size}
                            onChange={e => setSize(e.target.value)}>
                            <option>XXS</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </Select>
                        <FormLabel htmlFor='owner'>Owner</FormLabel>
                        <Select
                            id='owner'
                            placeholder='Owner'
                            value={owner}
                            onChange={e => setOwner(e.target.value)}>
                            <option>2</option>
                        </Select>
                    </FormControl>
                </form>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={submitItem}>
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </div>
    )
}

export default NewItemForm