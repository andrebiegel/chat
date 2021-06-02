import { useEffect, useState } from "react";
import Alert from "./Alert";
import { Spinner } from "react-bootstrap";
import { useAlerts } from "../contexts/AlertsProvider";
function Alerts({ url }) {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { provideAlerts } = useAlerts();
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setisLoading(false);
        setAlerts(data);
        provideAlerts(data);
      });
    return () => {};
  }, [url]);
  return (
    <div>
      {!isLoading ? (
        alerts.map((alert) => <Alert key={alert.id} item={alert} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
}

export default Alerts;
