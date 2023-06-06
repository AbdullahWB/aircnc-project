import React, { useState } from 'react';
import AddRoomForm from '../../Components/Forms/AddRoomForm';

const AddRoom = () => {
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('upload Image')
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const location = event.target.location.value
        const title = event.target.title.value
        const from = event.target.from.value
        const to = event.target.to.value
        const price = event.target.price.value
        const total_guest = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const description = event.target.description.value
        const category = event.target.category.value
        const image = event.target.image.files[0]
    }

    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            />
        </>
    );
};

export default AddRoom;