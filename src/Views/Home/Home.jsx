import './home.css'
import Table from '../../Components/Table/Table.jsx'
import datos from './tabla.json'
import Menu from '../../Components/Menu/Menu.jsx'

function Home() {



    return (
        <body className='bodyHome'>
            <nav className='navHome'>
                <Menu/>
            </nav>
            <main className='mainHome'>
                <header className='headerHome'>
                    <h1>header</h1>
                </header>
                <article className='ContentHome'>
                    <article className='section1'>
                        <article className='sectionsCards'>
                            <article className='Card1'>
                            </article>
                            <article className='Card1'>
                            </article>
                            <article className='Card1'>
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