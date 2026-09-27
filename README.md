# FamilyLive Connect

FamilyLive Connect is a production-ready architecture and starter implementation for a real-time family location sharing and communication platform.

This repository contains:
- an end-to-end system design and implementation blueprint
- an initial NestJS backend scaffold for auth, family, location, messaging, SOS, and map-related features
- a monorepo folder structure for the Flutter mobile app and future services

## Product overview

FamilyLive Connect allows users to:
- register and sign in securely
- create a unique user ID and complete their profile
- add family members by unique ID
- create family circles such as parents, siblings, relatives, and emergency contacts
- enable real-time GPS sharing with approved contacts
- view live family member locations on a map
- message, call, or trigger SOS workflows
- track route history and safe zones
- discover nearby attractions and AI-powered place summaries

## Repository structure

```text
familylive-connect/
  README.md
  package.json
  .gitignore
  docs/
    architecture.md
    system-design.md
  services/
    backend/
      src/
      package.json
      tsconfig.json
      tsconfig.build.json
      nest-cli.json
  apps/
    mobile/
      README.md
```

## Tech stack

- Flutter mobile app (planned)
- NestJS + TypeScript backend
- PostgreSQL for transactional data
- Redis for cache and realtime presence
- Kafka / NATS for event-driven workflows
- WebSockets for realtime updates
- Mapbox or Google Maps SDK for live map rendering
- Firebase Auth / Supabase Auth for identity
- Agora / Twilio for calls
- Firebase Cloud Messaging / OneSignal for notifications

## Backend quick start

```bash
cd services/backend
npm install
npm run start:dev
```

The API is available at `http://localhost:3000`.

## Included backend modules

- Auth
- Family / circle management
- Location tracking
- Messaging
- SOS / emergency flow
- Shared types and service contracts

## Architecture docs

See:
- `docs/architecture.md`
- `docs/system-design.md`

## Production roadmap

1. MVP: auth, profile, family connections, live location, map, chat, SOS
2. Real-time reliability: WebSockets, notifications, geofencing, calls
3. Media and engagement: voice notes, photos, moments
4. AI and discovery: nearby attractions and summaries
5. Global scale hardening: observability, autoscaling, disaster recovery

## License

MIT
