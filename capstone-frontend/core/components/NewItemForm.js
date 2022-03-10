import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import {
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'

const NewItemForm = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [size, setSize] = useState('')
    const [owner, setOwner] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submitted!')
        console.log(e.target)
        try {
            const res = await fetch('http://localhost:8000/api/items', {
                method: 'POST',
                body: JSON.stringify({ title, image, category, description, size, owner }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log(image)
        console.log(res)
        const data = await res.json()
        console.log(data)
    } catch (err){
        console.error(err);
    }
    }

    return (
        <div>
            <ModalContent>
                <ModalHeader>Add an Item</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input
                            id='title'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        </FormControl>
                        <FormLabel htmlFor='image'>Image</FormLabel>
                        <Input
                            id='image'
                            variant='unstyled'
                            type='file'
                            onChange={(e) => setImage(e.target.files[0])} />
                        <FormControl isRequired>
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <Input
                            id='description'
                            type='text'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select
                            id='category'
                            placeholder='Category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
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
                            onChange={(e) => setSize(e.target.value)}>
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
                            onChange={(e) => setOwner(e.target.value)}>
                            <option>2</option>
                        </Select>
                    </FormControl>
                <ModalFooter>
                    {/* <Button colorScheme='blue' mr={3} onClick='submit'>
                        Submit
                    </Button> */}
                    <input type='submit'/>
                </ModalFooter>
                </form>
            </ModalContent>
        </div>
    )
}

export default NewItemForm