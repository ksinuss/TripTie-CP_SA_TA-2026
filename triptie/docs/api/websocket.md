---
title: WebSocket API
sidebar_position: 3
---

# WebSocket API для совместного редактирования

## 🌐 Подключение

```
wss://api.triptie.app/v1/ws?tripId={UUID}&token={JWT}
```

### Параметры
| Параметр | Обязательный | Описание |
|----------|--------------|----------|
| `tripId` | Да | UUID поездки, к которой подключается пользователь |
| `token` | Да | JWT-токен авторизации (проверяется при соединении) |

## 📡 Формат сообщений

### От клиента → сервер
```json
{
  "type": "route:change",
  "requestId": "uuid",
  "action": "added|removed|reordered|dayRegenerated",
  "payload": {
    // детали изменения, зависят от action
  },
  "expectedVersion": 41
}
```

### От сервера → клиенты
```json
{
  "type": "route:updated",
  "requestId": "uuid",
  "confirmed": true,
  "version": 42,
  "changes": { ... },
  "activeUsers": [
    { "userId": "uuid", "status": "editing", "lastSeen": "2025-05-03T10:00:00Z" }
  ]
}
```

## 🔁 Типы действий

| Action | Описание | Пример payload |
|--------|----------|----------------|
| `added` | Добавлена новая локация | `{ "placeId": "uuid", "day": 1, "order": 3 }` |
| `removed` | Удалена локация | `{ "locationId": "uuid" }` |
| `reordered` | Изменён порядок | `{ "locationId": "uuid", "newOrder": 2, "day": 1 }` |
| `dayRegenerated` | Перегенерирован день | `{ "day": 1, "reason": "user_request" }` |

## 🔄 Обработка ошибок

| Код | Описание | Действие клиента |
|-----|----------|-----------------|
| `WS-001` | Неверный токен | Перенаправить на логин |
| `WS-002` | Поездка не найдена | Закрыть соединение, показать ошибку |
| `WS-003` | Конфликт версий | Запросить актуальное состояние и перерисовать |

## 📄 AsyncAPI-спецификация

Полная спецификация в формате AsyncAPI 3.0: [asyncapi.yaml](/triptie/docs/api/asyncapi.yaml)