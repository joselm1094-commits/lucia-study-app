#!/usr/bin/env python3
"""
Genera vídeo promocional desde screenshots del HTML
"""

import subprocess
import os
from pathlib import Path

# Pantallas y duraciones (en frames a 30fps)
SCREENS = [
    ("screen-1", 3500),  # 105 frames
    ("screen-2", 3500),  # 105 frames
    ("screen-3", 3500),  # 105 frames
    ("screen-4", 3500),  # 105 frames
    ("screen-5", 4000),  # 120 frames
    ("screen-6", 4000),  # 120 frames
]

FPS = 30
PROJECT_DIR = Path(__file__).parent

def ms_to_frames(ms):
    """Convierte milisegundos a frames a 30fps"""
    return int(ms / 1000 * FPS)

def create_concat_file():
    """Crea archivo de concatenación para ffmpeg"""

    # Primero, tomar screenshots del HTML navegador
    html_file = PROJECT_DIR / "promo-video.html"
    frames_dir = PROJECT_DIR / "frames"
    frames_dir.mkdir(exist_ok=True)

    print("📸 Capturando pantallas del HTML...")

    # Crear archivo HTML que renderice cada screen
    for i, (screen_id, duration) in enumerate(SCREENS):
        frames_needed = ms_to_frames(duration)

        # Aquí iría la captura real del navegador
        # Por ahora, usamos ffmpeg para generar frames sólidos de demostración
        print(f"  → {screen_id}: {frames_needed} frames ({duration}ms)")

    # Crear archivo de concatenación
    concat_content = ""
    for i, (screen_id, duration) in enumerate(SCREENS):
        frames_needed = ms_to_frames(duration)
        # Generar frames duplicados (mismo frame, múltiples veces para duración)
        for frame_num in range(frames_needed):
            concat_content += f"file 'frame-{i}.png'\n"

    concat_file = PROJECT_DIR / "concat.txt"
    with open(concat_file, "w") as f:
        f.write(concat_content)

    print(f"✓ Archivo de concatenación creado: {concat_file}")
    return concat_file

def generate_video():
    """Genera el vídeo final"""

    print("\n🎬 Generando vídeo...")

    # Para demostración, creamos un vídeo con colores sólidos
    # En producción, usarías screenshots reales

    cmd = [
        "ffmpeg",
        "-f", "lavfi",
        "-i", f"color=c=purple:s=1080x1920:d=3.5",
        "-f", "lavfi",
        "-i", f"color=c=lightblue:s=1080x1920:d=3.5",
        "-f", "lavfi",
        "-i", f"color=c=lightyellow:s=1080x1920:d=3.5",
        "-f", "lavfi",
        "-i", f"color=c=lightgreen:s=1080x1920:d=3.5",
        "-f", "lavfi",
        "-i", f"color=c=purple:s=1080x1920:d=4",
        "-f", "lavfi",
        "-i", f"color=c=purple:s=1080x1920:d=4",
        "-filter_complex", "[0][1][2][3][4][5]concat=n=6:v=1[v]",
        "-map", "[v]",
        "-c:v", "libx264",
        "-crf", "23",
        "-y",
        str(PROJECT_DIR / "promo-lucia-final.mp4")
    ]

    print("Ejecutando ffmpeg...")
    print(" ".join(cmd))

if __name__ == "__main__":
    create_concat_file()
    print("\n✓ Preparación completada")
    print("\nNota: Para vídeo real, necesitas:")
    print("  1. Renderizar HTML a PNG con Puppeteer/Playwright")
    print("  2. O usar ffmpeg screen capture correctamente")
