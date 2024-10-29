import { useLocation } from "react-router-dom"
import Message from "../layouts/Message"

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div>
            <h1>Meu Projetos</h1>
            <Message type="success" msg={message} />
        </div>
    )
}

export default Projects