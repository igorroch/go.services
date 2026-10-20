# Go Services

Стартовый проект с двумя Go-сервисами: `web` раздаёт веб-интерфейс на HTML/CSS/JavaScript, а `server` предоставляет HTTP API. Статические файлы интерфейса встраиваются в исполняемый файл веб-сервиса. Для запуска и сборки используется Docker Compose — устанавливать Go на хост не нужно.

## Запуск

Требуется Docker с поддержкой Compose.

```sh
docker compose up --build
```

Откройте [http://localhost:8080](http://localhost:8080). API доступен на [http://localhost:8081/api/health](http://localhost:8081/api/health).

Порты хоста настраиваются отдельно через `WEB_PORT` и `API_PORT`:

```powershell
$env:WEB_PORT = "3000"
$env:API_PORT = "3001"
docker compose up --build
```

Остановить сервис можно сочетанием `Ctrl+C`, либо командой `docker compose down`.

## API

- `GET /api/health` — проверка состояния, ответ: `{"status":"ok"}`.

## Структура

- `docker/web` и `docker/server` — сборка контейнеров веб-сервиса и API.
- `compose.yaml` — сборка и запуск обоих сервисов.
- `cmd/web` и `cmd/server` — точки входа приложений.
- `internal/web` — веб-обработчик и статические файлы.
- `internal/server` — HTTP API и тесты.
- `internal/web/static` — веб-интерфейс, встраиваемый в приложение.
