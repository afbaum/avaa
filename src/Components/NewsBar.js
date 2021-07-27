import React from 'react';
import { Card, Button } from 'react-bootstrap'

const NewsBar = () => {
  return (
    <div>
      <Card>
        <Card.Header>The AVAA Amplifier</Card.Header>
        <Card.Body>
          <Card.Title>Find recent and past AVAA newsletters</Card.Title>
          <Card.Text>
            Stay up to date on all AVAA new through the AVAA newsleter.
          </Card.Text>
          <Button variant="primary">Click Here</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsBar;
