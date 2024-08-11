import { useThunk } from '../hooks/use-thunk';
import { removeUser } from '../store/thunks/removeUser';
import Button from './Button'
import AlbumsList from './AlbumsList'
import { MdDelete } from "react-icons/md";
import ExpandablePanel from './ExpandablePanel';

function UsersListItem({ user }) {
    const [doRemoveUser, isRemovinguser, removingUserError] = useThunk(removeUser)
    const handleClick = () => {
        doRemoveUser(user);
    }
    const header = (
        <>
            <Button className='mr-3' loading={isRemovinguser} danger onClick={handleClick}>
                <MdDelete />
            </Button>
            {removingUserError && 'Error Removing User...'}
            {user.name}
        </>
    )
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    )
}

export default UsersListItem