import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      firstColor: '#E06869',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onCollaboratorCreated={collaborator => onNewCollaboratorAdded(collaborator)} />
      
      {teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          firstColor={team.firstColor} 
          secondColor={team.secondColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />
        )}
      
    </div>
  );
}

export default App;
