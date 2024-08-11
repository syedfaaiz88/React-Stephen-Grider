import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import { MdDelete } from 'react-icons/md'
import { useRemoveAlbumMutation } from '../store/apis/albumsApi'
import PhotosList from './PhotosList'

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation(album);

    const handleDeleteAlbum = () => {
        removeAlbum(album);
    }

    const header = (
        <>
            <Button danger className='mr-3' onClick={handleDeleteAlbum} loading={results.isLoading}>
                <MdDelete />
            </Button>
            {album.title}
        </>
    )
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album}/>
        </ExpandablePanel>
    )
}

export default AlbumsListItem