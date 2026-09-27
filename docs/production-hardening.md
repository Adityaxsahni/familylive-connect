# Production hardening milestone

Added in this milestone:
- JWT access-token signing and verification
- Bearer-token authorization guard
- Protected family, location, messaging, and SOS routes
- Coordinate validation and self-location access enforcement
- Health endpoint at `GET /health`
- Safer CORS and global validation configuration
- Flutter mobile shell, Docker Compose, and CI from previous milestone remain available

Current limitation:
- The service still uses in-memory repositories. PostgreSQL, Redis, background location workers, push notifications, and provider integrations must be configured before production deployment.
- Location reads currently allow a user to read their own location only; family permission checks are the next database-backed authorization milestone.
