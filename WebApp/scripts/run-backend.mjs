import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const cwd = process.cwd();
const winVenvPython = path.join(cwd, ".venv", "Scripts", "python.exe");
const unixVenvPython = path.join(cwd, ".venv", "bin", "python");

const candidates = [
  process.env.PYTHON_CMD,
  fs.existsSync(winVenvPython) ? winVenvPython : null,
  fs.existsSync(unixVenvPython) ? unixVenvPython : null,
  "python",
].filter(Boolean);

const args = ["-m", "uvicorn", "backend.app.main:app", "--reload", "--port", "8000"];

function runWith(command) {
  console.log(`Starting backend with ${command}`);

  const child = spawn(command, args, {
    stdio: "inherit",
    cwd,
    shell: process.platform === "win32" && command === "python",
  });

  child.on("error", () => {
    tryNext();
  });

  child.on("exit", (code) => {
    if (code === 0 || code === null) {
      process.exit(code ?? 0);
      return;
    }

    if (code !== 0 && currentIndex < candidates.length - 1) {
      tryNext();
      return;
    }

    process.exit(code);
  });
}

let currentIndex = 0;

function tryNext() {
  if (currentIndex >= candidates.length) {
    console.error("Unable to start backend. Set PYTHON_CMD to your Python executable.");
    process.exit(1);
    return;
  }

  const command = candidates[currentIndex];
  currentIndex += 1;
  runWith(command);
}

tryNext();
