/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Contact = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [telnum, setTelnum] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [contactType, setContactType] = useState('Tel.');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const feedbackInput = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message
  };

  const handleFirstNameChange = (event) => setFirstname(event.target.value);

  const handleLastNameChange = (event) => setLastname(event.target.value);

  const handleSubmit = (event) => {
    console.log("Current state is: " + JSON.stringify(feedbackInput));
    alert("Current state is: " + JSON.stringify(feedbackInput));
    event.preventDefault();
  }

  const validate = (telnum) => {
    let errorText = '';
    const reg = /^\d+$/;

    if (touched && !reg.test(telnum)) {
      errorText = 'Tel. Number should contain only numbers';
    };

    return errorText;
  }

  let error = validate(telnum);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road<br />
            Clear Water Bay, Kowloon<br />
            HONG KONG<br />
            <i className="fa fa-phone"></i>: +852 1234 5678<br />
            <i className="fa fa-fax"></i>: +852 8765 4321<br />
            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us Your Feedback</h3>
          <div className="col-12 col-md-9">
            <Form onSubmit={handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                  <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                    value={firstname} onChange={handleFirstNameChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                  <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                    value={lastname} onChange={handleLastNameChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                <Col md={10}>
                  <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number"
                    value={telnum} onChange={(event) => setTelnum(event.target.value)} 
                    invalid={error !== ''} onBlur={() => setTouched(true)} />
                    <FormFeedback>{error}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>Email</Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email" placeholder="Email"
                    value={email} onChange={(event) => setEmail(event.target.value)} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="agree" checked={agree}
                        onChange={(event) => setAgree(event.target.checked)} />{' '}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input type="select" name="contactType" value={contactType}
                    onChange={(event) => setContactType(event.target.value)}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Input type="textarea" id="message" name="message" rows="12"
                    value={message} onChange={(event) => setMessage(event.target.value)} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">Send Feedback</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;