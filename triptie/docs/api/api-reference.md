---
title: API Reference
sidebar_position: 2
---

# REST API Specification

<Redoc spec-url="/openapi.yaml" />

## Основные эндпоинты

### Поездки

#### Создание поездки
```http
POST /api/trips
Content-Type: application/json

{
  "city": "Москва",
  "startDate": "2026-05-15",
  "endDate": "2026-05-16",
  "budget": "5000-10000",
  "preferences": {
    "types": ["museums", "nature"],
    "food": "cafes"
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "status": "active"
}
```

#### Получение маршрута
```http
GET /api/trips/:id/route?day=1
```

#### Генерация маршрута
```http
POST /api/trips/:id/route
```

### Места

#### Поиск мест
```http
POST /api/places
Content-Type: application/json

{
  "city": "Москва",
  "preferences": ["museums", "cafes"]
}
```

### Карты

#### Конфигурация карты
```http
GET /api/maps/config?tripId={id}
```

---

## 📊 Полная спецификация

См. [OpenAPI Specification](./openapi.yaml)
```
