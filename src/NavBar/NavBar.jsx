import '../Styles/NavBar.css'
import BotonNav from './BotonNav';
import CartWidget from './CartWidget'
import Form from './Form';

export default function NavBar() {
    return (
        <>
            <header>
                <nav className="Boxtitulo">
                    <nav className="Titulo">
                        <h1 className="Logo">SUB | BURGER</h1>
                        <Form />
                        <CartWidget />
                    </nav>

                </nav>

                <nav className="NavBox">
                    <BotonNav nombre='Pedir Aqui' />
                    <BotonNav nombre='Productos' />
                    <BotonNav nombre='Contacto' />
                    <BotonNav nombre='Restaurantes' />
                    <BotonNav nombre='Nosotros' />

                </nav>
                
            </header>
        </>
    );
}