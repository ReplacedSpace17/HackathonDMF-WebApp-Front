import './home.css'
import Table from '../../Components/Table/Table.jsx'
import datos from './tabla.json'

function Home() {



    return (
        <body className='bodyHome'>
            <Table data={datos}/>
        </body>
    );
}
export default Home;