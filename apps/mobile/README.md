# FamilyLive Connect mobile client

## Run locally

```bash
flutter pub get
flutter run
```

The client currently provides a working mobile shell with:
- sign-in and registration screens
- secure token storage
- map-first home screen
- OpenStreetMap rendering
- current-location permission and centering
- live-sharing toggle UI
- premium dark visual system

Set `ApiClient.baseUrl` to the reachable backend address for a physical device. Android emulators generally use `10.0.2.2:3000`; iOS simulators can use `localhost:3000`.

## Production map provider

OpenStreetMap is used for development. Before production, configure Mapbox or Google Maps, review tile/provider terms, and move the API base URL into build-time environment configuration.
