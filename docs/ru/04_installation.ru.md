# 🛠️ УСТАНОВКА И НАСТРОЙКА

В этом разделе описывается, как подготовить систему и настроить все необходимые компоненты для запуска проекта и **CI/CD**.

**Следуйте официальным инструкциям:**

- Установка Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)  
- Установка Docker Compose: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

**Проверьте установку командами:**

```bash
sudo docker --version  
sudo docker compose --version  
```

## 1. Установка Docker и Docker Compose

Для запуска и разработки проекта потребуется Docker и Docker Compose. Ниже инструкции для популярных ОС.

### 1.1. Ubuntu / Debian

```bash
# Обновляем пакеты
sudo apt update

# Устанавливаем необходимые зависимости
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Добавляем официальный Docker GPG ключ и репозиторий
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Устанавливаем Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Проверяем версию Docker
sudo docker --version

# Установка Docker Compose (последняя версия)
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Проверяем версию Docker Compose
sudo docker compose --version
```

### 1.2. 📄 Linux на Windows 10/11 Pro с помощью WSL 2

#### 📝 Требования для Windows c WSL

- Windows 10 версии 2004 и выше или Windows 11 Pro
- Администраторский доступ к системе
- Подключение к интернету

---

#### 1. ✅ Включение необходимых компонентов Windows

- Откройте PowerShell от имени администратора.
- Введите следующую команду:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

- Затем включите виртуализацию:

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- Перезагрузите компьютер.

#### 2. 🔧 Проверка версии WSL

- Откройте PowerShell от имени администратора и выполните:

```powershell
wsl --version
```

Команда работает только в WSL версии 2. Если WSL ещё не установлен, команда может не сработать.

Для любой версии WSL можно применить команду:

```powershell
wsl --list --verbose
```

- Если команда не распознана, установите WSL:

```powershell
wsl --install
```

- Перезагрузите компьютер после установки.

#### 3. 🔄 Установка WSL 2 как версии по умолчанию

После перезагрузки откройте PowerShell (от имени администратора) и выполните:

```powershell
wsl --set-default-version 2
```

⚠️ Убедитесь, что BIOS/UEFI поддерживает виртуализацию (Intel VT-x или AMD-V) и она включена.
⚙️ Для включения виртуализации:

- Перезагрузите компьютер и войдите в BIOS/UEFI (обычно клавиша Del, F2, F10).
- Найдите параметр Virtualization (или VT-x/AMD-V).
- Включите его (Enable), если выключен.

#### 4. 🐧 Установка дистрибутива Linux через Microsoft Store

Откройте Microsoft Store.

Найдите нужный дистрибутив, например:

- Ubuntu 22.04 LTS
- Debian
- Kali Linux
- openSUSE

Нажмите "Установить".

#### 5. 🐧 Установка дистрибутива Linux через PowerShell

Выполните в PowerShell:

```powershell
wsl --install -d Ubuntu
```

🔁 Вы можете заменить Ubuntu на другую систему, например:

- Ubuntu-22.04
- Debian
- Kali-Linux
- openSUSE-42

Чтобы посмотреть доступные дистрибутивы:

```powershell
wsl --list --online
```

⏳ Дождитесь установки
Процесс загрузит и установит выбранный дистрибутив. После этого запустится терминал Ubuntu (или другой системы).

🧪 Проверка
Проверьте, что всё работает:

```powershell
wsl -l -v
```

Вы увидите список установленных дистрибутивов и их состояние.

#### 6. 🚀 Первый запуск Linux

После установки откройте приложение (например, Ubuntu).
При первом запуске произойдет настройка окружения.

Введите:

- Имя пользователя
- Пароль

Это локальный пользователь внутри Linux-среды.

#### 7. 🔄 Обновление пакетов

После входа выполните:

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3. 🍏 Установка Linux-окружения на macOS

#### 📝 Требования для macOS

- macOS 12 или новее (рекомендуется)
- Чип Intel или Apple Silicon (M1/M2/M3)
- Администраторский доступ
- Подключение к интернету
- Минимум 15–20 ГБ свободного места

---

#### 1. 🔧 Установка UTM (простой способ запуска Linux)

UTM — бесплатное приложение для виртуализации на macOS, не требует регистрации.

✅ Шаги:

- Перейдите на сайт [https://mac.getutm.app](https://mac.getutm.app)
- Скачайте UTM и переместите в папку Программы
- Запустите UTM

#### 2. 📥 Установка дистрибутива Linux (например, Ubuntu)

Быстрая установка из готового образа:

- В UTM нажмите Create a New Virtual Machine
- Выберите Virtualize (если Apple Silicon) или Emulate (если Intel)
- Выберите Linux
- Загрузите ISO-образ Linux (например, Ubuntu)
- Следуйте инструкциям UTM (название, количество RAM, диска и т.д.)
- Нажмите Save и Start

💡 Для Apple Silicon выбирайте образы, совместимые с ARM (например, Ubuntu Server for ARM64).

#### 3. 🐧 Альтернативный способ: Multipass (от Canonical)

Если нужен CLI-доступ к Ubuntu без GUI:

Установка:

- Скачайте Multipass: [https://multipass.run](https://multipass.run)
- Установите через Homebrew:

```bash
brew install --cask multipass
```

Запуск Ubuntu:

```bash
multipass launch --name ubuntu-lts
```

Подключение:

``` bash
multipass shell ubuntu-lts
```

⚡️ Быстро, удобно, подходит для разработчиков и серверных задач.

#### 4. 🐳 Альтернатива: Docker

Если нужен лёгкий Linux-окружение для разработок — ставим Docker Desktop:

```bash
brew install --cask docker
```

Запуск и настройка требует Docker Hub-аккаунта.

#### 5. 🧪 Проверка

После установки любой из систем — проверьте:

```bash
uname -a
```

Вы должны увидеть Linux-среду внутри виртуальной машины или контейнера.

#### 6. 🔄 Обновление пакетов

Для Ubuntu (через терминал):

```bash
sudo apt update && sudo apt upgrade -y
```

#### 7. 🧭 Какой способ выбрать?

| Способ     | Интерфейс | Производительность | GUI | Подходит для                 |
|------------|:-----------:|:--------------------:|:-----:|------------------------------|
| **UTM**    | Да        | Средняя            | Да  | Новичков, визуалов           |
| **Multipass** | Нет     | Высокая            | Нет | CLI, разработчиков           |
| **Docker** | Нет       | Очень высокая      | Нет | DevOps, микросервисы         |

## 2. Настройка SSH-ключей для GitHub

Для безопасной работы с **GitHub** (клонирование репозиториев, push) рекомендуется использовать SSH-ключи.

### 2.1. Проверка наличия SSH-ключа

Открой терминал и выполни:

```bash
ls ~/.ssh
```

Если увидишь файлы типа `id_rsa` и `id_rsa.pub` или `id_ed25519` и `id_ed25519.pub` — ключ уже есть.
Если нет — создаём 👇

### 2.2. Создание SSH-ключа (если ещё нет)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

При появлении вопроса укажите путь (по умолчанию `~/.ssh/id_ed25519`)
Можно добавить пароль для ключа (рекомендуется)
Если `ed25519` не поддерживается (на старом OpenSSH), используй rsa:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 2.3. Добавь ключ в ssh-agent

Запусти:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 2.4. Добавление публичного ключа в GitHub

Скопируйте содержимое публичного ключа:

```bash
cat ~/.ssh/id_ed25519.pub
```

Зайдите на **GitHub**:

`Settings → SSH and GPG keys → New SSH key`

Вставьте ключ и сохраните.

### 2.5. Проверка подключения

Запусти:

```bash
ssh -T git@github.com
```

При первом подключении подтвердите доверие
Должно появиться сообщение с приветствием **GitHub** (`Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access`)

### 2.6. Переназначь origin на SSH

Если ты клонировал по HTTPS, замени адрес:

```bash
git remote set-url origin git@github.com:USERNAME/<project_name>.git
```

Проверь:

```bash
git remote -v
```

Теперь должно быть:

`origin  git@github.com:Hackitect7/devops-docker-project.git (fetch)`
`origin  git@github.com:Hackitect7/devops-docker-project.git (push)`

Теперь push/pull/clone будет работать без логинов и токенов.

## 3. Создание Docker Hub Access Token

Для автоматической публикации образов в **Docker Hub** через **GitHub Actions** нужен токен доступа (Access Token).

### 3.1. Как создать токен?

- Войдите в **Docker Hub**: [https://hub.docker.com/](https://hub.docker.com/)
- Перейдите в Account:

  `Settings → Security → New Access Token`

- Назовите токен (например, "GitHub Actions Token") и создайте.
- Скопируйте токен — он больше не будет отображаться.

### 3.2. Для чего нужен токен?

- Токен используется вместо пароля при входе в **Docker Hub** из **CI/CD**.
- Позволяет безопасно публиковать образы из автоматизированного пайплайна.
- Защищает учётную запись, давая возможность в любой момент отозвать доступ.

## 4. Настройка секретов в GitHub Actions

Чтобы **GitHub Actions** мог войти в **Docker Hub** и загрузить образы, нужно добавить секреты в репозиторий.

### 4.1. Добавление секретов

Откройте репозиторий на **GitHub**.

Перейдите:

`Settings → Secrets and variables → Actions → New repository secret`

Создайте следующие секреты:

- `DOCKER_USERNAME` — ваш логин в **Docker Hub**
- `DOCKER_PASSWORD` — ваш Access Token из **Docker Hub** (не пароль!)

### 4.2. Проверка

В `.github/workflows/docker-ci.yml` используются эти секреты для авторизации и `push`.

## 5. Описание структуры проекта и файлов

Структура проекта организована так, чтобы было удобно развивать и поддерживать:

```text
/backend/                # Backend-приложение на Python Flask
├── app.py               # Основной код Flask API
├── requirements.txt     # Python-зависимости
└── Dockerfile           # Инструкция сборки Docker-образа backend
/frontend/               # Frontend-приложение на Node.js (Express)
├── index.js             # Основной код frontend сервера
├── package.json         # Зависимости и скрипты Node.js
├── package.jsonc        # Зависимости и скрипты Node.js с комментариями (не применяется)
├── package-lock.json    # Автоматически сгенерированный lock-файл
└── Dockerfile           # Инструкция сборки Docker-образа frontend
/nginx/                  # Конфигурация nginx
├── nginx.conf           # Конфиг обратного прокси
└── Dockerfile           # Инструкция сборки Docker-образа nginx
.github/workflows/       # CI/CD конфигурация GitHub Actions
└── docker-ci.yml        # Скрипт для сборки, тестирования и пуша образов
docker-compose.yml       # Определение сервисов для локальной разработки через Docker Compose
docker-compose.prod.yml  # Определение сервисов для установки их в производственную среду из Docker Hub
.dockerignore            # Список файлов и папок, исключаемых из контекста сборки Docker (например: node_modules, .git)
.env                     # Файл с переменными окружения (не попадает в Git, используется Docker Compose и скриптами)
.gitignore               # Определяет, какие файлы и папки не должны попадать в репозиторий Git (например: .env, __pycache__)
LICENSE                  # Текст лицензии проекта (например, MIT, Apache 2.0) — определяет правила использования кода
CONTRIBUTING.md          # Рекомендации и правила для внешних участников, желающих внести вклад в проект (pull requests, style guide)
```
