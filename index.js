const rootBlock = document.querySelector("#root");
const changeButton = document.querySelector(".change-button");

const changeBackround = () => {
  rootBlock.style.backround = "rgb(227, 156, 156)";
};
changeButton.addEventListener("click",changeBackround);
