import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;

class ApiClient {
  ApiClient({this.baseUrl = 'http://localhost:3000/api/v1'});
  final String baseUrl;
  final _storage = const FlutterSecureStorage();

  Future<Map<String, dynamic>> login(String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'content-type': 'application/json'},
      body: jsonEncode({'email': email, 'password': password}),
    );
    return _decode(response);
  }

  Future<Map<String, dynamic>> register(String name, String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/register'),
      headers: {'content-type': 'application/json'},
      body: jsonEncode({'name': name, 'email': email, 'password': password}),
    );
    return _decode(response);
  }

  Future<void> saveToken(String token) => _storage.write(key: 'access_token', value: token);
  Future<String?> readToken() => _storage.read(key: 'access_token');

  Map<String, dynamic> _decode(http.Response response) {
    final data = jsonDecode(response.body) as Map<String, dynamic>;
    if (response.statusCode >= 400) throw Exception(data['message'] ?? 'Request failed');
    return data;
  }
}
