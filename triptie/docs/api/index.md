---
title: API Overview
sidebar_position: 1
---

# API TripTie — обзор

## Базовая информация

| Параметр | Значение |
|----------|----------|
| **Базовый URL** | `https://api.triptie.app/v1` (prod) |
| **Аутентификация** | Bearer JWT в заголовке `Authorization` |
| **Формат** | JSON (UTF-8) |
| **Версионирование** | Через URL: `/v1/...` |
| **Лимиты** | 100 запросов/мин на пользователя (настраивается) |

## Аутентификация

### Получение токена
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "******"
}
```

### Использование токена
```http
GET /trips
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### Ответы при ошибках авторизации
| Код | Описание |
|-----|----------|
| 401 | Токен отсутствует или истёк |
| 403 | Токен валиден, но нет прав на ресурс |

## Формат ошибок

```json
{
  "error": {
    "code": "AA-1B",
    "message": "Некорректные параметры запроса",
    "details": {
      "field": "endDate",
      "reason": "Дата окончания не может быть раньше даты начала"
    }
  }
}
```
