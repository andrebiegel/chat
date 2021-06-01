package de.abiegel.ffops.system.boundary;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import de.abiegel.ffops.system.entity.SystemInfo;

@Path("/system")
public class SystemInfoResource {

    @Inject
    @ConfigProperty(name= "quarkus.application.version", defaultValue = "unknown")
    String version;

    @Inject
    @ConfigProperty(name= "quarkus.application.name", defaultValue = "unknown")
    String appName;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public SystemInfo info() {
        return SystemInfo.of(version, appName);
    }
}