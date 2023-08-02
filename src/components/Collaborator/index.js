import './Collaborator.css'

const Collaborator = ({name, imagem, cargo, backColor}) => {
    return(
        <div className='collaborator'>
            <div className='cabecalho' style={{backgroundColor: backColor}}>
                <img src={imagem} alt={name} />
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Collaborator