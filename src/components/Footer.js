import React from 'react';
import {useState} from 'react';
import './Footer.css';
import Modal from 'react-bootstrap/Modal';
// import SubscriptionForm from './SubscriptionForm';


function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <section className='Footer' aria-label="footer">
      <a href="#" onClick={handleClick}>Subscribe to our Newsletter!</a>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <SubscriptionForm closeModal={handleClose} /> */}
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Footer;