import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
    const [details,setDetails]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        address:"",
        City:"",
        state:"",
        Zipcode:"",
    });
  return (
    <div id="form-container">
        <Form>
            <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter full name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" pattern="[6-9]{1}[0-9]{9}" required placeholder="+91" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control required placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select required defaultValue="Choose...">
            <option>Choose State</option>
            <option value="Andhra Pradesh">AP</option>
            <option value="Karnataka">KA</option>
            <option value="Uthar Pradesh">UP</option>
            <option value="Madhya Pradesh">MP</option>
            <option value="Tamil Nadu">TN</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control required />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
       <span>If You already Have Register Click here to{""}
        <a href="/login">Login</a>
       </span>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default Register;