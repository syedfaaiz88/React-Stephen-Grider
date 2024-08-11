import { useAddPhotoMutation, useFetchPhotosQuery } from "../store"
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {

    const {data, error, isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();
    const handleAddPhoto = () => {
        addPhoto(album);
    }
    let content;
    if (isFetching) {
        content = <Skeleton className='h-8 w-8' times={3}/>
    } else if (error) {
        content = <div>Error Fetching Photos...</div>
    } else {
        content = data.map( (photo)=>{
            return <PhotosListItem key={photo.id} photo={photo}/>
        }
        );
    }
    return (
        <>
            <div className='m-3 flex justify-between items-center'>
                <h3 className='text-lg font-bold'>Photos In {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>Add Photo</Button>
            </div>
            <div className="mx-8 flex flex-wrap justify-center">
                {content}
            </div>
        </>
    )
}

export default PhotosList