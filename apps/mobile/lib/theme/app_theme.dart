import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get dark => ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: const Color(0xFF0B0D12),
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFFB7F397),
      brightness: Brightness.dark,
      surface: const Color(0xFF151922),
    ),
    useMaterial3: true,
    fontFamily: 'Inter',
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: const Color(0xFF171B25),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
      enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
      focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Color(0xFFB7F397))),
    ),
    cardTheme: CardThemeData(
      color: const Color(0xFF151922),
      elevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
    ),
  );
}
