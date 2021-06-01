package de.abiegel.ffops.alerting.entity;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

public class Alert {
    String address;
    String keyword;
    ZonedDateTime date;
    String message;
    String id;
    List<Attendee> attendees;

    public static Alert of(String uuid, String keyword, String address, String message, ZonedDateTime date,
            List<Attendee> list) {
        Alert tmp = new Alert();
        tmp.date = date;
        tmp.address = address;
        tmp.keyword = keyword;
        tmp.message = message;
        tmp.attendees = list;
        tmp.id = uuid;
        return tmp;
    }

    public Alert() {

    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getKeyword() {
        return this.keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public ZonedDateTime getDate() {
        return this.date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Attendee> getAttendees() {
        return this.attendees;
    }

    public void setAttendees(List<Attendee> attendees) {
        this.attendees = attendees;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Alert)) {
            return false;
        }
        Alert alert = (Alert) o;
        return Objects.equals(id, alert.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash( id);
    }

}
