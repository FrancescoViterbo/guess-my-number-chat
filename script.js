const chatMsg = document.getElementById("chat-msg");
const chatHistory = document.getElementById("chat-history");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", getMsg);

function getMsg(){
    let message = chatMsg.value;
    appendUserMsg(message);
    chatMsg.value = "";
}

function appendUserMsg(message){
    let messageDiv = document.createElement("div");
    let messageInline = document.createElement("div");
    messageInline.className = "inline-block";
    let msg = document.createElement("p");
    msg.innerHTML = message;

    messageInline.appendChild(msg);
    messageDiv.appendChild(messageInline);
    chatHistory.appendChild(messageDiv);

    AIreply(message);
}

function AIreply(message){
    if (userMessages.includes(message)){

    }
}

function appendAIMsg(message){
    let messageDiv = document.createElement("div");
    messageDiv.className = "ai-reply";
    let messageInline = document.createElement("div");
    messageInline.className = "inline-block-blue";
    let msg = document.createElement("p");
    msg.innerHTML = message;

    messageInline.appendChild(msg);
    messageDiv.appendChild(messageInline);
    chatHistory.appendChild(messageDiv);
}