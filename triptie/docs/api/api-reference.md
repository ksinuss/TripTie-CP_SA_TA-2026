---
title: REST API Reference
sidebar_position: 2
---

# REST API Specification

Интерактивная документация с примерами запросов доступна ниже.

<Redoc spec-url="/triptie-docs/docs/api/openapi.yaml" />

---

## 🚀 Быстрый старт

### 1. Создайте поездку
```bash
curl -X POST https://api.triptie.app/v1/trips \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "city": "Санкт-Петербург",
    "startDate": "2025-07-10",
    "endDate": "2025-07-12",
    "preferences": {
      "tripPreferences": ["museums", "nature"],
      "foodPreference": "cafe"
    }
  }'
```

### 2. Сгенерируйте маршрут
```bash
curl -X POST https://api.triptie.app/v1/trips/{tripId}/route \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 3. Получите маршрут по дням
```bash
curl -X GET "https://api.triptie.app/v1/trips/{tripId}/route?day=1" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 📋 Основные эндпоинты

| Метод | Путь | Описание |
|-------|------|----------|
| `POST` | `/auth/login` | Вход, получение JWT |
| `GET` | `/trips` | Список поездок пользователя |
| `POST` | `/trips` | Создание новой поездки |
| `GET` | `/trips/{id}` | Детали поездки |
| `POST` | `/trips/{id}/route` | Запрос генерации маршрута |
| `GET` | `/trips/{id}/route` | Получение сгенерированного маршрута |
| `PATCH` | `/trips/{id}/route` | Ручное редактирование маршрута |
| `GET` | `/places/{id}` | Детали места (из кэша) |

## 🔄 Пагинация и фильтрация

Для списковых эндпоинтов поддерживаются параметры:
- `?page=1&limit=20` — пагинация
- `?status=active` — фильтрация по статусу поездки

Ответ включает метаданные:
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 42,
    "pages": 3
  }
}
```