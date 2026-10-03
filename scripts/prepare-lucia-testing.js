#!/usr/bin/env node

/**
 * Prepare testing environment for Lucia
 * Generates test link + instructions
 *
 * Usage: node scripts/prepare-lucia-testing.js
 */

const fs = require('fs');
const path = require('path');

const LUCIA_TEST_CONFIG = {
  testDate: '2026-10-05', // Miércoles
  testLink: 'https://yuna-study.vercel.app',
  alternateLink: 'http://localhost:3000',
  testDuration: '2 horas',
  feedback: {
    email: 'joselm1094@gmail.com',
    topics: [
      'Usabilidad general',
      'Claridad de instrucciones',
      'Racha & XP visibility',
      'Quiz dificultad',
      'Notificaciones',
      'Errores o crashes',
      'Sugerencias de mejora'
    ]
  },
  qaChecklist: [
    '✓ App carga sin errores',
    '✓ Quiz funciona completamente',
    '✓ Racha se visualiza (🔥)',
    '✓ XP se incrementa correctamente',
    '✓ Explicaciones aparecen después de responder',
    '✓ Botones funcionan correctamente',
    '✓ Diseño responsive en móvil',
    '✓ Sin crashes o errores en consola',
  ],
  schedule: {
    'Miércoles 5-OCT 10:00': 'Primera sesión de testing (45 min)',
    'Miércoles 5-OCT 15:00': 'Segunda sesión + feedback (45 min)',
    'Jueves 6-OCT 10:00': 'Mejoras implementadas',
    'Viernes 7-OCT 12:00': 'Producción en vivo',
  }
};

console.log('📊 LUCIA TESTING - SETUP REPORT');
console.log('================================\n');

console.log('📅 Testing Schedule:');
Object.entries(LUCIA_TEST_CONFIG.schedule).forEach(([time, activity]) => {
  console.log(`  ${time}: ${activity}`);
});

console.log('\n🔗 Test Links:');
console.log(`  Production:  ${LUCIA_TEST_CONFIG.testLink}`);
console.log(`  Local:       ${LUCIA_TEST_CONFIG.alternateLink}`);

console.log('\n✅ QA Checklist:');
LUCIA_TEST_CONFIG.qaChecklist.forEach(item => {
  console.log(`  ${item}`);
});

console.log('\n📝 Feedback Topics:');
LUCIA_TEST_CONFIG.feedback.topics.forEach(topic => {
  console.log(`  • ${topic}`);
});

console.log('\n📧 Report to:');
console.log(`  ${LUCIA_TEST_CONFIG.feedback.email}`);

console.log('\n💡 Notes:');
console.log('  • 10 preguntas de Constitución Española');
console.log('  • Racha tracker + XP counter');
console.log('  • Notificaciones push integradas');
console.log('  • Sin datos remotos (localStorage local)');
console.log('  • Monitoring automático via Sentry + Posthog');

// Generate testing instructions file
const instructions = `# 🎓 Lucia Testing Instructions

## Link
${LUCIA_TEST_CONFIG.testLink}

## Schedule
- **Miércoles 5-OCT 10:00-10:45:** Primera sesión
- **Miércoles 5-OCT 15:00-15:45:** Segunda sesión
- **Jueves 6-OCT:** Mejoras implementadas
- **Viernes 7-OCT:** En producción

## QA Checklist
${LUCIA_TEST_CONFIG.qaChecklist.map(item => `- ${item}`).join('\n')}

## Feedback Topics
${LUCIA_TEST_CONFIG.feedback.topics.map(t => `- ${t}`).join('\n')}

## Notes
- Aplicación completamente nueva (Yuna - Estudio Inteligente)
- MVP phase (features básicos solamente)
- Datos almacenados localmente en tu dispositivo
- Notificaciones push a las 08:00 AM y 23:50 PM
- No es necesario login

## Contact
${LUCIA_TEST_CONFIG.feedback.email}

---
Generated: ${new Date().toISOString()}
`;

const outputPath = path.join(__dirname, '..', 'LUCIA_TESTING.md');
fs.writeFileSync(outputPath, instructions);

console.log('\n✅ Testing instructions saved to: LUCIA_TESTING.md');
console.log('\n🚀 Ready for Lucia testing!');
