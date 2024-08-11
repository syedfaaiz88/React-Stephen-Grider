import { useEffect } from "react"
import { useSelector } from "react-redux"
import { addUser, fetchUsers } from "../store"
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";


function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUsersError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  })

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers])

  const handleUserAdd = () => {
    doCreateUser();
  }

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />
  } else if (loadingUsersError) {
    content = <div>Error Fetching data...</div>
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user}/>
    })
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center m-3">
          <h1 className="m-2 text-xl">Users List</h1>
          <Button loading={isCreatingUser} onClick={handleUserAdd}>
            Add User
          </Button>
          {creatingUsersError && 'Error Creating User...'}
        </div>
        <div>{content}</div>
      </div>
    </>
  )
}

export default UsersList