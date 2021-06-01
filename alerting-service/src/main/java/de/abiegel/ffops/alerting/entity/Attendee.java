package de.abiegel.ffops.alerting.entity;

import java.util.Objects;

public class Attendee {
    String id;
    String name;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Attendee() {
    }

    public Attendee(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public Attendee id(String id) {
        setId(id);
        return this;
    }

    public Attendee name(String name) {
        setName(name);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Attendee)) {
            return false;
        }
        Attendee attendee = (Attendee) o;
        return Objects.equals(id, attendee.id) && Objects.equals(name, attendee.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", name='" + getName() + "'" + "}";
    }

}
