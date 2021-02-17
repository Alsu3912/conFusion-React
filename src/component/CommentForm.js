/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { useDispatch } from 'react-redux';
import { postComment } from '../redux/ActionCreators';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

const CommentForm = ({ dishId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleSubmit = (values) => {
    toggleModal();
    dispatch(postComment(dishId, values.rating, values.name, values.message));
  }

  return (
    <>
      <Button outline onClick={toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Col md={12}>
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Label htmlFor="name">Your Name</Label>
                <Control.text model=".name" id="name" name="name" className="form-control"
                  validators={{ minLength: minLength(3), maxLength: maxLength(15) }} />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Label htmlFor="message">Rating</Label>
                <Control.textarea model=".message" id="message" name="message" rows="6" placeholder="Message" className="form-control" />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={12}>
                <Button type="submit" color="primary">Submit</Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  )
}

export default CommentForm;