import React, { useState, useRef, useEffect } from 'react';
import { useActions} from '../hooks/userActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
interface ChildProps {
    // onClick?: () => void 
    children?: React.ReactNode // for rendering child components
}

const GuestList: React.FC = ({  }) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [addUser, setAddUser] = useState<string>("");
    const [guests, setGuests] = useState<string[]>([])
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();
    const { searchrespos} = useActions();
    const { data, error, loading} =  useTypedSelector((state) =>  state.repos);

    const onClick = () => {
        // setAddUser('');
        // setGuests([...guests, addUser])
        searchrespos(addUser)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddUser(e.target.value)
    }
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }
    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    },[]);
    return (
        <div>
            <h2>List of guest</h2>
            {/* {children} */}
            <input ref={inputRef} type="text" name="addUser" value={addUser} onChange={onChange} />
            <button onClick={onClick}>Add Guest</button>
            <div draggable onDragStart={onDragStart}>
                drag me
            </div>
            {guests.map(guest => {
                return <div key={guest}>{guest}</div>
            })}
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading ...</h3>}
            {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
        </div>
    )
}

export default GuestList;