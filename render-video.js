const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FRAMES_DIR = path.join(__dirname, 'frames-playstore');
const OUTPUT_VIDEO = path.join(__dirname, 'PLAYSTORE_FINAL.mp4');

// Pantallas y duraciones (ms)
const SCREENS = [
    { id: '1', duration: 3500, name: 'Dashboard' },
    { id: '2', duration: 3500, name: 'Flashcards' },
    { id: '3', duration: 3500, name: 'Quiz' },
    { id: '4', duration: 3500, name: 'Progreso' },
    { id: '5', duration: 4000, name: 'Notificación' }
];

const FPS = 30;

async function renderScreens() {
    console.log('🎮 Inicializando Puppeteer...\n');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox']
    });

    // Crear directorio
    if (fs.existsSync(FRAMES_DIR)) {
        fs.rmSync(FRAMES_DIR, { recursive: true });
    }
    fs.mkdirSync(FRAMES_DIR, { recursive: true });

    const page = await browser.newPage();

    // Viewport móvil exacto
    await page.setViewport({
        width: 360,
        height: 800,
        deviceScaleFactor: 2
    });

    const htmlFile = path.join(__dirname, 'playstore-promo.html');
    await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle0' });

    console.log('📸 Capturando pantallas...\n');

    let frameNumber = 0;

    for (const screen of SCREENS) {
        console.log(`  Screen ${screen.id}: ${screen.name} (${screen.duration}ms)...`);

        // Mostrar pantalla
        await page.evaluate((screenId) => {
            const screens = document.querySelectorAll('.screen-' + screenId);
            if (screens.length > 0) {
                screens[0].style.display = 'flex';
            }
        }, screen.id);

        // Esperar animaciones
        await new Promise(resolve => setTimeout(resolve, 600));

        // Capturar screenshot
        const screenshot = await page.screenshot({
            fullPage: false,
            encoding: 'binary'
        });

        // Calcular frames necesarios para la duración
        const framesToCapture = Math.ceil(screen.duration / (1000 / FPS));

        // Duplicar el frame para la duración especificada
        for (let i = 0; i < framesToCapture; i++) {
            const framePath = path.join(FRAMES_DIR, `frame-${String(frameNumber).padStart(6, '0')}.png`);
            fs.writeFileSync(framePath, screenshot);
            frameNumber++;

            if (i % 10 === 0) {
                process.stdout.write('.');
            }
        }
        console.log(' ✓');
    }

    await browser.close();

    console.log(`\n✅ ${frameNumber} frames capturados\n`);

    // Compilar vídeo
    await compileVideo(frameNumber);
}

async function compileVideo(totalFrames) {
    console.log('🎬 Compilando vídeo con ffmpeg...\n');

    const inputPattern = path.join(FRAMES_DIR, 'frame-%06d.png');

    try {
        const cmd = `ffmpeg -framerate ${FPS} -i "${inputPattern}" -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p -y "${OUTPUT_VIDEO}"`;

        console.log('Compilando...');
        execSync(cmd, { stdio: 'ignore' });

        // Verificar tamaño
        const stats = fs.statSync(OUTPUT_VIDEO);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        const sizeKB = (stats.size / 1024).toFixed(0);

        console.log(`\n✅ Vídeo generado exitosamente`);
        console.log(`📊 Tamaño: ${sizeKB} KB (${sizeMB} MB)`);
        console.log(`📹 Duración: ~20 segundos`);
        console.log(`📂 Archivo: ${OUTPUT_VIDEO}\n`);

        // Limpiar frames
        console.log('🧹 Limpiando frames temporales...');
        fs.rmSync(FRAMES_DIR, { recursive: true });
        console.log('✓ Hecho\n');

    } catch (error) {
        console.error('❌ Error compilando vídeo:', error.message);
        process.exit(1);
    }
}

renderScreens().catch(console.error);
