import './Styles/App.css'
import ItemListContainer from './NavBar/ItemListContrainer'
import NavBar from './NavBar/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting='Bienvenidos a Mi Tienda!'/>
    </>
  )
}

export default App
