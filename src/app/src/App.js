import logo from './logo.svg';
import './App.css';
import { login } from './reducers/users-slice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const username = useSelector(state => state.user.username)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch(login())}>Login</button>
      {username}
    </div>
  );
}

export default App;
