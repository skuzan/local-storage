const textInput = document.querySelector(`#text`);
const addBtn = document.getElementById(`add`);
const clearBtn = document.querySelector(`#clear`);
const list = document.getElementById(`list`);
let key = localStorage.setItem("key", 0);
let key2 = Number(localStorage.getItem("key"));

window.addEventListener(`load`, () => {
  for (let i = 0; i < localStorage.length; i++) {
    const sKey = localStorage.key(i);
    const SValue = localStorage.getItem(sKey);
    if (key2 !== 0) {
      const li = document.createElement("li");
      li.textContent = `${sKey}. ${SValue}`;
      list.appendChild(li);
    }
  }
});

addBtn.addEventListener(`click`, () => {
  const text = textInput.value.trim();
  localStorage.setItem(key2 + 1, text);
  const li = document.createElement("li");
  li.textContent = `${key2 + 1}. ${text}`;
  list.appendChild(li);
  key2++;
  textInput.value = "";
});

clearBtn.addEventListener(`click`, () => {
  localStorage.clear();
  list.innerHTML = "";
});

document.addEventListener(`keydown`, (e) => {
  if (e.key.toUpperCase() === "ENTER") {
    addBtn.click();
  }
});
