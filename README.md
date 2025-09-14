# 🍽️ Projet mistralai: Chat Gourmand CLIENT

Welcome to the frontend client for the [Chat Gourmand backend](https://github.com/mana-byte/project_mistralai)!  
This project lets you interact with the backend in a simpler way. 😋

---

## 📦 Requirements
- [Node.js](https://nodejs.org/) 16+
- npm or yarn

---

## 🚀 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/mana-byte/project_mistralai_client.git
cd project_mistralai_client
```

> **Note:** THERE ARE **TWO DIFFERENT** INSTALLATION METHODS. Choose **ONE** of them

### 2️⃣ Install with Nix/NixOS (Flake)
- Install [Nix](https://nixos.org/)
- Enter shell with dependencies:
  ```bash
  sudo nix develop
  ```
- Go into the frontend directory and install dependencies:
  ```bash
  cd chat_gourmand
  npm install   # or: yarn install
  ```

### 3️⃣ Install with npm or yarn
- Make sure Node.js is installed
- Go into the frontend directory and install dependencies:
  ```bash
  cd chat_gourmand
  npm install   # or: yarn install
  ```

---

## 🏃 Usage

### Start the development server
```bash
npm run dev    # or: yarn dev
```
Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application! 🌐

> **Note:**  
> This frontend requires the backend server to be running.  
> See the [backend repository](https://github.com/mana-byte/project_mistralai) for details.

---

## 🛠️ Build for production
```bash
npm run build  # or: yarn build
```

## 🚢 Start the production server
```bash
npm start      # or: yarn start
```

