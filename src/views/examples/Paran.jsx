import { useParams } from "react-router-dom"

const Paran = props => {
    const { id } = useParams()
    return(
        <div className='Paran'>
            <h1>Paran</h1>
            <h2>Valor: {id}!</h2>
        </div>
    )
    
}

export default Paran