import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL || "https://event-management-server-v6v9.onrender.com", {
    autoConnect: false,
});

export default socket;
