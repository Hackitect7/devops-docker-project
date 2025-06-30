# 🛠️ INSTALLATION AND CONFIGURATION

This section describes how to prepare the system and configure all the necessary components to run the project and **CI/CD**.

**Follow the official instructions:**

- Install Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
- Install Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

**Check the installation with the commands:**

```bash
sudo docker --version
sudo docker compose --version
```

## 1. Installing Docker and Docker Compose

To run and develop the project, you will need Docker and Docker Compose. Below are the instructions for popular OS.

### 1.1. Ubuntu / Debian

```bash
# Update packages
sudo apt update

# Install required dependencies
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add official Docker GPG key and repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Check Docker version
sudo docker --version

# Install Docker Compose (latest version)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Check Docker Compose version
sudo docker compose --version
```

### 1.2. 📄 Linux on Windows 10/11 Pro with WSL 2

#### 📝 Requirements for Windows with WSL

- Windows 10 version 2004 and above or Windows 11 Pro
- Administrator access to the system
- Internet connection

---

#### 1. ✅ Enabling the required Windows features

- Open PowerShell as administrator.
- Enter the following command:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

- Then enable virtualization:

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- Restart the computer.

#### 2. 🔧 Check WSL version

- Open PowerShell as administrator and run:

```powershell
wsl --version
```

The command only works in WSL version 2. If WSL is not installed yet, the command may not work.

For any version of WSL, you can use the command:

```powershell
wsl --list --verbose
```

- If the command is not recognized, install WSL:

```powershell
wsl --install
```

- Restart your computer after installation.

#### 3. 🔄 Set WSL 2 as the default version

After reboot, open PowerShell (as administrator) and run:

```powershell
wsl --set-default-version 2
```

⚠️ Make sure that BIOS/UEFI supports virtualization (Intel VT-x or AMD-V) and it is enabled.
⚙️ To enable virtualization:

- Restart your computer and enter BIOS/UEFI (usually Del, F2, F10).
- Find the Virtualization (or VT-x/AMD-V) option.
- Enable it if it is disabled.

#### 4. 🐧 Install a Linux distribution via Microsoft Store

Open Microsoft Store.

Find the distribution you need, for example:

- Ubuntu 22.04 LTS
- Debian
- Kali Linux
- openSUSE

Click "Install".

#### 5. 🐧 Installing a Linux distribution via PowerShell

Run in PowerShell:

```powershell
wsl --install -d Ubuntu
```

🔁 You can replace Ubuntu with another system, for example:

- Ubuntu-22.04
- Debian
- Kali-Linux
- openSUSE-42

To view available distributions:

```powershell
wsl --list --online
```

⏳ Wait for the installation
The process will download and install the selected distribution. After that, the Ubuntu terminal (or another system) will start.

🧪 Check
Check that everything works:

```powershell
wsl -l -v
```

You will see a list of installed distributions and their status.

#### 6. 🚀 First Linux launch

After installation, open the application (for example, Ubuntu).
The first launch will configure the environment.

Enter:

- Username
- Password

This is a local user inside the Linux environment.

#### 7. 🔄 Updating packages

After logging in, run:

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3. 🍏 Installing Linux environment on macOS

#### 📝 Requirements for macOS

- macOS 12 or newer (recommended)
- Intel or Apple Silicon chip (M1/M2/M3)
- Administrator access
- Internet connection
- At least 15–20 GB of free space

---

#### 1. 🔧 Installing UTM (easy way to run Linux)

UTM is a free application for virtualization on macOS, no registration required.

✅ Steps:

- Go to the website [https://mac.getutm.app](https://mac.getutm.app)
- Download UTM and move it to the Applications folder
- Run UTM

#### 2. 📥 Installing a Linux distribution (e.g. Ubuntu)

Quick installation from a ready-made image:

- In UTM, click Create a New Virtual Machine
- Select Virtualize (if Apple Silicon) or Emulate (if Intel)
- Select Linux
- Download a Linux ISO image (e.g. Ubuntu)
- Follow UTM instructions (name, amount of RAM, disk, etc.)
- Click Save and Start

💡 For Apple Silicon, choose ARM-compatible images (e.g. Ubuntu Server for ARM64).

#### 3. 🐧 Alternative method: Multipass (from Canonical)

If you need CLI access to Ubuntu without a GUI:

Installation:

- Download Multipass: [https://multipass.run](https://multipass.run)
- Install via Homebrew:

```bash
brew install --cask multipass
```

Launch Ubuntu:

```bash
multipass launch --name ubuntu-lts
```

Connection:

``` bash
multipass shell ubuntu-lts
```

⚡️ Fast, convenient, suitable for developers and server tasks.

#### 4. 🐳 Alternative: Docker

If you need a lightweight Linux environment for development, install Docker Desktop:

```bash
brew install --cask docker
```

Launch and configuration requires a Docker Hub account.

#### 5. 🧪 Check

After installing any of the systems, check:

```bash
uname -a
```

You should see the Linux environment inside the virtual machine or container.

#### 6. 🔄 Updating packages

For Ubuntu (via terminal):

```bash
sudo apt update && sudo apt upgrade -y
```

#### 7. 🧭 Which method to choose?

| Method | Interface | Performance | GUI | Suitable for |
|------------|:------------:|:--------------------:|:-----:|-----------------------------|
| **UTM** | Yes | Medium | Yes | Beginners, visuals |
| **Multipass** | No | High | No | CLI, developers |
| **Docker** | No | Very high | No | DevOps, microservices |

## 2. Setting up SSH keys for GitHub

For secure work with **GitHub** (cloning repositories, pushing), it is recommended to use SSH keys.

### 2.1. Checking for an SSH key

Open the terminal and run:

```bash
ls ~/.ssh
```

If you see files like `id_rsa` and `id_rsa.pub` or `id_ed25519` and `id_ed25519.pub`, the key already exists.
If not, create one 👇

### 2.2. Create SSH key (if not already present)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

If prompted, specify the path (default is `~/.ssh/id_ed25519`)
You can add a password for the key (recommended)
If `ed25519` is not supported (on old OpenSSH), use rsa:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 2.3. Add the key to ssh-agent

Run:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 2.4. Adding a public key to GitHub

Copy the contents of the public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Go to **GitHub**:

`Settings → SSH and GPG keys → New SSH key`

Paste the key and save.

### 2.5. Checking the connection

Run:

```bash
ssh -T git@github.com
```

When connecting for the first time, confirm trust
You should see a message greeting **GitHub** (`Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access`)

### 2.6. Reassign origin to SSH

If you cloned via HTTPS, replace the URL:

```bash
git remote set-url origin git@github.com:USERNAME/<project_name>.git
```

Check:

```bash
git remote -v
```

It should now be:

`origin git@github.com:Hackitect7/devops-docker-project.git (fetch)`
`origin git@github.com:Hackitect7/devops-docker-project.git (push)`

Now push/pull/clone will work without logins and tokens.

## 3. Creating a Docker Hub Access Token

To automatically publish images to **Docker Hub** via **GitHub Actions**, you need an Access Token.

### 3.1. How to create a token?

- Log in to **Docker Hub**: [https://hub.docker.com/](https://hub.docker.com/)
- Go to Account:

`Settings → Security → New Access Token`

- Name the token (e.g. "GitHub Actions Token") and create it.
- Copy the token - it will not be displayed anymore.

### 3.2. What is the token for?

- The token is used instead of a password when logging in to **Docker Hub** from **CI/CD**.
- Allows you to securely publish images from an automated pipeline.
- Protects your account by allowing you to revoke access at any time.

## 4. Setting up secrets in GitHub Actions

In order for **GitHub Actions** to be able to log into **Docker Hub** and pull images, you need to add secrets to the repository.

### 4.1. Adding secrets

Open the repository on **GitHub**.

Go to:

`Settings → Secrets and variables → Actions → New repository secret`

Create the following secrets:

- `DOCKER_USERNAME` — your **Docker Hub** login
- `DOCKER_PASSWORD` — your **Docker Hub** Access Token (not your password!)

### 4.2. Verification

`.github/workflows/docker-ci.yml` uses these secrets for authentication and `push`.

## 5. Description of the project structure and files

The project structure is organized in such a way that it is convenient to develop and maintain:

```text
/backend/                # Backend application on Python Flask
├── app.py               # Main Flask API code
├── requirements.txt     # Python dependencies
└── Dockerfile           # Instructions for building the Docker image backend
/frontend/               # Frontend application on Node.js (Express)
├── index.js             # Main code of the frontend server
├── package.json         # Dependencies and Node.js scripts
├── package.jsonc        # Dependencies and Node.js scripts with comments (not used)
├── package-lock.json    # Automatically generated lock-file
└── Dockerfile           # Frontend Docker image build instructions
/nginx/                  # Nginx configuration
├── nginx.conf           # Reverse proxy config
└── Dockerfile           # Nginx Docker image build instructions
.github/workflows/       # CI/CD configuration GitHub Actions
└── docker-ci.yml        # Script for building, testing and pushing images
docker-compose.yml       # Defining services for local development via Docker Compose
docker-compose.prod.yml  # Defining services for installing them into production from Docker Hub
.dockerignore            # List of files and folders excluded from the Docker build context (e.g. node_modules, .git)
.env                     # File with environment variables (does not get into Git, used Docker Compose and scripts)
.gitignore               # Defines which files and folders should not be included in the Git repository (e.g. .env, __pycache__)
LICENSE                  # Project license text (e.g. MIT, Apache 2.0) — defines the rules for using the code
CONTRIBUTING.md          # Guidelines and rules for external participants wishing to contribute to the project (pull requests, style guide)
```
