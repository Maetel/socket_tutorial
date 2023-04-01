let socket;
const ioConnect = (e) => {
  console.log("Button clicked");
  socket = io("http://localhost:3000");
  socket.on("connect", () => {
    document.getElementById("received").innerText = "Connected as " + socket.id;
  });
  socket.on("receive-message", (msg) => {
    document.getElementById("received").innerText = msg;
  });
};

const sendMessage = () => {
  socket?.emit("send-message", "Message from " + socket?.id);
};
