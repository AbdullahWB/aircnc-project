import React, { useContext, useState } from 'react';
import AddRoomForm from '../../Components/Forms/AddRoomForm';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../providers/AuthProvider';

const AddRoom = () => {
    const { user } = useContext(AuthContext)
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('upload Image')
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        const location = event.target.location.value
        const title = event.target.title.value
        const from = dates.startDate
        const to = dates.endDate
        const price = event.target.price.value
        const total_guest = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const description = event.target.description.value
        const category = event.target.category.value
        const image = event.target.image.files[0]

        // upload the image
        imageUpload(image)
            .then(data => {
                const roomData = {
                    location,
                    title,
                    from,
                    to,
                    price: parseFloat(price),
                    total_guest,
                    bedrooms,
                    bathrooms,
                    description,
                    image: data.data.display_url,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                    category,
                }
                console.log(data.data.display_url);
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false)
            })

    }

    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    const handleDates = ranges => {
        setDates(ranges.selection)
    }

    return (
        <>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
                dates={dates}
                handleDates={handleDates}
            />
        </>
    );
};

export default AddRoom;