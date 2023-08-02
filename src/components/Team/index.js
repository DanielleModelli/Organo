import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    return (
        props.collaborators.length > 0 && <section className='team' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{borderColor: props.firstColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator key={collaborator.name} name={collaborator.name} cargo={collaborator.cargo} imagem={collaborator.imagem} backColor={props.firstColor} /> )}
            </div>
        </section>
    )
}

export default Team