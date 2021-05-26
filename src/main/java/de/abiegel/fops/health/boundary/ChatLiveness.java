package de.abiegel.fops.health.boundary;

import javax.enterprise.context.ApplicationScoped;

import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Liveness;
@Liveness
@ApplicationScoped
public class ChatLiveness implements HealthCheck{

    @Override
    public HealthCheckResponse call() {
        return  HealthCheckResponse.up("all is up");
    }
    
}
