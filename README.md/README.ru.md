Название проекта
DevOps Docker Project: Профессиональный CI/CD с GitHub Actions и Docker

Содержание
1. 📘 Описание проекта
2. ⚙️ Требования
3. ⚡ Быстрый старт
4. 🛠️ Подробная установка и настройка
5. 🧩 Архитектура проекта и как он работает
6. 🗂️ Описание файлов проекта
7. 🧪 Запуск и тестирование проекта
8. 📤 Управление образами и репозиториями на Docker Hub
9. ❓ Частые вопросы и советы
10. 🚀 Рекомендации по дальнейшему развитию
11. 📚 Глоссарий
12. 🔗 Контакты и ссылки

1. 📘 Описание проекта
   Этот проект демонстрирует создание профессионального CI/CD пайплайна с использованием Docker и GitHub Actions.
   В проекте упакованы три основных компонента:
   - Backend на Flask (Python API)
   - Frontend на Node.js (Express)
   - Обратный прокси на Nginx
   Цель — показать, как настроить автоматическую сборку, тестирование и публикацию Docker-образов в Docker Hub с последующим локальным запуском через Docker Compose.
   Проект подходит как для новичков, желающих изучить современные практики DevOps и контейнеризации, так и для специалистов, стремящихся создать надежный и масштабируемый CI/CD.

2. ⚙️ Требования
   Для успешной работы проекта понадобится:
   - Операционная система: Linux, Windows или macOS
   - Установленные программы:
     - Docker версии 20.10 и выше
     - Docker Compose версии 1.29 и выше
     - Git для работы с репозиторием
     - SSH-клиент (обычно встроен в Linux/macOS, для Windows рекомендуется Git Bash)
   - Аккаунты:
     - Аккаунт на GitHub для хранения кода и настройки CI/CD
     - Аккаунт на Docker Hub для хранения Docker-образов
   - Рекомендации по версиям:
     Рекомендуется использовать актуальные стабильные версии программного обеспечения, чтобы избежать проблем совместимости.

3. ⚡ Быстрый старт
   Для быстрого запуска проекта выполните следующие шаги:
      3.1. Клонируйте репозиторий:
           git clone git@github.com:Hackitect7/devops-docker-project.git
           cd devops-docker-project
      3.2. Запустите все сервисы с помощью Docker Compose:
           sudo docker compose up --build
      3.3. Проверьте работу приложений:
           - Backend Flask API доступен по адресу: http://localhost:5000/api
           - Frontend Node.js — http://localhost:3000
           - Nginx (обратный прокси) — http://localhost (порт 80)
      3.4. Для остановки и удаления контейнеров используйте:
           sudo docker compose down

4. 🛠️ Подробная установка и настройка
   В этом разделе описывается, как подготовить систему и настроить все необходимые компоненты для запуска проекта и CI/CD.
   Следуйте официальным инструкциям:
   - Установка Docker (https://docs.docker.com/get-docker/)
   - Установка Docker Compose (https://docs.docker.com/compose/install/)
   Проверьте установку командами:
   sudo docker --version  
   sudo docker compose --version  
   4.1. Установка Docker и Docker Compose
        Для запуска и разработки проекта потребуется Docker и Docker Compose. Ниже инструкции для популярных ОС.
        4.1.1. Ubuntu / Debian
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
        4.1.2. 📄 Установка Linux на Windows 10/11 Pro с помощью WSL 2
               📝 Требования
               - Windows 10 версии 2004 и выше или Windows 11 Pro
               - Администраторский доступ к системе
               - Подключение к интернету
               1. ✅ Включение необходимых компонентов Windows
                  - Откройте PowerShell от имени администратора.
                  - Введите следующую команду:
                    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
                  - Затем включите виртуализацию:
                    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
                  - Перезагрузите компьютер.
               2. 🔧 Проверка версии WSL
                  - Откройте PowerShell от имени администратора и выполните:
                    wsl --version
                    Команда работает только в WSL версии 2. Если WSL ещё не установлен — команда может не сработать.
                    Для любой версии WSL можно применить команду:
                    wsl --list --verbose
                  - Если команда не распознана, установите WSL:
                    wsl --install
                  - Перезагрузите компьютер после установки.
               3. 🔄 Установка WSL 2 как версии по умолчанию
                  После перезагрузки откройте PowerShell (от имени администратора) и выполните:
                  wsl --set-default-version 2
                  ⚠️ Убедитесь, что BIOS/UEFI поддерживает виртуализацию (Intel VT-x или AMD-V) и она включена.
                  ⚙️ Для включения виртуализации:
                  - Перезагрузите компьютер и войдите в BIOS/UEFI (обычно клавиша Del, F2, F10).
                  - Найдите параметр Virtualization (или VT-x/AMD-V).
                  - Включите его (Enable), если выключен.
               4. 🐧 Установка дистрибутива Linux через Microsoft Store
                  - Откройте Microsoft Store.
                  - Найдите нужный дистрибутив, например:
                    - Ubuntu 22.04 LTS
                    - Debian
                    - Kali Linux
                    - openSUSE
                  - Нажмите "Установить".
               5. 🐧 Установка дистрибутива Linux через PowerShell
                  - Выполните в PowerShell:
                    wsl --install -d Ubuntu
                    🔁 Вы можете заменить Ubuntu на другую систему, например:
                    - Ubuntu-22.04
                    - Debian
                    - Kali-Linux
                    - openSUSE-42
                  - Чтобы посмотреть доступные дистрибутивы:
                    wsl --list --online
                  - ⏳ Дождитесь установки
                    Процесс загрузит и установит выбранный дистрибутив. После этого запустится терминал Ubuntu (или другой системы).
                  - 🧪 Проверка
                    Проверьте, что всё работает:
                    wsl -l -v
                    Вы увидите список установленных дистрибутивов и их состояние.
               6. 🚀 Первый запуск Linux
                  - После установки откройте приложение (например, Ubuntu).
                  - При первом запуске произойдет настройка окружения.
                  - Введите:
                    - Имя пользователя
                    - Пароль
                    Это локальный пользователь внутри Linux-среды.
               7. 🔄 Обновление пакетов
                  После входа выполните:
                  sudo apt update && sudo apt upgrade -y
        4.1.3. 🍏 Установка Linux-окружения на macOS
               📝 Требования
               - macOS 12 или новее (рекомендуется)
               - Чип Intel или Apple Silicon (M1/M2/M3)
               - Администраторский доступ
               - Подключение к интернету
               - Минимум 15–20 ГБ свободного места
               1. 🔧 Установка UTM (простой способ запуска Linux)
                  UTM — бесплатное приложение для виртуализации на macOS, не требует регистрации.
                  ✅ Шаги:
                  - Перейдите на сайт https://mac.getutm.app
                  - Скачайте UTM и переместите в папку Программы
                  - Запустите UTM
               2. 📥 Установка дистрибутива Linux (например, Ubuntu)
                  Быстрая установка из готового образа
                  - В UTM нажмите Create a New Virtual Machine
                  - Выберите Virtualize (если Apple Silicon) или Emulate (если Intel)
                  - Выберите Linux
                  - Загрузите ISO-образ Linux (например, Ubuntu)
                  - Следуйте инструкциям UTM (название, количество RAM, диска и т.д.)
                  - Нажмите Save и Start
                  💡 Для Apple Silicon выбирайте образы, совместимые с ARM (например, Ubuntu Server for ARM64).
               3. 🐧 Альтернативный способ: Multipass (от Canonical)
                  Если нужен CLI-доступ к Ubuntu без GUI:
                  Установка:
                  - Скачайте Multipass: https://multipass.run
                  - Установите через Homebrew:
                    brew install --cask multipass
                    Запуск Ubuntu:
                    multipass launch --name ubuntu-lts
                    Подключение:
                    multipass shell ubuntu-lts
                    ⚡️ Быстро, удобно, подходит для разработчиков и серверных задач.
               4. 🐳 Альтернатива: Docker
                  Если нужен лёгкий Linux-окружение для разработок — ставим Docker Desktop:
                  brew install --cask docker
                  Запуск и настройка требует Docker Hub-аккаунта.
               5. 🧪 Проверка
                  После установки любой из систем — проверьте:
                  uname -a
                  Вы должны увидеть Linux-среду внутри виртуальной машины или контейнера.
               6. 🔄 Обновление пакетов
                  Для Ubuntu (через терминал):
                  sudo apt update && sudo apt upgrade -y
               7. 🧭 Какой способ выбрать?
                  ────────────────────────────────────────────────────
                  Способ    | Интерфейс | Производительность | GUI | Подходит для
                  ────────────────────────────────────────────────────
                  UTM       | Да        | Средняя            | Да  | Новичков, визуалов
                  Multipass | Нет       | Высокая            | Нет | CLI, разработчиков
                  Docker    | Нет       | Очень высокая      | Нет | DevOps, микросервисы
                  ────────────────────────────────────────────────────
   4.2. Настройка SSH-ключей для GitHub
        Для безопасной работы с GitHub (клонирование репозиториев, push) рекомендуется использовать SSH-ключи.
        4.2.1. Проверка наличия SSH-ключа
               Открой терминал и выполни:
               ls ~/.ssh
               Если увидишь файлы типа id_rsa и id_rsa.pub или id_ed25519 и id_ed25519.pub — ключ уже есть.
               Если нет — создаём 👇
        4.2.2. Создание SSH-ключа (если ещё нет)
               ssh-keygen -t ed25519 -C "your_email@example.com"
               При появлении вопроса укажите путь (по умолчанию ~/.ssh/id_ed25519)
               Можно добавить пароль для ключа (рекомендуется)
               Если ed25519 не поддерживается (на старом OpenSSH), используй rsa:
               ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
        4.2.3. Добавь ключ в ssh-agent
               Запусти:
               eval "$(ssh-agent -s)"
               ssh-add ~/.ssh/id_ed25519
        4.2.4. Добавление публичного ключа в GitHub
               - Скопируйте содержимое публичного ключа:
                 cat ~/.ssh/id_ed25519.pub
               - Зайдите на GitHub:
                 Settings → SSH and GPG keys → New SSH key
               - Вставьте ключ и сохраните.
        4.2.5. Проверка подключения
               ssh -T git@github.com
               При первом подключении подтвердите доверие
               Должно появиться сообщение с приветствием GitHub (Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
)
        4.2.6. Переназначь origin на SSH
               Если ты клонировал по HTTPS, замени адрес:
               git remote set-url origin git@github.com:USERNAME/<project_name>.git
               Проверь:
               git remote -v
               Теперь должно быть:
               origin  git@github.com:Hackitect7/devops-docker-project.git (fetch)
               origin  git@github.com:Hackitect7/devops-docker-project.git (push)
               Теперь push/pull/clone будет работать без логинов и токенов.
   4.3. Создание Docker Hub Access Token
        Для автоматической публикации образов в Docker Hub через GitHub Actions нужен токен доступа (Access Token).
        4.3.1. Как создать токен:
               - Войдите в Docker Hub: https://hub.docker.com/
               - Перейдите в Account Settings → Security → New Access Token
               - Назовите токен (например, "GitHub Actions Token") и создайте.
               - Скопируйте токен — он больше не будет отображаться.
        4.3.2. Для чего нужен токен?
               - Токен используется вместо пароля при входе в Docker Hub из CI/CD.
               - Позволяет безопасно публиковать образы из автоматизированного пайплайна.
               - Защищает учётную запись, давая возможность в любой момент отозвать доступ.
   4.4. Настройка секретов в GitHub Actions
        Чтобы GitHub Actions мог войти в Docker Hub и загрузить образы, нужно добавить секреты в репозиторий.
        4.4.1. Добавление секретов
               - Откройте репозиторий на GitHub.
               - Перейдите в Settings → Secrets and variables → Actions → New repository secret.
               - Создайте следующие секреты:
                 - DOCKER_USERNAME — ваш логин в Docker Hub
                 - DOCKER_PASSWORD — ваш Access Token из Docker Hub (не пароль!)
        4.4.2. Проверка
               В .github/workflows/docker-ci.yml используются эти секреты для авторизации и push.
   4.5. Описание структуры проекта и файлов
        Структура проекта организована так, чтобы было удобно развивать и поддерживать:

        /backend/                 # Backend-приложение на Python Flask
          ├── app.py             # Основной код Flask API
          ├── requirements.txt   # Python-зависимости
          └── Dockerfile         # Инструкция сборки Docker-образа backend
        /frontend/                # Frontend-приложение на Node.js (Express)
          ├── index.js           # Основной код frontend сервера
          ├── package.json       # Зависимости и скрипты Node.js
          ├── package-lock.json  # Автоматически сгенерированный lock-файл
          └── Dockerfile         # Инструкция сборки Docker-образа frontend
        /nginx/                   # Конфигурация nginx
          └── nginx.conf         # Конфиг обратного прокси
        .github/workflows/        # CI/CD конфигурация GitHub Actions
          └── docker-ci.yml      # Скрипт для сборки, тестирования и пуша образов
        /README.md                # Документация и описание проекта на разных языках
          ├── README.md          # Документация проекта на английском языке  
          └── README.ru.md       # Документация проекта на русском языке
        docker-compose.yml        # Определение сервисов для локальной разработки через Docker Compose
        docker-compose.prod.yml   # Определение сервисов для установки их в производственную среду из Docker Hub

5. 🏗️ Архитектура проекта и как он работает
   Проект состоит из трёх контейнеров, взаимодействующих между собой через Docker Compose:
   5.1. 🧩 Состав контейнеров:
        - backend (Flask API) — отвечает за обработку REST-запросов, логику и данные.
        - frontend (Node.js Express) — отдаёт клиентский интерфейс, получает данные с backend.
        - nginx — обратный прокси, принимает внешние запросы и направляет их на нужный контейнер.
        graph TD;
           Client --> NGINX;
           NGINX --> FRONTEND;
           NGINX --> BACKEND;
   5.2. ⚙️ Роль Docker Compose
        Docker Compose:
        - 📦 Автоматически разворачивает инфраструктуру из docker-compose.yml
        - 🔗 Обеспечивает сеть между сервисами (общая bridge-сеть)
        - 🛠️ Упрощает запуск и тестирование всех компонентов в изоляции
        Пример:
        docker compose up --build
   5.3. 🔁 Роль GitHub Actions
        GitHub Actions автоматизирует процесс CI/CD:
        - 🧪 CI (Continuous Integration): тестирование и сборка образов при каждом пуше
        - 📤 CD (Continuous Delivery): публикация Docker-образов в Docker Hub
        📦 CI/CD Pipeline
        - ✅ Разработчик делает push в ветку main или dev
        - 🏗️ GitHub Actions запускает workflow из .github/workflows/docker-ci.yml
        - 🐳 Для каждого компонента:
          - Сборка Docker-образа
          - Прогон тестов (если есть)
          - Логин в Docker Hub с использованием секретов
          - Push образа в Docker Hub с тегами (например: USERNAME/backend:latest)
        - 🚀 После успешной публикации можно:
          - Локально запускать с помощью docker-compose.yml
          - Развернуть в производственной среде с docker-compose.prod.yml

6. 🗂️ Описание файлов проекта
   Структура проекта организована по современным DevOps-практикам с разделением на сервисы и автоматизацией CI/CD.
   6.1. 📁 Backend (Flask API)
        - backend/app.py — основной код Flask-приложения. Содержит простой REST API по адресу /api, возвращающий JSON-ответ.
        - backend/requirements.txt — список Python-зависимостей. Используется при сборке Docker-образа.
        - backend/Dockerfile — инструкции сборки Docker-образа backend. Использует python:3.11-slim и настраивает сервер Flask.
        - backend/__init__.py (опционально) — файл инициализации Python-пакета (если структура усложняется).
        - backend/tests/ (опционально) — место для unit- или integration-тестов (если добавляете тесты позже).
   6.2. 📁 Frontend (Node.js/Express)
        - frontend/index.js — основной файл Node.js-сервера. Возвращает базовую страницу или сообщение.
        - frontend/package.json — файл зависимостей и метаинформации проекта.
        - frontend/package-lock.json — автоматически сгенерированный lock-файл для точной фиксации версий зависимостей.
        - frontend/Dockerfile — Docker-образ frontend-сервера, основанный на Node.js LTS образе.
        - frontend/public/ (опционально) — директория для статики, если потребуется.
        - frontend/tests/ (опционально) — директория для тестов фронтенда.
   6.3. 📁 Nginx (обратный прокси)
        - nginx/nginx.conf — основной конфигурационный файл nginx. Настроен для проксирования запросов на backend и frontend.
        - nginx/default.conf (опционально) — дополнительный файл, если потребуется расширенная маршрутизация или HTTPS.
   6.4. ⚙️ Инфраструктура и CI/CD
        - docker-compose.yml — файл описания всех сервисов для локальной разработки. Использует локальные образы, собираемые на месте.
        - docker-compose.prod.yml - файл описания для сервисов для производственной среды. Использует образы из Docker Hub.
        - .github/workflows/docker-ci.yml — GitHub Actions workflow. Выполняет CI: сборка, тесты, push образов в Docker Hub.
        - .dockerignore — файл, исключающий ненужные файлы из Docker-контекста при сборке.
        - .gitignore — исключает временные/служебные файлы из git-репозитория.
   6.5. 📝 Документация
        - README.md/README.md — документация на английском языке.
        - README.md/README.ru.md — документация на русском языке.

7. 🚀 Запуск и тестирование проекта
   7.1. 📦 Запуск локально через Docker Compose
        Для локальной разработки и тестирования выполните сборку и запуск всех сервисов с помощью команды:
        sudo docker compose up --build
        🔍 Что произойдёт:
        - Соберутся образы для backend и frontend из локальных Dockerfile
        - Поднимутся 3 контейнера: flask-api, node-frontend и nginx-proxy
        - nginx будет маршрутизировать запросы между frontend и backend
        💡 Убедитесь, что вы запускаете команду из корневой директории проекта, где находится docker-compose.yml.
   7.2. ✅ Проверка работы
        После запуска сервисов проверьте, что всё работает:
        http://localhost/api    Отдаёт JSON от Flask backend: {"message": "Hello from Flask"}
        http://localhost:3000	Node.js frontend напрямую (через порт)
        http://localhost	Доступ к frontend через nginx-прокси (порт 80)
   7.3. 🛑 Остановка контейнеров
        Чтобы корректно остановить и удалить все контейнеры, выполните:
        sudo docker compose down
        📌 Эта команда:
        - Остановит все сервисы
        - Удалит контейнеры (но не образы и тома)
   7.4. 🧼 Полная очистка (по желанию)
        Если вы хотите полностью очистить всё, включая образы, используйте:
        sudo docker compose down --rmi all
   7.5. 🛠 Устранение ошибок
        Если какой-то сервис не стартует:
        - Проверьте логи с помощью sudo docker compose logs или docker logs <имя_контейнера>
        - Убедитесь, что у вас нет конфликтующих портов на 80, 3000 или 5000
        - Убедитесь, что у вас актуальная версия Docker и достаточно ресурсов (особенно на Windows/Mac)

8. 🐳 Управление образами и Docker Hub
   8.1. Публикация образов
        Все образы проекта автоматически публикуются в ваш аккаунт на Docker Hub, если настроен CI/CD через GitHub Actions.
        📌 Каждый сервис имеет собственное имя и тег:
        - USERNAME/flask-api:latest — backend
        - USERNAME/node-frontend:latest — frontend
        - USERNAME/nginx-proxy:latest — nginx
        Теги можно задать вручную в docker build или в GitHub Actions. По умолчанию — latest.
   8.2. 📥 Загрузка образов с Docker Hub
        Если вы хотите загрузить образ вручную:
        sudo docker pull USERNAME/flask-api:latest
   8.3. 🗑 Удаление образов с локальной машины
        Чтобы освободить место и удалить ненужные образы:
        sudo docker rmi USERNAME/flask-api
        💡 Можно добавить флаг -f для принудительного удаления.
   8.4. 👀Просмотр образов
        Откройте https://hub.docker.com/u/USERNAME, чтобы увидеть:
        - все доступные образы;
        - теги;
        - дату последнего обновления.
   8.5. 🛠 Ручная сборка и загрузка (если нет CI)
        Можно собрать и отправить образ вручную:
        sudo docker build -t USERNAME/flask-api:latest .
        sudo docker login
        sudo docker push USERNAME/flask-api:latest
   8.6. 🧪 Ошибки при push/pull
        Если видите ошибки:
        - 🔐 Убедитесь, что выполнили docker login
        - ✅ Убедитесь, что у вас есть права на репозиторий на Docker Hub
        - ⚠️ Проверьте имя образа и тег: должно быть USERNAME/imagename[:tag]

9. ❓ Часто задаваемые вопросы и советы
   9.1. Почему мои образы не отображаются в Docker Hub?
        Проверьте, что:
        - 🔐 В Settings > Secrets на GitHub добавлены переменные DOCKER_USERNAME и DOCKER_PASSWORD (или DOCKER_TOKEN)
        - ✅ В CI-пайплайне выполняется docker login перед docker push
        - 📤 Вы пушите в правильный репозиторий: USERNAME/imagename
   9.2. Нужно ли указывать все файлы при git add?
        Нет. Достаточно одной команды:
        git add .
        Это добавит все изменения в текущей директории и вложенных папках.
   9.3. Образы Docker занимают много места?
        Да. Очистите ненужные образы, контейнеры и кеш:
        sudo docker system prune -a
        ⚠️ Будьте внимательны: команда удалит все неиспользуемые ресурсы.
   9.4. Как обновить образы на сервере?
        - Скачайте свежую версию образа:
          sudo docker pull USERNAME/flask-api:latest
        - Перезапустите контейнеры:
          sudo docker compose down && docker compose up -d
   9.5. Как убедиться, что образы действительно обновились?
        Проверьте хэш образа:
        sudo docker images | grep flask-api
        Или откройте docker-compose.yml и убедитесь, что используется image: с правильным тегом.
   9.6. Что делать, если docker-compose не найден?
        - Убедитесь, что используете Docker v20+ (в нём docker compose встроен)
        - В старых системах: установите docker-compose отдельно или используйте docker compose (без дефиса)
   9.7. Почему контейнер быстро завершает работу?
        - Проверьте логи:
          sudo docker logs <container_name>
        - Возможные причины:
          - ❌ Ошибки в коде (например, в app.py)
          - ⚠️ Отсутствие переменных окружения
          - 🚫 Порт уже занят
   9.8. Как остановить и удалить все контейнеры?
        sudo docker stop $(docker ps -q)
        sudo docker rm $(docker ps -aq)
        💡 Или одной командой:
        sudodocker container prune -f
   9.9. Как проверить, что Nginx правильно проксирует запросы?
        - Посмотрите логи Nginx:
          sudo docker logs nginx
        - Убедитесь, что в default.conf:
          - Прописаны правильные пути (location /api, location /)
          - Прокси-порт соответствует порту backend/frontend (http://backend:5000, http://frontend:3000)

10. 🚀 Рекомендации по развитию проекта
    - ✅ Добавить юнит-тесты и интеграционные тесты для backend и frontend
    - ✅ Внедрить статический анализ кода:
      - flake8 или pylint для Python
      - eslint для Node.js
    - ✅ Использовать многоэтапную сборку Docker (multi-stage builds) для уменьшения размера образов
    - ✅ Настроить деплой на сервер или в облако (например, Render, Railway, Kubernetes, AWS)
    - ✅ Добавить HTTPS и автоматические SSL-сертификаты с помощью Let's Encrypt (https://letsencrypt.org/)
    - ✅ Хранить секреты и конфигурации через .env файлы, GitHub Secrets, Docker Compose env_file

11. 📚 Глоссарий
    Docker - Платформа для упаковки приложений в изолированные контейнеры
    Docker Hub - Облачный реестр для хранения Docker-образов
    Docker Compose - Инструмент для запуска нескольких контейнеров вместе
    CI/CD - Непрерывная интеграция и доставка: автоматизация сборки, тестирования и развертывания
    Flask - Микрофреймворк на Python для создания API и веб-приложений
    Express.js - Минималистичный серверный фреймворк для Node.js
    Nginx - Веб-сервер, балансировщик нагрузки и обратный прокси
    GitHub Actions - Сервис автоматизации задач (CI/CD) на GitHub

12. 🔗 Контакты и ссылки
    Репозиторий проекта: https://github.com/Hackitect7/devops-docker-project
    Docker Hub: https://hub.docker.com/u/hackitect7
    Документация Docker: https://docs.docker.com/
    Документация GitHub Actions: https://docs.github.com/en/actions
    Документация Flask: https://flask.palletsprojects.com/
    Документация Express.js: https://expressjs.com/