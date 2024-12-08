import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Layout>
  );
}

export default App;
