const button = document.getElementById("demoButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent =
    "ありがとうございます。まずは試作品デモの案内文をお送りします。";
});
