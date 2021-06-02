import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
function Alert({ item }) {
  console.log(Date.parse(item.date).toLocaleString());
  console.log(item.date);
  return (
    <>
      <Link
        to={`/detail/${item.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card className="mt-2" style={{ border: "3px dashed black" }}>
          <Card.Header>{item.keyword}</Card.Header>
          <Card.Body>
            <Card.Title>{item.address}</Card.Title>
            <Card.Text>{item.message}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

Alert.propTypes = {};

export default Alert;
