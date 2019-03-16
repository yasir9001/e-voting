import React, { Component } from 'react'
import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button,
    Row,
    Col,
    Container 
} from 'reactstrap';
import Navbar from './../../navbar/Navbar'

export class CandidateProfile extends Component {
  render() {
    return (
      <>
        <Navbar
                    link1 = 'Home'
                    link1Target = '/candidate/profile'
                    link2 = 'Update Info'
                    link2Target = '/candidate/updateprofile'
                    logoutText = 'Logout'
                    logout = {()=> alert('User logged Out')}
                />
        <div className='homewrap'>
          <div className='card_wrap'>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Candidate Name</CardTitle>
                    <CardSubtitle>Short Info</CardSubtitle>
                    <CardText>Short description or motive of the Candidate Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
      </div>
      </>
    )
  }
}

export default CandidateProfile
