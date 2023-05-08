import React from 'react';
import {useState} from 'react';
import './Footer.css';
import Modal from 'react-bootstrap/Modal';
// import SubscriptionForm from './SubscriptionForm';


function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <section className='Footer' aria-label="footer">
      <button onClick={handleClick}>Subscribe to our Newsletter!</button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ModalTitle">Subscribe to our Newsletter!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <SubscriptionForm closeModal={handleClose} /> */}
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Footer;