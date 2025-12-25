async function send() {
  let input = document.getElementById("msg");
  let chat = document.getElementById("chat");
  let message = input.value.trim();

  if (message === "") return;

  // user message show
  let userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.innerText = message;
  chat.appendChild(userDiv);

  input.value = "";

  try {
    let response = await fetch("https://a-chatgpt-backend.onrender.com/chat", {
      "https://a-chatgpt-backend.onrender.com",   // 👈 yahan apna Render backend URL
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
      }
    );

    let data = await response.json();

    let botDiv = document.createElement("div");
    botDiv.className = "bot";
    botDiv.innerText = data.reply;
    chat.appendChild(botDiv);

    chat.scrollTop = chat.scrollHeight;

  } catch (error) {
    let errorDiv = document.createElement("div");
    errorDiv.className = "bot";
    errorDiv.innerText = "❌ Backend connect nahi ho raha.";
    chat.appendChild(errorDiv);
  }
}
