package de.abiegel.fops.chat.boundary;

import java.util.Objects;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

import javax.websocket.Session;

public class SessionManagement {

    public static Queue<Session> addUserToChat(Queue<Session> chatroom, Session userSession) {
        if (Objects.nonNull(chatroom)) {
            chatroom.add(userSession);
        } else {
            chatroom = new ConcurrentLinkedQueue<>();
            chatroom.add(userSession);
        }
        return chatroom;
    }

    public static Queue<Session> removeUser(Queue<Session> chatroom, Session userSession) {
        if (Objects.nonNull(chatroom)) {
            chatroom.remove(userSession);
        }
        return chatroom;
    }
}