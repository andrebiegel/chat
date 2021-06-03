import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
function Alert({ item }) {
  dayjs.extend(localizedFormat);
  return (
    <>
      <Link
        to={`/detail/${item.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card
          className="mt-2"
          style={{ border: "1px dashed grey", background: "Lavender" }}
        >
          <Card.Header>
            {item.keyword} {dayjs(item.date).format("LLL")}
          </Card.Header>
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
