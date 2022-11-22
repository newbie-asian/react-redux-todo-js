import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard/Dashboard';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
