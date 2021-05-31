import React, { useContext, useEffect, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useWebSocket } from './WebSocketProvider';

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ chatroomId, id, children }) {
    const [conversations, setConversations] = useLocalStorage('chatrooms', [])
    const socket = useWebSocket()
    console.log("ConversationsProvider: chatroom id = " + chatroomId)
    function createConversation(newChatroomId) {
        if (typeof conversations !== 'undefined') {
            var check = conversations.find(conversation => { return newChatroomId === conversation.chatroomId })
            if (check)
                return
        }
        setConversations(prevConversations => {
            return [...prevConversations, { chatroomId: newChatroomId, messages: [] }]
        })
    }

    const addMessageToConversation = useCallback(({ chatroomId, text, sender }) => {
        setConversations(prevConversations => {
            let madeChange = false
            const newMessage = { sender, text }
            const newConversations = prevConversations.map(conversation => {
                if (conversation.chatroomId === chatroomId) {
                    madeChange = true
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage]
                    }
                }

                return conversation
            })

            if (madeChange) {
                return newConversations
            } else {
                return [
                    ...prevConversations,
                    { chatroomId, messages: [newMessage] }
                ]
            }
        })
    }, [setConversations])

    useEffect(() => {
        if (socket == null) return
        console.log("useEffect to register onmessage")
        socket.onmessage = (e) =>{
            console.log("Received Message" + e.data)
            const {chatroomId, text, sender} = JSON.parse(e.data);
            if (id !== sender){
                addMessageToConversation({ chatroomId, text, sender: sender })
            }
        }
    }, [socket, addMessageToConversation])

    function sendMessage(chatroomId, text) {
        socket.send(JSON.stringify({ chatroomId, text, sender: id }));
        console.log({ chatroomId, text, sender: id })
        addMessageToConversation({ chatroomId, text, sender: id })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        //const recipients = conversation.recipients.map(recipient => {
        //  const contact = contacts.find(contact => {
        //    return contact.id === recipient
        //  })
        //  const name = (contact && contact.name) || recipient
        //  return { id: recipient, name }
        //})

        const messages = conversation.messages.map(message => {
            //const contact = contacts.find(contact => {
            //  return contact.id === message.sender
            //})
            //const name = (contact && contact.name) || message.sender
            const fromMe = id === message.sender
            return { ...message, senderName: message.sender, fromMe }
        })

        const selected = conversation.chatroomId === chatroomId
        return { ...conversation, messages, selected }
    })
    function fetchActiveConversation(chatroom){
        let conversation =  formattedConversations.find(x => x.chatroomId === chatroom)
        if (typeof conversation === 'undefined') {
            return {chatroomId : chatroom, messages : []}
        } else {
            return conversation
        }
    }
    const value = {
        conversations: formattedConversations,
        selectedConversation: fetchActiveConversation(chatroomId),
        sendMessage,
        createConversation
    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}
