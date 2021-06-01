package de.abiegel.ffops.alerting.boundary;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import de.abiegel.ffops.alerting.entity.Alert;
import de.abiegel.ffops.alerting.entity.Attendee;

@Path("/alerts")
public class AlertsResource {

    List<Alert> alerts = new ArrayList<>();

    @PostConstruct
    public void init() {
        this.alerts.add(Alert.of(UUID.randomUUID().toString(), "B3", " Street 1 City", "BE aware of special thing",
                ZonedDateTime.now(), Arrays.asList(new Attendee("test@example.com", " Display Name"))));
        this.alerts.add(Alert.of(UUID.randomUUID().toString(), "B2", " Street 1 City", "BE aware of special thing",
                ZonedDateTime.now(), Arrays.asList(new Attendee("test@example.com", " Display Name"))));
        this.alerts.add(Alert.of(UUID.randomUUID().toString(), "TH2", " Street 1 City", "BE aware of special thing",
                ZonedDateTime.now(), Arrays.asList(new Attendee("test@example.com", " Display Name"))));
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Alert> alerts() {
        return this.alerts;
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Alert update(Alert input) {
        return input;
    }

}