package de.abiegel.ffops.alerting.boundary;

import java.time.Instant;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import de.abiegel.ffops.alerting.entity.Alert;
import de.abiegel.ffops.alerting.entity.Attendee;

@Path("/alerts")
public class AlertsResource {

    HashMap<String, Alert> alerts = new HashMap<>();

    @PostConstruct
    public void init() {

        Alert tmp = Alert.of(UUID.randomUUID().toString(), "B3", " Street 1 City", "BE aware of special thing",
                Instant.now(),
                new ArrayList<Attendee>(Arrays.asList(new Attendee("test@example.com", " Display Name"))));
        this.alerts.put(tmp.getId(), tmp);
        Alert tmp2 = Alert.of(UUID.randomUUID().toString(), "B2", " Street 1 City", "BE aware of special thing",
                Instant.now(),
                new ArrayList<Attendee>(Arrays.asList(new Attendee("test@example.com", " Display Name"))));
        this.alerts.put(tmp2.getId(), tmp2);
        Alert tmp3 = Alert.of(UUID.randomUUID().toString(), "TH2", " Street 1 City", "BE aware of special thing",
                Instant.now(),
                new ArrayList<Attendee>(Arrays.asList(new Attendee("test@example.com", " Display Name"))));
        this.alerts.put(tmp3.getId(), tmp3);

    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Alert> alerts() {
        return this.alerts.values();
    }

    @PUT
    @Path("/{id}/attendee")
    @Consumes(MediaType.APPLICATION_JSON)
    public void addAttendee(@PathParam("id") String alertId, Attendee input) {
        this.alerts.get(alertId).getAttendees().add(input);
    }

}