import PropTypes from "prop-types";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useAlerts } from "../contexts/AlertsProvider";
function AlertDetail() {
  const { id } = useParams();
  const { retrieveAlert } = useAlerts();
  const alert = retrieveAlert(id);
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Attending ops");
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <h1>Detail</h1>
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
