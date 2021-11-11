// import logo from './logo.svg';
import { AppProvider } from './context/AppContext'
import AppRoute from './routes/AppRoute'
import './css/Bootstrap.css'
import './css/App.css'

function App() {
  return (
    <AppProvider>
      <AppRoute />
    </AppProvider>
  );
}

export default App;
