```markdown
# ✅ To-Do List App

A **ReactJS**-powered To-Do List application bootstrapped with Create React App. Leveraging functional components, Hooks, and Props, it provides an intuitive interface to add, complete, delete, and filter tasks—all while persisting your data across sessions.

🔗 **Repository:** https://github.com/Vidhi2004/To-Do-List-App-

---

## 🌐 Web Preview

![Tasks View](images/WhatsApp%20Image%202025-04-29%20at%2021%2023%2018_9d6052e8.jpg)  
![Filter View](images/WhatsApp%20Image%202025-04-29%20at%2021%2023%2032_433eab30.jpg)  
> Screenshots: entering tasks & viewing filtered/completed lists.

---

## 📋 Table of Contents

1. [Features](#✨-features)  
2. [Installation](#🛠-installation)  
3. [Usage](#🚀-usage)  
4. [Project Structure](#📂-project-structure)  
5. [Technologies](#🧰-technologies)  
6. [Team](#👥-team)  

---

## ✨ Features

- **Add Tasks** – Quick entry with form input and “Add” button.  
- **Toggle Complete** – Click task text to mark complete/incomplete.  
- **Delete Tasks** – Remove tasks via the trash icon.  
- **Filter Views** – Toggle between All, Active, and Completed.  
- **Data Persistence** – Tasks saved in Local Storage for session continuity.

---

## 🛠 Installation

```bash
git clone https://github.com/Vidhi2004/To-Do-List-App-.git
cd To-Do-List-App-
npm install
npm start
```
Navigate to `http://localhost:3000` in your browser.

---

## 🚀 Usage

1. **Add** a task: type in “Add a new task…” and press Enter or click “Add”.  
2. **Toggle** status: click the task text to mark it done/undone.  
3. **Delete**: click the trash icon next to any task.  
4. **Filter**: use the All / Active / Completed buttons to subset the list.

---

## 📂 Project Structure

```
To-Do-List-App-/
├── node_modules/               # Third-party dependencies
├── public/                     # Static assets & index.html
│   └── favicon.ico, manifest.json, etc.
├── src/                        # Application source code
│   ├── components/             # Reusable UI modules
│   │   ├── FilterButtons.js    # All/Active/Completed filters
│   │   ├── TodoForm.js         # Task input form
│   │   ├── TodoItem.js         # Single task display & controls
│   │   └── TodoList.js         # List container & logic
│   ├── App.js                  # Root component orchestrating state
│   ├── App.css                 # Component-scoped styles
│   ├── App.test.js             # Unit tests for App
│   ├── index.js                # ReactDOM.render entry point
│   └── index.css               # Global base styles
├── .gitignore                  # Git exclusion patterns
├── package.json                # Scripts & dependency manifest
├── package-lock.json           # Exact dependency tree
└── README.md                   # Project documentation
```

---

## 🧰 Technologies

| Category       | Tools & Libraries                         |
|----------------|-------------------------------------------|
| Framework      | ReactJS (Create React App)                |
| Language       | JavaScript (ES6+)                         |
| Styling        | CSS3 (Flexbox, Media Queries)             |
| State & Hooks  | React Hooks (useState, useEffect)         |
| Persistence    | Web APIs: Local Storage                   |
| Testing        | Jest & React Testing Library              |
| Versioning     | Git & GitHub                              |

---

