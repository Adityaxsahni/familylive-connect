import 'package:flutter/material.dart';
import '../../core/api_client.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});
  @override State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final email = TextEditingController();
  final password = TextEditingController();
  final name = TextEditingController();
  final api = ApiClient();
  bool register = false, busy = false;

  Future<void> submit() async {
    setState(() => busy = true);
    try {
      final result = register
          ? await api.register(name.text.trim(), email.text.trim(), password.text)
          : await api.login(email.text.trim(), password.text);
      await api.saveToken(result['accessToken'] as String);
      if (mounted) Navigator.pushReplacementNamed(context, '/home');
    } catch (error) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$error')));
    } finally { if (mounted) setState(() => busy = false); }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    body: SafeArea(child: Padding(
      padding: const EdgeInsets.all(28),
      child: Center(child: SingleChildScrollView(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Icon(Icons.hub_rounded, size: 52, color: Color(0xFFB7F397)),
        const SizedBox(height: 28),
        Text(register ? 'Create your family space' : 'Welcome back', style: Theme.of(context).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800)),
        const SizedBox(height: 8),
        Text(register ? 'Connect the people who matter most.' : 'Stay close, wherever life takes you.', style: const TextStyle(color: Colors.white60)),
        const SizedBox(height: 32),
        if (register) ...[TextField(controller: name, decoration: const InputDecoration(labelText: 'Full name')), const SizedBox(height: 14)],
        TextField(controller: email, keyboardType: TextInputType.emailAddress, decoration: const InputDecoration(labelText: 'Email')),
        const SizedBox(height: 14),
        TextField(controller: password, obscureText: true, decoration: const InputDecoration(labelText: 'Password')),
        const SizedBox(height: 24),
        SizedBox(width: double.infinity, height: 54, child: FilledButton(onPressed: busy ? null : submit, child: busy ? const CircularProgressIndicator() : Text(register ? 'Create account' : 'Sign in'))),
        const SizedBox(height: 16),
        Center(child: TextButton(onPressed: () => setState(() => register = !register), child: Text(register ? 'Already have an account? Sign in' : 'New here? Create an account'))),
      ]))),
    )),
  );
}
