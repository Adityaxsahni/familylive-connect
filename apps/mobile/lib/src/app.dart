import 'package:flutter/material.dart';
import 'features/auth/login_screen.dart';
import 'features/home/home_screen.dart';
import 'theme/app_theme.dart';

class FamilyLiveApp extends StatelessWidget {
  const FamilyLiveApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FamilyLive Connect',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.dark,
      home: const LoginScreen(),
      routes: {'/home': (_) => const HomeScreen()},
    );
  }
}
