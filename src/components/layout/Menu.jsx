import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Início</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/paran/123'>Paran #01</Link>
                </li>
                <li>
                    <Link to='/paran/Legal ser gay'>Paran #02</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu