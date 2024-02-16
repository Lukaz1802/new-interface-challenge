import React from 'react';
import { Container } from 'react-bootstrap';
import FormFooter from './FormFooter';
import FormHeader from './FormHeader';

const MainLayout = () => {
  return (
    <Container>
      <FormHeader />
      <FormFooter />
    </Container>
    );
};

export default MainLayout;