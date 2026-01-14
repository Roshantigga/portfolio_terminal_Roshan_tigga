
const output = document.getElementById('output');
const input = document.getElementById('input');
const root = document.documentElement;

const themes = {
  matrix: {
    '--background': '#000',
    '--text': '#33ff33',
    '--prompt': '#33ff33',
    '--path': '#00d9ff',
    '--dollar': '#ffcc00',
    '--cursor': '#33ff33'
  },
  cyberpunk: {
    '--background': '#0f0c29',
    '--text': '#ff00f7',
    '--prompt': '#00fff7',
    '--path': '#ffcc00',
    '--dollar': '#00ff88',
    '--cursor': '#ff00f7'
  },
  classic: {
    '--background': '#541ba3ff',
    '--text': '#ff0000ff',
    '--prompt': '#0000ff',
    '--path': '#555',
    '--dollar': '#000',
    '--cursor': '#000'
  }
};

const commands = {
  help: `
Available commands:
- help: Show this help message
- about: About me
- projects: View projects
- contact: Contact me
- resume: Download resume
- social: Social links
- theme [name]: Switch theme (matrix, cyberpunk, classic)
- clear: Clear the terminal
`,
  about: `
👋 Hi! I'm Roshan Tigga.
Tech-driven Computer Engineering student with hands-on experience in Python, C/C++, SQL, and OOP prin-
ciples. Skilled in building practical software projects, data-driven applications, and real-time systems. I enjoy
solving problems, learning new technologies, and creating efficient solutions with real-world impact.
`,
  projects: `
📦 Projects:
1. AI driven real time sign language recognition system - https://github.com/Roshantigga/AI-driven-real-time-sign-language-recognition-system
2. Task Manager App - https://github.com/yourusername/task-manager
3. Portfolio Website - https://yourwebsite.com
4. Hostel Management System - https://github.com/Roshantigga/java-hostel-management-system.git
`,
  contact: `📧 Email: <a href="mailto:roshantigga0000@gmail.com">roshantigga0000@gmail.com</a>`,
  resume: `📄 <a href="https://drive.google.com/file/d/1j-8asAW-Z8evnJiS2Lbzg20oHEpWifUi/view?usp=drive_link" target="_blank" download>Download Resume</a>`,
  social: `
🔗 Social Links:
- GitHub: <a href="https://github.com/Roshantigga" target="_blank">github</a>
- LinkedIn: <a href="https://www.linkedin.com/in/roshan-tigga-711701367/" target="_blank">linkedin</a>
- Website: <a href="https://roshantigga.github.io/portfolio/" target="_blank">website</a>
`,
};

function handleInput(event) {
  if (event.key === 'Enter') {
    const cmd = input.value.trim();
    const [base, arg] = cmd.split(' ');
    appendOutput(`➜ ~/portfolio $ ${cmd}`);
    if (base === 'clear') {
      output.innerHTML = '';
    } else if (base === 'theme' && arg && themes[arg]) {
      setTheme(arg);
      appendOutput(`Theme switched to ${arg}`);
    } else if (commands[base]) {
      appendOutput(commands[base]);
    } else {
      appendOutput(`Command not found: ${cmd}\nType 'help' to see available commands.`);
    }
    input.value = '';
  }
}

function setTheme(theme) {
  const properties = themes[theme];
  for (const key in properties) {
    root.style.setProperty(key, properties[key]);
  }
}

function appendOutput(text) {
  output.innerHTML += text + '\n';
  output.scrollTop = output.scrollHeight;
}

function focusInput() {
  input.focus();
}

window.onload = () => {
  setTheme('matrix');
}

