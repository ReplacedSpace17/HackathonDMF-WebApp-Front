import './home.css'
import Table from '../../Components/Table/Table.jsx'
import datos from './tabla.json'
import Menu from '../../Components/Menu/Menu.jsx'
import Header from '../../Components/Header/Header.jsx'
import foto from '../../assets/img.png'
import CardEspecie from '../../Components/CardsInfo/cardEspecie'

function Home() {



    return (
        <body className='bodyHome'>
            <nav className='navHome'>
                <Menu/>
            </nav>
            <main className='mainHome'>
                <header className='headerHome'>
                    <Header 
                    titulo="Mis cultivos"
                    foto={foto}
                    nombre="Javier Gutierrez"/>
                </header>
                <article className='ContentHome'>
                    <article className='section1'>
                        <article className='sectionsCards'>
                            <article className='Card1'>
                            <CardEspecie
                            value="23"/>
                            </article>
                            <article className='Card1'>
                            <CardEspecie
                            value="23"/>
                            </article>
                            <article className='Card1'>
                            <CardEspecie
                            value="23"/>
                            </article>
                        </article>
                        <article className='sectionsTable'>
                            <article className='contentTable1'>
                            <Table data={datos}/>
                            </article>
                            <article className='contentTable2'>
                            <Table data={datos}/>
                            </article>
                        </article>
                    </article>
                    <article className='section2'>
                        <h1>dfsf</h1>
                    </article>
                </article>
            </main>
        </body>
    );
}
export default Home;