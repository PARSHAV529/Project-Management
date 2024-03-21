import { Avatar, AvatarGroup, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

 const ProjectCard = ({title,id,projects,selectedProjectId,onSelectProject}) => {
  let navigate = useNavigate()
  return (
    <Card data-type='Card' className='h-[20rem]  scale-90 !shadow-[0px_20px_20px_10px_#00000024]  hover:scale-95 transform transition duration-y '>
   <CardHeader data-type='CardHeader'>
     <Heading data-type='Heading' size='md' mb='4'> {title}</Heading>
     <AvatarGroup data-type='AvatarGroup'>
       <Avatar data-type='Avatar' name='Ryan Florence' size='sm' src='https://bit.ly/ryan-florence'></Avatar>
       <Avatar data-type='Avatar' name='Segun Adebayo' size='sm' src='https://bit.ly/sage-adebayo'></Avatar>
       <Avatar data-type='Avatar' name='Kent Dodds' size='sm' src='https://bit.ly/kent-c-dodds'></Avatar>
       <Avatar data-type='Avatar' name='Prosper Otemuyiwa' size='sm' src='https://bit.ly/prosper-baba'></Avatar>
       <Avatar data-type='Avatar' name='Christian Nwamba' size='sm' src='https://bit.ly/code-beast'></Avatar>
      </AvatarGroup>
    </CardHeader>
   <CardBody data-type='CardBody'>
     <Text data-type='Text'>View a summary of all your customers over the last month.</Text>
    </CardBody>
   <CardFooter className='' data-type='CardFooter'>
   
     <Button onClick={()=>{
      onSelectProject(id.id)
     navigate(`/selctedprojects`)
     }}  >View project</Button>
    </CardFooter>
  </Card>
  )
}
export default ProjectCard
