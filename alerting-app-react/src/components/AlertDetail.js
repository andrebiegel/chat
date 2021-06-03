import PropTypes from "prop-types";
import { Container, Form, Button, Card, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useAlerts } from "../contexts/AlertsProvider";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

function AlertDetail() {
  const { id } = useParams();
  const { retrieveAlert } = useAlerts();
  const alert = retrieveAlert(id);
  dayjs.extend(localizedFormat);
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
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
      <Container>Alert Chat here</Container>
    </Container>
  );
}

AlertDetail.propTypes = {};

export default AlertDetail;
