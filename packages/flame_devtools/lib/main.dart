import 'package:devtools_extensions/devtools_extensions.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const FlameDevTools());
}

class FlameDevTools extends StatelessWidget {
  const FlameDevTools({super.key});

  @override
  Widget build(BuildContext context) {
    return const DevToolsExtension(
      child: Text(
        'Flame DevTools Extension',
      ),
    );
  }
}
