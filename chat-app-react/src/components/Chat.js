import PropTypes from 'prop-types'

function Chat(props) {
    return (
        <div className="container">
            <br />
            <div className="row">
                <input id="name" className="col-md-4" type="text" placeholder="your name" />
                <button id="connect" class="col-md-1 btn btn-primary" type="button">connect</button>
                <br />
                <br />
            </div>
            <div class="row">
                <textarea class="col-md-8" id="chat">
                </textarea>
            </div>
            <div class="row">
                <input class="col-md-6" id="msg" type="text" placeholder="enter your message" />
                <button class="col-md-1 btn btn-primary" id="send" type="button" disabled>send</button>
            </div>
        </div>
    )
}

Chat.propTypes = {

}

export default Chat

