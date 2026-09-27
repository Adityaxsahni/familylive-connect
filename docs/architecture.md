# FamilyLive Connect Architecture

## 1. Product architecture

FamilyLive Connect is a real-time family safety and communication platform with a strong emphasis on:
- user identity and access control
- family connections and circles
- GPS-based live sharing
- map rendering with profile markers
- messaging and call features
- emergency SOS and geofencing
- nearby place discovery and AI summaries

## 2. Core components

### Mobile client
- Flutter app for Android and iOS
- Map integration via Mapbox or Google Maps
- Background GPS tracking with permission control
- WebSocket-based live updates
- Push notifications
- Local cache for offline messages and recent locations

### API layer
- NestJS services for auth, users, family, messaging, location, calls, media, notifications, and SOS
- REST endpoints for stateful operations
- WebSocket gateways for realtime communication

### Data layer
- PostgreSQL for durable relational data
- Redis for realtime state, caches, and pub/sub
- Object storage for media files and avatars
- Kafka/NATS for async event processing

### Observability
- OpenTelemetry
- Prometheus
- Grafana
- structured logs and alerting

## 3. High-level topology

```text
Mobile App
   |--> API Gateway
          |--> Auth Service
          |--> User Service
          |--> Family Service
          |--> Location Service
          |--> Realtime Service
          |--> Messaging Service
          |--> SOS Service
          |--> Call Service
          |--> AI Recommendation Service

         +--> PostgreSQL
         +--> Redis
         +--> Kafka / NATS
         +--> Object Storage
         +--> Push Notification Provider
```

## 4. Functional domains

### Auth and profile domain
- user registration
- login and refresh tokens
- profile creation and ID generation
- privacy preferences

### Family domain
- add family members by unique ID
- circle creation and membership management
- approval workflow
- emergency contact assignment

### Location domain
- current GPS updates
- route history storage
- latest location cache
- privacy-controlled visibility

### Realtime domain
- websocket presence tracking
- fan-out of live location updates
- messaging event propagation
- call signaling

### Safety domain
- geofence detection
- SOS triggers
- emergency contact broadcast

### AI domain
- place summary generation
- recommendation engine
- local attractions and travel suggestions

## 5. Important design principles

- privacy by default
- minimal data exposure to unauthorized users
- permissioned family access only
- async processing for non-blocking tasks
- latest-location caching in Redis for low latency
- event-driven pipelines for notifications and downstream actions

## 6. Recommended production stack

- Flutter
- NestJS
- Postgres
- Redis
- Kafka/NATS
- Mapbox
- Firebase Cloud Messaging
- Agora/Twilio
- S3 / Firebase Storage
- Docker + Kubernetes
