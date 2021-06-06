import React, { useContext, useCallback } from "react";
import { useLocalStorage, useSessionStorage } from "../hooks/storage";

const AlertsContext = React.createContext();

export function useAlerts() {
  return useContext(AlertsContext);
}

function AlertsProvider({ url, children }) {
  const [alerts, setAlerts] = useSessionStorage("alerts", []);

  function createAlert({ id, keyword, message, address, date }) {
    if (typeof alerts !== "undefined") {
      var check = alerts.find((alert) => {
        return id === alert.id;
      });
      if (check) return;
    }
    setAlerts((prevAlerts) => {
      return [
        ...prevAlerts,
        { id, keyword, message, address, date, attendees: [] },
      ];
    });
  }

  const retrieveAlert = (id) => alerts.find((alert) => alert.id === id);

  const addAttendeeToAlert = useCallback(
    (alertId, id, name) => {
      setAlerts((prevAlerts) => {
        let madeChange = false;
        const newAttendee = { id, name };
        const newAlerts = prevAlerts.map((alert) => {
          if (alert.id === alertId) {
            madeChange = true;
            return {
              ...alert,
              attendees: [...alert.attendees, newAttendee],
            };
          }

          return alert;
        });

        if (madeChange) {
          return newAlerts;
        } else {
          console.log("tried to attend a unexistent alert");
          return [...prevAlerts];
        }
      });
    },
    [setAlerts]
  );
  const pushNewAttendee = (alertId, attendee) => {
    const pushNewAttendeeUrl = url + `/${alertId}/attendee `;
    fetch(pushNewAttendeeUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendee),
    });
  };
  const value = {
    alerts,
    createAlert,
    addAttendeeToAlert,
    retrieveAlert,
    provideAlerts: setAlerts,
    pushNewAttendee,
  };

  return (
    <AlertsContext.Provider value={value}>{children}</AlertsContext.Provider>
  );
}

export default AlertsProvider;
