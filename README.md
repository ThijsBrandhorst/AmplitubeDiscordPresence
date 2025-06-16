# 🎸 AmpliTube 5 Discord Rich Presence

This Node.js script shows your **currently active AmpliTube 5 preset** (including custom and ToneNET presets) directly in **Discord Rich Presence**, complete with session duration and custom image assets.

Ideal for musicians, streamers, or developers who want to flex their current tone live on Discord.

---

## 🧠 What It Does

This script:

- Recursively scans your **AmpliTube 5 preset folder** (including subfolders like `Legacy`, `User`, or `ToneNET`)
- Detects the **most recently opened preset** by access time (`.at5p` files)
- Updates your Discord status every 5 seconds
- Includes the preset name, optional folder, and shows how long you’ve been shredding
- Shows a large custom image ("amplitube") with hover text ("Live in the ToneNet")

---

## 📸 Example Output in Discord

> `🎸 Playing: Master of Puppets`  
> `Live in the ToneNet • 25 minutes`  
> _(With your custom image icon)_

---

## 🛠 Requirements

- Node.js v16 or newer
- A Discord application with Rich Presence enabled
- AmpliTube 5 installed with access to its preset directory
- Windows (preset path assumes `C:/Users/YourName/...`)

---

## 📦 Installation & Setup (All-in-One)

1. **Clone the repository and enter it:**

    ```bash
    git clone https://github.com/ThijsBrandhorst/AmplitubeDiscordPresence.git
    cd amplitube-rich-presence
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory:**

    ```env
    CLIENT_ID=YOUR_DISCORD_CLIENT_ID
    PRESET_ROOT=C:/Users/YOURNAME/Documents/IK Multimedia/AmpliTube 5/Presets
    ```

4. **Add `.env` to your `.gitignore` so it's not uploaded:**

    ```gitignore
    .env
    ```

5. **Run the script:**

    ```bash
    node index.js
    ```

6. **Check your Discord – your status should now display your latest preset!**

---

## 🧾 How to Set Up Your Discord App

- Go to the [Discord Developer Portal](https://discord.com/developers/applications)
- Click **"New Application"** → Give it a name like `AmpliTube RPC`
- Go to **"Rich Presence" > "Art Assets"**
- Upload a square image and name it `amplitube` (to match the code)
- Go to **"OAuth2" > "General"**, copy the **Client ID**
- Paste that Client ID into your `.env` file under `CLIENT_ID`

---

## 🤘 Credits

Made by [Thijs Brandhorst](https://github.com/ThijsBrandhorst)  

---

## 📄 License

MIT — use it, fork it, rock with it. Just don’t claim it as your own if you didn’t touch a line. :D
