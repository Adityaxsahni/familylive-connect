# FamilyLive Connect Mobile

This folder is reserved for the Flutter mobile client.

Recommended app architecture:
- app/
- core/
- features/
  - auth/
  - profile/
  - family/
  - map/
  - chat/
  - calls/
  - sos/
  - settings/

## Suggested Flutter stack

- Flutter
- Riverpod or Bloc
- Mapbox or Google Maps
- Firebase Cloud Messaging
- WebSocket client
- local caching with Hive or SQLite

## Typical app flow

1. Register or sign in
2. Create a profile and unique user ID
3. Add family members
4. Authorize location sharing
5. View live markers on the map
6. Open contact detail sheet
7. Message, call, or trigger SOS
8. Browse nearby attractions
