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
          <section className="newsletterText">
            <p>Get the latest news each month!</p>
            <ul>
              <li>New space listings</li>
              <li>Up-to-date hours and amenities</li>
              <li>Event listings</li>
            </ul>
          </section>
          <form className="newsletterForm">
            <section className="formField">
              <label htmlFor="name">Enter your name: </label>
              <input type="text" name="name" id="name" placeholder="Your Name Here"/>
            </section>
            <section className="formField">
              <label htmlFor="email">Enter your email: </label>
              <input type="email" name="email" id="email" placeholder="Your Email Here"/>
            </section>
            <button onClick={handleClose}>Subscribe!</button>
          </form>
          {/* <SubscriptionForm closeModal={handleClose} /> */}
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default Footer;