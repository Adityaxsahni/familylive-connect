import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import 'package:geolocator/geolocator.dart';

class HomeScreen extends StatefulWidget { const HomeScreen({super.key}); @override State<HomeScreen> createState() => _HomeScreenState(); }
class _HomeScreenState extends State<HomeScreen> {
  int tab = 0; LatLng center = const LatLng(28.6139, 77.2090); bool sharing = false;
  Future<void> locate() async {
    if (!await Geolocator.isLocationServiceEnabled()) return;
    var permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) permission = await Geolocator.requestPermission();
    if (permission == LocationPermission.denied || permission == LocationPermission.deniedForever) return;
    final p = await Geolocator.getCurrentPosition(); setState(() => center = LatLng(p.latitude, p.longitude));
  }
  @override Widget build(BuildContext context) => Scaffold(
    body: Stack(children: [
      FlutterMap(options: MapOptions(initialCenter: center, initialZoom: 13), children: [
        TileLayer(urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', userAgentPackageName: 'com.familylive.connect'),
        MarkerLayer(markers: [Marker(point: center, width: 64, height: 64, child: CircleAvatar(backgroundColor: const Color(0xFFB7F397), child: const Icon(Icons.person, color: Colors.black)))])
      ]),
      SafeArea(child: Padding(padding: const EdgeInsets.all(18), child: Column(children: [
        Row(children: [Expanded(child: Container padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14), decoration: BoxDecoration(color: const Color(0xEE151922), borderRadius: BorderRadius.circular(18)), child: const Row(children: [Icon(Icons.search), SizedBox(width: 10), Text('Search family or places')])), const SizedBox(width: 10), CircleAvatar(backgroundColor: const Color(0xFFB7F397), child: IconButton(onPressed: () {}, icon: const Icon(Icons.notifications_none, color: Colors.black))) ]),
        const Spacer(),
        Align(alignment: Alignment.centerRight, child: FloatingActionButton(onPressed: locate, backgroundColor: Colors.white, foregroundColor: Colors.black, child: const Icon(Icons.my_location))),
        const SizedBox(height: 14),
        Container(padding: const EdgeInsets.all(18), decoration: BoxDecoration(color: const Color(0xF2151922), borderRadius: BorderRadius.circular(26)), child: Row(children: [const CircleAvatar(backgroundColor: Color(0xFFB7F397), child: Icon(Icons.person, color: Colors.black)), const SizedBox(width: 12), const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('You', style: TextStyle(fontWeight: FontWeight.bold)), Text('New Delhi · Live location', style: TextStyle(color: Colors.white60))])), Switch(value: sharing, onChanged: (v) => setState(() => sharing = v))])),
        const SizedBox(height: 12),
        NavigationBar(selectedIndex: tab, onDestinationSelected: (i) => setState(() => tab = i), destinations: const [NavigationDestination(icon: Icon(Icons.map_outlined), label: 'Map'), NavigationDestination(icon: Icon(Icons.people_outline), label: 'Family'), NavigationDestination(icon: Icon(Icons.chat_bubble_outline), label: 'Chat'), NavigationDestination(icon: Icon(Icons.shield_outlined), label: 'SOS')]),
      ])))
    ]),
  );
}
