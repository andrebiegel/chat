import PropTypes from "prop-types";
import React from "react";
import { Container, Form, Button, Card, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useAlerts } from "../contexts/AlertsProvider";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import RemoteChat from "CHAT/App";
function AlertDetail({ user }) {
  const { id } = useParams();
  const { retrieveAlert, addAttendeeToAlert, pushNewAttendee } = useAlerts();
  const alert = retrieveAlert(id);
  dayjs.extend(localizedFormat);
  function handleSubmit(e) {
    e.preventDefault();
    // add to
    addAttendeeToAlert(id, user.id, user.name);
    pushNewAttendee(id, user);
  }

  return (
    <Container>
      <Card
        className="mt-2"
        style={{ border: "1px dashed grey", background: "Lavender" }}
      >
        <Card.Header>
          {alert.keyword} {dayjs(alert.date).format("LLL")}
        </Card.Header>
        <Card.Body>
          <Card.Title>{alert.address}</Card.Title>
          <Card.Text>{alert.message}</Card.Text>
          <Card.Text>
            Attendees:
            <ListGroup>
              {alert.attendees.map((attendee) => (
                <ListGroup.Item key={attendee.id}>
                  {attendee.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <Form onSubmit={handleSubmit} className="w-100">
        <Button type="submit" className="mr-2">
          Attend
        </Button>
        <Button to="/" as={Link}>
          Back
        </Button>
      </Form>
      <React.Suspense fallback="Loading Chat">
        <RemoteChat />
      </React.Suspense>
    </Container>
  );
}

AlertDetail.propTypes = {};

export default AlertDetail;
