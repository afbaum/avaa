import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

const Cardapp = () => {
  return (
    <div>
      <Container>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Welcome to the Association of VA Audiologists (AVAA)</Card.Title>
            <Card.Text>
              <p>The Association of VA Audiologists (AVAA) is an employee organization that
                was established in 2001 to address the professional needs and concerns of
                audiologists within the Veterans Health Administration of the U.S. Department
                of Veterans Affairs (VA).</p>
              <p>The goal is to achieve and maintain the highest quality of patient care,
                training, and research by individual audiologists and the programs in which
                they are housed. It is also the purpose of the AVAA to promote Audiology
                within the VA and outside the VA at regional, state and national levels and
                to establish professional and working ties with other related governmental
                and/or professional groups.</p>
            </Card.Text>
            <Card.Text>
              <Button variant="secondary">Join Our Mailing List</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Cardapp;
