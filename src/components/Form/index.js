import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')


    const onSave = (event) => {
        event.preventDefault()
        props.onCollaboratorCreated({
            name,
            cargo,
            imagem,
            team
        })
        setName('')
        setCargo('')
        setImagem('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={name} 
                    onchange={valor => setName(valor)} 
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo} 
                    onchange={valor => setCargo(valor)} 
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem} 
                    onchange={valor => setImagem(valor)} 
                />
                <DropdownList 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.teams}
                    valor={team} 
                    onchange={valor => setTeam(valor)} 
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form