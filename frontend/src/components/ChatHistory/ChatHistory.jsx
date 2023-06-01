import React, {Component} from "react";
import Message from "../Message"; 
import "./ChatHistory.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class ChatHistory extends Component {
    render() {
        const messages = this.props.chatHistory.map((msg, index) => (
            <Message message={msg.data} />
        ));

        return (
            <div className="ChatHistory">
                {messages}
            </div>
        );
    }
}

export default ChatHistory;
