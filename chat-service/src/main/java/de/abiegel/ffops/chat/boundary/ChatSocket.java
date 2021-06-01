package de.abiegel.ffops.chat.boundary;

import java.util.Map;
import java.util.Objects;
import java.util.Queue;
import java.util.concurrent.ConcurrentHashMap;

import javax.enterprise.context.ApplicationScoped;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import org.jboss.logging.Logger;

@ServerEndpoint("/chat/{chatroom}")
@ApplicationScoped
public class ChatSocket {

    private static final Logger LOG = Logger.getLogger(ChatSocket.class);

    Map<String, Queue<Session>> sessions = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam("chatroom") String chatroom ) {
        System.out.println("user added " + session.getRequestURI() + " to room "  +chatroom);
        sessions.put(chatroom, SessionManagement.addUserToChat(sessions.get(chatroom), session));
    }

    @OnClose
    public void onClose(Session session, @PathParam("chatroom") String chatroom) {
        System.out.println("user closed" + session.getRequestURI() + " from room"  +chatroom);
        SessionManagement.removeUser(sessions.get(chatroom), session);
        
    }

    @OnError
    public void onError(Session session, @PathParam("chatroom") String chatroom, Throwable throwable) {
        SessionManagement.removeUser(sessions.get(chatroom), session);
        System.out.println("user removed" + session.getRequestURI() + " from room"  +chatroom);
        LOG.error("onError", throwable);
    }

    @OnMessage
    public void onMessage(String message, @PathParam("chatroom") String chatroom) {
        System.out.println("message sending" + " to room "  +chatroom + "message " + message);
        broadcast(sessions.get(chatroom), message);
    }

    private void broadcast(Queue<Session> room, String message) {
        System.out.println("broadcasting " + room );
        if (Objects.nonNull(room)) {
            room.forEach(s -> {
                s.getAsyncRemote().sendObject(message, result -> {
                    if (result.getException() != null) {
                        LOG.error("Unable to send message:", result.getException());
                    }
                });
            });
    
        }
    }

}
