import './Content.css'
import { Routes, Route} from 'react-router-dom'

import Paran from '../../views/examples/Paran'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound'

/* /:id = não é um valor literal, 
é uma variavel, que sera passado atravez de uma URL*/
const Content = props => (
    <main className="Content">
        
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/paran/:id' element={<Paran/>} />
            <Route path='*' element={<NotFound />}   />     
        </Routes>
    </main>
)

export default Content
