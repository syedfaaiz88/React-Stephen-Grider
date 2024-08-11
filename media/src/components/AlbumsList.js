import React from 'react'
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store'
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';


function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className='h-10 w-full' />
    } else if (error) {
        content = <div>Error Fetching Albums...</div>
    } else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album} />;
        })
    }

    return (
        <>
            <div className='m-3 flex justify-between items-center'>
                <h3 className='text-lg font-bold'>Albums By {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>Add Album</Button>
            </div>
            <div>
                {content}
            </div>
        </>
    )
}

export default AlbumsList