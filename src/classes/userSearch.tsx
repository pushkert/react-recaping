import { Component } from 'react'


interface User {
    name: string;
    age: string;
}

interface UserSearhProps {
    users: User[]
}

interface UserSearchState { 
    name: string;
    user: User | undefined
}
class UserSearch extends Component<UserSearhProps,UserSearchState> {
    constructor(props: UserSearhProps) {
        super(props);
        this.state = {
            name: '',
            user: undefined
        };
      }

      onClick = () => {
        console.log('clicked')
      }

    render() {
        return (
            <div>
                <input type="text" name="addUser" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
            <button onClick={this.onClick}>Add Guest</button>
            </div>
        )
    }
}

export default UserSearch;