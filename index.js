const rootBlock = document.querySelector("#root");
const changeButton = document.querySelector(".change-button");

const changeBackround = () => {
  rootBlock.style.background = "rgb(227, 156, 156)";
};
changeButton.addEventListener("click",changeBackround);
