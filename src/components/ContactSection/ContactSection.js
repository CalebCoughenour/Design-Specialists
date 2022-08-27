import React from 'react';
import { Container } from 'react-bootstrap';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { ContactSec, FormTitle, FormButton } from './ContactSection.elements';
import './ContactSectionStyles.css';


const ContactSection = () => {
  return (
    <>
      <ContactSec>
        <Container className='w-50'>
          <FormTitle>Speak Directly With A Design Specialist</FormTitle>
          <form>
            <MDBInput className='mb-4' type='text' placeholder='Name' style={{ width: '40%', float: 'left' }} />
            <MDBInput className='mb-4' type='email' placeholder='Email Address' style={{ width: '40%', float: 'right' }} />
            <MDBTextArea placeholder='Enter your message...' rows={4} />
            <FormButton className='form-button'>
              Send
            </FormButton>
          </form>
        </Container>
      </ContactSec>
    </>
  )
}

export default ContactSection;