const textInput = document.querySelector(`#text`);
const addBtn = document.getElementById(`add`);
const clearBtn = document.querySelector(`#clear`);
const list = document.getElementById(`list`);
let key = 0;

addBtn.addEventListener(`click`, () => {
  const text = textInput.value.trim();
  localStorage.setItem(key + 1, text);
  const li = document.createElement("li");
  li.textContent = `${key + 1}. ${text}`;
  list.appendChild(li);
  key++;
  textInput.value = "";
});

clearBtn.addEventListener(`click`, () => {
  localStorage.clear();
  list.innerHTML = "";
});
