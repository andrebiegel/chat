package de.abiegel.ffops.system.boundary;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import de.abiegel.ffops.system.entity.System;

@Path("/system")
public class SystemResource {

    @Inject
    @ConfigProperty(name= "quarkus.application.version", defaultValue = "unknown")
    String version;

    @Inject
    @ConfigProperty(name= "quarkus.application.name", defaultValue = "unknown")
    String appName;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public System info() {
        return System.of(version, appName);
    }

}