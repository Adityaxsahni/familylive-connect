# Implementation status

## Completed foundation
- NestJS API modules for auth, family, location, realtime, chat, and SOS
- Flutter client shell with map-first experience
- Registration/login UI and secure token storage
- GPS permission and current-location centering
- Development WebSocket event gateway
- PostgreSQL schema draft
- Docker Compose development services
- GitHub Actions CI for backend and Flutter analysis

## Required before production
- Replace in-memory services with PostgreSQL repositories and migrations
- Add JWT verification guards and refresh-token rotation
- Add Redis adapter for multi-instance WebSockets
- Add authorization checks to every location/message endpoint
- Configure a licensed production map provider
- Implement background location permissions for iOS and Android
- Integrate FCM, object storage, calls, geofencing workers, and AI places service
- Add integration, security, load, and mobile-device tests
- Configure secrets, backups, observability, rate limits, and incident runbooks
