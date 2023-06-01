// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {connect, sendMsg} from "./api";
import Header from "./components/Header";
import ChatHistory from './components/ChatHistory'; 
import ChatInput from './components/ChatInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message To Append:" + msg);
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(event) {
    console.log(event.key);
    if (event.key === "Enter") {
      if (event.target.value === "") {
        alert("Please enter a message");  // TODO: make it prettier..
      } else {
        sendMsg(event.target.value);
        event.target.value = "";
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <ChatInput send={this.send}/>
      </div>
    );
  } 
}

export default App;
