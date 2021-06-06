import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
import "../App.css";
import OpenConversation from "./OpenConversation";
import WebSocketProvider from "../contexts/WebSocketProvider";
import {
  ConversationsProvider,
  useConversations,
} from "../contexts/ConversationsProvider";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
function App({ chatroom }) {
  const [id, setId] = useLocalStorage("id", null);
  const dashboard = (
    <WebSocketProvider chatroom={chatroom} id={id}>
      <ConversationsProvider chatroomId={chatroom} id={id}>
        <OpenConversation chatroomId={chatroom} id={id} />
      </ConversationsProvider>
    </WebSocketProvider>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

App.propTypes = {
  chatroom: PropTypes.string,
};
App.defaultProps = {
  chatroom: "DefaultRoom",
};

export default App;
