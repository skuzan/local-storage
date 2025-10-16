📦 Simple Local Storage App

This project demonstrates how to use JavaScript’s localStorage API to store, display, and clear data directly in the browser — without any backend.
Users can enter text, save it with the “Add” button, and remove all stored data with the “Clear” button.

🚀 Features

📝 Add and store text input in the browser
💾 Uses localStorage for persistent data storage
🧹 “Clear” button removes all stored data
🎨 Modern, minimal UI with soft colors and subtle shadows
⚡ Built entirely with HTML, CSS, and Vanilla JavaScript

📂 Folder Structure

📁 local-storage-app
┣ 📜 index.html — Main HTML structure & design
┣ 📜 local.js — JavaScript logic for storage handling
┗ 📜 README.md — Documentation

💡 How It Works

1️⃣ Enter text: Type something into the input field.
2️⃣ Click “Add”: Saves the text to the browser’s localStorage. Each item is stored with a unique key and displayed in the list.
3️⃣ Click “Clear”: Deletes all items from localStorage and clears the list visually.

🧩 Core JavaScript Logic

const textInput = document.querySelector('#text');
const addBtn = document.getElementById('add');
const clearBtn = document.querySelector('#clear');
const list = document.getElementById('list');
let key = 0;

addBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  localStorage.setItem(key + 1, text);
  const li = document.createElement('li');
  li.textContent = `${key + 1}. ${text}`;
  list.appendChild(li);
  key++;
  textInput.value = '';
});

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  list.innerHTML = '';
});

🧩 Example Usage
	1.	Type something like Buy milk or Learn JavaScript.
	2.	Click Add → It appears in the list and is stored in your browser.
	3.	Refresh the page — it’s still there (thanks to localStorage).
	4.	Click Clear → Everything is deleted instantly.