import React from 'react';
import { Provider} from 'react-redux'
import GuestList from './state/GuestList'
import UserSearch from './classes/userSearch'
import './App.css';
import { store} from './redux'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GuestList />
      <UserSearch users={[]} />
      </Provider>
  );
}

export default App;
