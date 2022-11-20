import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Content from './components/Content';
import Home from './screens/Home';
import Items from './screens/Items';
import EntryForm from './screens/items/EntryForm';
import EgressForm from './screens/items/EgressForm';
import Show from './screens/items/Show';

import './styles/App.css';

function NotFound() {
  return(
    <Content>
      <h1>
        NotFound
      </h1>
    </Content>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="articulos" element={<Items />} />
          <Route path="articulos/ingreso" element={<EntryForm />} />
          <Route path="articulos/salida" element={<EgressForm />} />
          <Route path="articulos/:id" element={<Show />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
