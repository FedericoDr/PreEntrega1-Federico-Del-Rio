import '../Styles/NavBar.css'
import { IoSearch } from "react-icons/io5";

export default function Form() {
    return (
        <>
           <div className="Boxbuscador">
                        <form action="#">
                        <input className="Buscador" type="text" placeholder="Buscar aqui..." />
                        <button type="submit"><IoSearch /></button>
                        </form>
                        </div>
        </>
    );
}