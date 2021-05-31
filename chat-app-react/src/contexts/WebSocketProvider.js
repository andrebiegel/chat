import React, { useContext, useEffect, useState } from 'react'

const WebSocketContext = React.createContext()

export function useWebSocket() {
    return useContext(WebSocketContext)
}

export default function WebSocketProvider({chatroom, children }) {

    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = new WebSocket("ws://localhost:8080/chat/" + chatroom)
        console.log("socket initiated")
        setSocket(newSocket)

        newSocket.onopen = e =>{
            console.log("socket connected")
        }
        return () =>{
            newSocket.close()
            console.log("socket closed")
        } 
    }, [chatroom])

    return (
        <WebSocketContext.Provider value={socket}>
            {children}
        </WebSocketContext.Provider>
    )
}
