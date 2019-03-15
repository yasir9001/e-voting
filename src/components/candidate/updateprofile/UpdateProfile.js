import React, { Component } from 'react'
import { 
    CustomInput,
    Col,
    Row, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText, 
    Container 
} from 'reactstrap';
export class UpdateProfile extends Component {
  render() {
    return (
      <Container style={{margin:'50px  auto 0 auto'}}>
        <Form>
        <Row form>
          <Col md={5}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number" name="age" id="age" placeholder="Enter your age in years" />
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
                <Label for="gender">Gender</Label>
                <div style={{border:'1px solid #ccc', borderRadius:'5px', padding: '6px 0px 6px 8px'}}>
                    <CustomInput inline type="radio" id="gender"  name="gender" label="Male" />
                    <CustomInput inline type="radio" id="gender2" name="gender" label="Female" />
                </div>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
        </FormGroup>
        
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input type="text" name="status" id="status"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="party">Party</Label>
              <Input type="text" name="party" id="party"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="area">Area</Label>
              <Input type="text" name="area" id="area"/>
            </FormGroup>  
          </Col>
        </Row>
        
        <div style={{textAlign:'right'}}>
            <Button>Update</Button>
        </div>        
      </Form>

      </Container>
    )
  }
}

export default UpdateProfile
