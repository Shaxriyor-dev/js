const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");
const chatBox = document.getElementById("chat-box");


sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === "") return;


    appendMessage("user", message);

    messageInput.value = "";

    setTimeout(() => {
        const replies = [
            "Salom sizga qanday yordam bera olaman",
            "Bu juda yaxshi",
            "Siznig ismingiz nima",
            "Saizga qanday yordam bera olaman",
            "Jusal yaxshi!"
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        appendMessage("friend", randomReply);
    }, 1000);
}

function appendMessage(type, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", type);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}
