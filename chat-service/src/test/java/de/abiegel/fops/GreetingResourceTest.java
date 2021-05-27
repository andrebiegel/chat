package de.abiegel.fops;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import io.vertx.core.impl.HAManager;

import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

import org.hamcrest.CoreMatchers;

@QuarkusTest
public class GreetingResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/system")
          .then()
             .statusCode(200)
             .contentType(ContentType.JSON)
             .body("version",CoreMatchers.equalTo("1.0.0-SNAPSHOT"))
             .body("appName",CoreMatchers.equalTo("chat"));
    }

}