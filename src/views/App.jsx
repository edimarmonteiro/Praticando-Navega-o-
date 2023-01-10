
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import './App.css'
import { BrowserRouter as Rauter } from 'react-router-dom';


const App = props => (
    <div className="App">
        <Rauter>
            <Menu />
            <Content />
        </Rauter>
    </div>

)

export default App