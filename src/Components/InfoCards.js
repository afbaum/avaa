import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

import news from "../img/news.jpg";
import events from "../img/events.jpg";
import trophy from "../img/trophy.jpg";

const InfoCard = () => {
  return (
    <div>
      <CardGroup>
        <Card boarder="dark" className="mx-4 my-4">
          <Card.Img variant="top" src={news} />
          <Card.Body>
            <Card.Title>Announcements</Card.Title>
            <Card.Text>
              See what is new with AVAA
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">More Info</small>
          </Card.Footer>
        </Card>
        <Card boarder="dark" className="mx-4 my-4">
          <Card.Img variant="top" src={trophy} />
          <Card.Body>
            <Card.Title>Awards</Card.Title>
            <Card.Text>
              See outstanding VA Audiologists and their accomplishments
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">More Info</small>
          </Card.Footer>
        </Card>
        <Card boarder="dark" className="mx-4 my-4">
          <Card.Img variant="top" src={events} />
          <Card.Body>
            <Card.Title>Conference</Card.Title>
            <Card.Text>
              Get the latest information on past and future JDVAC confrences
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">More Info</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default InfoCard;
