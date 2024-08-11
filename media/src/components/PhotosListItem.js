import { useRemovePhotoMutation } from "../store"
import { MdDelete } from 'react-icons/md'

function PhotosListItem({ photo }) {
    const [removePhoto] =  useRemovePhotoMutation();
    const handleDeletePhoto = () => {
        removePhoto(photo);
    }

    return (
        <div onClick={handleDeletePhoto} className="relative m-2 cursor-pointer">
            <img className="h-28 w-28" src={photo.url} alt={photo.id}></img>
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <MdDelete className='text-3xl'/>
            </div>
        </div>

    )
}

export default PhotosListItem