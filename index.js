require("dotenv").config();
const rpc = require("discord-rpc");
const fs = require("fs");
const path = require("path");

const clientId = process.env.CLIENT_ID;
const presetRoot = process.env.PRESET_ROOT;

rpc.register(clientId);

const client = new rpc.Client({ transport: "ipc" });

let currentPreset = "";
const startTimestamp = Date.now();

function getAllPresetFiles(dirPath) {
    let files = [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            files = files.concat(getAllPresetFiles(fullPath));
        } else if (entry.isFile() && fullPath.toLowerCase().endsWith(".at5p")) {
            const stats = fs.statSync(fullPath);
            files.push({
                path: fullPath,
                name: path.parse(fullPath).name,
                folder: path.basename(path.dirname(fullPath)),
                time: stats.atimeMs
            });
        }
    }

    return files;
}

function setActivity() {
    const files = getAllPresetFiles(presetRoot);
    if (!files.length) return;

    const latest = files.sort((a, b) => b.time - a.time)[0];
    const now = Date.now();
    const minutesSinceAccess = (now - latest.time) / 60000;

    let displayName = `Playing: ${latest.name}`;
    if (latest.name.toLowerCase().includes("tonenet")) {
        displayName = `Playing: ${latest.name}`;
    }

    if (displayName !== currentPreset) {
        currentPreset = displayName;
        client.setActivity({
            details: `🎸 ${displayName}`,
            startTimestamp,
            largeImageKey: "amplitube",
            largeImageText: "Live in the ToneNet",
            instance: false,
        });
        console.log(`[UPDATE] Now playing: ${displayName}`);
    }
}

client.on("ready", () => {
    console.log("✅ Rich Presence connected.");
    setActivity();
    setInterval(setActivity, 5000);
});

client.login({ clientId }).catch(console.error);
