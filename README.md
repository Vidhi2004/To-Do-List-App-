
# ✅ To-Do List App

A clean and functional ReactJS To-Do List app using hooks and props, allowing users to add, delete, complete, and filter tasks with a stylish UI.
🔗 **Repository:** https://github.com/Vidhi2004/To-Do-List-App-
---

## 🌐 Web Preview
![WhatsApp Image 2025-04-29 at 21 23 18_9d6052e8](https://github.com/user-attachments/assets/0948928d-6444-49c8-99d3-31a709a6867e)
![WhatsApp Image 2025-04-29 at 21 23 32_433eab30](https://github.com/user-attachments/assets/425d9927-53e6-4de0-8d1a-8b905b6bb6ce)



---

## 📋 Table of Contents

- [Features](#features)  
- [Web Preview](#web-preview)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Team](#team)  

---

## ✨ Features

- **Add Tasks** – Enter new tasks via the input form.  
- **Complete / Uncomplete** – Click a task to toggle its completion state.  
- **Delete Tasks** – Remove tasks with the trash icon.  
- **Filter Views** – Show All, Active, or Completed tasks.  
- **Persistent Storage** – Tasks persist across page reloads via Local Storage.  

---

## 🛠 Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Vidhi2004/To-Do-List-App-.git
   ```
2. **Change into the project directory**  
   ```bash
   cd To-Do-List-App-
   ```
3. **Install dependencies**  
   ```bash
   npm install
   ```
4. **Start the development server**  
   ```bash
   npm start
   ```  
   The app will open at `http://localhost:3000`.

---

## 🚀 Usage

- **Add** a task by typing into the “Add a new task” field and pressing Enter or clicking “Add”.  
- **Toggle** completion by clicking the task text.  
- **Delete** tasks with the trash icon next to each item.  
- **Filter** tasks using the All / Active / Completed buttons.

---

## 📂 Project Structure

```
To-Do-List-App-/
├── node_modules/                      # Installed dependencies
├── public/                            # Static assets & HTML template
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/                               # React source code
│   ├── components/                    # Reusable UI components
│   │   ├── FilterButtons.js
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── App.js                         # Main application component
│   ├── App.css                        # App-specific styles
│   ├── App.test.js                    # Tests
│   ├── index.js                       # React entry point
│   └── index.css                      # Global styles
├── .gitignore                         # Files to ignore in Git
├── package.json                       # Project metadata & scripts
├── package-lock.json                  # Exact dependency versions
└── README.md                          # This documentation
```

---

## 🧰 Technologies Used

- **ReactJS** (Create React App, Hooks, Props)  
- **JavaScript** (ES6+)  
- **CSS** (Flexbox, responsive design)  
- **Local Storage** (persist tasks)

---
