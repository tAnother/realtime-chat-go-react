var socket = new WebSocket("ws://localhost:8080/ws");

let connect = callback => {
    console.log("Attempting connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    }
    
    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    }

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    }

    socket.onmessage = msg => {
        console.log(msg);
        callback(msg);
    }
};

let sendMsg = msg => {
    console.log("sending msg to backend: ", msg);
    socket.send(msg);
};

export { connect, sendMsg };

