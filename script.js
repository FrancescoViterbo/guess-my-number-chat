/* Selettori */

const chatMsg = document.getElementById("chat-msg");
const chatHistory = document.getElementById("chat-history");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", getMsg);

/* Frase di Benvenuto */
const welcomeMsg = "Ciao, sono AIbot, vuoi giocare?";
appendAIMsg(welcomeMsg);

/* Liste di messaggi previsti dall'utente */
const rispostePositive = ["si", "ok", "va bene", "yes", "vai", "giusto"];
const risposteNegative = ["no", "sbagliato"];
const rispostePreviste = [rispostePositive, risposteNegative];

/* Setto dei booleani per definire le fasi del gioco */

/* Iterazione per messaggi ricevuti */
function processaMessaggio(message){
    for (let index = 0; index < rispostePreviste.length; index++) {
        if(rispostePreviste[index].includes(message)){
            rispondi(reply);
        } else {
            rispondi(noReply);
        }
    }
}

function rispondi(r){
    if(r = reply){

    }
}

/* FUNZIONI */
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
    // if (userMessages.includes(message)){

    // }
    appendAIMsg(reply);
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