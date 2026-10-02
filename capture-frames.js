const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const FRAMES_DIR = path.join(__dirname, 'frames');

// Crear directorio para frames
if (!fs.existsSync(FRAMES_DIR)) {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

// Pantallas a capturar y duración
const SCREENS = [
  { index: 0, name: 'Bienvenida', frames: 105 },    // 3.5s a 30fps
  { index: 1, name: 'Flashcards', frames: 105 },
  { index: 2, name: 'Quiz', frames: 105 },
  { index: 3, name: 'Tema', frames: 105 },
  { index: 4, name: 'Progreso', frames: 120 },      // 4s a 30fps
  { index: 5, name: 'CTA Final', frames: 120 }
];

async function captureFrames() {
  console.log('🎬 Iniciando captura de frames...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--start-fullscreen']
  });

  const page = await browser.newPage();

  // Viewport móvil 9:16
  await page.setViewport({
    width: 540,
    height: 960,
    deviceScaleFactor: 2
  });

  // Cargar HTML local
  const htmlFile = path.join(__dirname, 'promo-video.html');
  await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle0' });

  let frameCounter = 0;

  for (const screen of SCREENS) {
    console.log(`📸 ${screen.name} (${screen.frames} frames)...`);

    // Mostrar pantalla específica
    await page.evaluate((index) => {
      const screens = document.querySelectorAll('.screen');
      screens.forEach(s => s.classList.remove('active'));
      if (screens[index]) {
        screens[index].classList.add('active');
      }
    }, screen.index);

    // Esperar animaciones
    await page.waitForTimeout(600);

    // Capturar frame base
    const baseScreenshot = await page.screenshot({
      fullPage: false,
      encoding: 'binary'
    });

    // Duplicar frame según duración
    for (let i = 0; i < screen.frames; i++) {
      const framePath = path.join(FRAMES_DIR, `frame-${String(frameCounter).padStart(6, '0')}.png`);
      fs.writeFileSync(framePath, baseScreenshot);
      frameCounter++;

      if (i % 20 === 0) {
        process.stdout.write('.');
      }
    }
    console.log(' ✓');
  }

  await browser.close();

  console.log(`\n✅ ${frameCounter} frames capturados en ${FRAMES_DIR}`);
  console.log(`\nPróximo paso: Compilar con ffmpeg...`);

  // Compilar frames en vídeo
  await compileVideo(frameCounter);
}

async function compileVideo(totalFrames) {
  const { execSync } = require('child_process');

  console.log('\n🎬 Compilando vídeo MP4...');

  const inputPattern = path.join(FRAMES_DIR, 'frame-%06d.png');
  const outputFile = path.join(__dirname, 'promo-lucia-final.mp4');

  const cmd = `ffmpeg -framerate 30 -pattern_type glob -i "${FRAMES_DIR}/frame-*.png" -c:v libx264 -crf 22 -preset fast -y "${outputFile}" 2>&1 | grep -E "(frame=|Lsize|speed)" | tail -5`;

  try {
    const output = execSync(cmd, { encoding: 'utf-8' });
    console.log(output);
    console.log(`\n✅ Vídeo generado: ${outputFile}`);

    // Verificar archivo
    const stats = fs.statSync(outputFile);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`📊 Tamaño: ${sizeMB} MB`);
  } catch (error) {
    console.error('Error compilando vídeo:', error.message);
  }
}

captureFrames().catch(console.error);
