import React, { useState } from 'react'


const NewItemForm = () => {
    const [
        title, setTitle,
        image, setImage,
        category, setCategory,
        description, setDescription,
        size, setSize,
        owner, setOwner] = useState('')
    return (
        <div>
            <form action="/action_page.php">
                <input type="file" id="myFile" name="filename" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewItemForm