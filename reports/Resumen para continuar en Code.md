# Resumen de la conversación para continuar en Claude Code

Fecha de corte: 20 de noviembre de 2026. Elecciones generales: 29 de noviembre de 2026 (convocadas por RD 806/2026 de 5 de octubre, según prensa; campaña del 13 al 27 de noviembre).
Repositorio: `/home/user/lucia-study-app`, rama `claude/spain-socioeconomic-analysis-ai9dcm`. Todo lo descrito abajo está commiteado y subido a esa rama. No se ha creado ninguna PR (no se ha pedido).

## 1. Quién es el usuario y qué quiere

- Vive en la provincia de **Alicante**. Es contrario al sistema de partidos y su primera inclinación era abstenerse.
- Está **100 % seguro de que no quiere que gobierne Pedro Sánchez**.
- Ha dicho que su bienestar socioeconómico y el bien del país están por encima de ese principio, y que estaría dispuesto a votar al PP si es la mejor opción.
- Criterios que ha ido dando, y que se usan para comparar: (1) economía y bienestar de los ciudadanos, (2) reducir al mínimo corrupción y malversación, (3) representación real del pueblo, al menos del interesado en política, (4) seguridad en las calles, unión patriótica y posición de poder del Estado, y (5) que no gobierne Sánchez (tratado como restricción aparte, no puntuado).
- Ideas del usuario sobre el sistema: revocatoria de cargos, doble vuelta, separación ejecutivo/legislativo, jueces no elegidos a dedo, fin de la financiación pública de partidos, voto por examen y gobierno de tecnócratas (inspirado en Atenas). Se le explicó que la Atenas real no exigía examen y que el voto por examen choca con el sufragio universal (arts. 23 y 68.1 CE).
- Pidió desde el principio un análisis neutral. **Reglas que se han seguido y deben mantenerse**: neutralidad política, no recomendar votar a nadie ni abstenerse, presunción de inocencia estricta, distinguir `[citado]`, `[inferencia]` y `[no verificado]`, y decir siempre qué no se pudo verificar.

## 2. Informes entregados (en `reports/`, con sus notas en `research_notes/`)

| Informe | Contenido |
|---|---|
| `Diagnóstico España y programas 29N.md` | Datos oficiales, análisis independiente, comparativa con países de renta alta, cuadro de variables a ajustar y cobertura de programas |
| `Verificación programas 29N y abstención.md` | Costes, lectura de programas PP y Vox, cumplimiento de promesas, efectos de abstenerse |
| `Mejor modelo político para España.md` | Síntesis histórica y modelo híbrido recomendado con tabla norma por norma |
| `Listas del PP y corrupción.md` | Cribado de antecedentes de los candidatos del PP (Alicante y nacional) |
| `Alvise Pérez y SALF.md` | Análisis exhaustivo de SALF y su líder |

Carpetas de notas: `research_notes/Diagnóstico España y programas 29N/`, `.../Verificación programas 29N y abstención/`, `.../Mejor modelo político para España/`, `.../Listas del PP y corrupción/` (incluye el texto oficial de las listas del PP), `.../Alvise Pérez y SALF/`.

## 3. Hallazgos clave por informe

### Diagnóstico de España
- PIB 3T26: +2,7 % interanual; productividad por puesto solo +1,1 %. IPC adelantado de octubre 4,9 %. Deuda de las AAPP ≈ 100 % del PIB. Déficit de 2025 entre 2,18 % y 2,4 % según la base.
- Paro EPA 10,18 % (Eurostat 10,3 %). Paro juvenil 23 %. AROPE 25,7 %, infantil 33,8 %. Fecundidad 1,10.
- Vivienda: déficit de unas 750.000 viviendas (Banco de España), ~92.000 terminadas frente a ~240.000 hogares nuevos en 2025. Es la palanca de mayor retorno identificada. El CIS la sitúa como primer problema.
- Seguridad: homicidios 0,7 por 100.000; tasa de criminalidad convencional 40,5 por 1.000 en el 1T26 (banda baja de la serie); sube el cibercrimen.
- Poder: España está entre los puestos 12 y 15 en PIB, gasto militar y presencia global. Gasto en defensa 1,28 % (OTAN 2025) frente a 2,1 % (Gobierno/SIPRI). Efectivos militares 116.739, por debajo del mínimo legal de 130.000.
- No hay estudio independiente de cumplimiento de promesas, ni valoración independiente de los programas.

### Verificación y abstención
- Ni PP ni Vox traen memoria económica ni proponen mochila austriaca. PP: 64 páginas, 8 de 249 medidas vacías. Vox: 55 páginas, sin tipos fiscales. Vox IRPF: 85.000 M€ según Hacienda (parte interesada); la cifra de 46.000 M€ citada antes no aparece en ninguna fuente.
- La AIReF avisa de un ajuste de ~15.000 M€ en 2027-28 (por prensa; su web no abría). Que choque con las rebajas del PP y Vox es inferencia nuestra.
- El PDF del PSOE (113 páginas) no se pudo descargar (bloqueo antirrobots); solo hay resúmenes de prensa.
- Cobertura de nueve variables (método propio, 0-18): PP 15, PSOE 13 (rango 10-15, provisional), Vox 12, Frente Amplio 9, Podemos 5. Diferencias de 2-3 puntos están dentro del ruido.
- Abstenerse: no hay sanción para el elector (sí para quien sale designado en mesa y no acude). La abstención no cuenta en D'Hondt ni en la barrera del 3 %. El voto en blanco es válido; el nulo no. Participación 2023: 66,59 % con CERA (70,4 % sin CERA fue la cifra de la noche electoral).
- Alicante 2023: 12 escaños (PP 5, PSOE 4, Vox 2, Sumar 1). Un voto individual casi nunca decide un escaño.
- Estado judicial verificado en prensa: Ábalos condenado a 24 años y 3 meses y Koldo a 19 años y 8 meses por el Supremo (22-jun-2026; firmeza no confirmada). Fiscal General García Ortiz condenado a 2 años de inhabilitación (20-nov-2025). Kitchen visto para sentencia sin fallo.

### Modelo político recomendado
- Híbrido: conservar monarquía parlamentaria y proporcionalidad, y añadir integridad blindada (controles independientes, auditoría aleatoria, lobbies, contratación, estatuto de la Fiscalía), listas desbloqueadas, financiación de partidos condicionada a auditoría y asambleas ciudadanas por sorteo con obligación de respuesta.
- Rechaza tecnocracia, epistocracia, presidencialismo, mayoritario y revocatoria generalizada.
- Tabla de 27 normas: qué mayoría exige cada cambio (ley orgánica de 176, art. 167 con 3/5 = 210 diputados, o art. 168). Ya se puede hacer por ley orgánica: elección de los 12 vocales judiciales por jueces (art. 122.3), listas desbloqueadas, límites de donaciones (tope vigente de 50.000 €).
- Datos de apoyo: calidad regulatoria WGI 0,56 (Alemania 1,35); primera instancia civil 444 días frente a 247 de mediana UE; GRECO: 16 recomendaciones parcialmente aplicadas y 3 no; informe de Estado de derecho de la Comisión del 17-jul-2026: sin mejora práctica.
- Reformas constitucionales verificadas: 1992, 2011, 2024; una cuarta de mayo de 2026 sobre el art. 69.3 no verificada en su tramitación.
- Ningún partido propone el paquete de representación.

### Listas del PP y corrupción
- PDF oficial: unos 940 nombres (titulares y suplentes); se cribaron ~150-160 nombres únicos. No hay cifra total posible. "Nada hallado" no significa "limpio".
- Resultado: 0 condenados firmes (A), 0 condenados no firmes (B), 1 con juicio oral abierto (C: Vicent Marí Bosó, Baleares nº 1), 6 investigados/diligencias (D: Catalá, Carnero, César Sánchez, Albiol —no corrupción económica—, Aznar Teruel, Bravo), 8 archivados/absueltos (E), 14 testigos/entorno (F).
- Catalá y Carnero: diligencias de la Fiscalía abiertas en 2026, no imputación judicial.
- Alicante (24 nombres): solo César Sánchez (nº 2 al Congreso, presidente de la Diputación) consta como investigado, por la causa de Calp (reabierta en 2018, declaró el 12-jul-2018); su desenlace **no se ha podido verificar**. Los 9 suplentes no se cribaron de verdad.
- El PP como partido: condenado civilmente como partícipe a título lucrativo (Gürtel) y como responsable civil subsidiario (Bárcenas/Génova, 2024). No hay condena penal por los discos duros.

### Alvise Pérez y SALF
- Alvise Pérez: Sevilla, 1990; militó en UPyD y Ciudadanos; eurodiputado desde 2024; único eurodiputado de SALF desde mayo de 2025 (la eurodiputada es Nora Junco, no "Juan").
- Programa: sí hay "Contrato Electoral Simplificado. Generales 2026" (42 páginas, 111 medidas por conteo propio frente a 119 que cita la web). Corrige una afirmación anterior. Rebaja fiscal de ≈80.000 M€ frente a un ahorro "identificado" de 83.800 M€, de los que 57.000 M€ son "sobrecoste autonómico" sin método. Varias medidas chocan con la CE, la UE o el derecho internacional (valoración propia).
- Listas: 46 circunscripciones al Congreso, ninguna al Senado (BOE nº 273, 3-nov-2026). Alicante: Casimiro Martín Soto (nº 1), Amparo Cervantes Carbonell (nº 2), Moisés Alcázar Fernández (nº 3). Antecedentes solo buscados para 9 de 46 cabezas de lista.
- Causas: Supremo investiga financiación ilegal (100.000 € en efectivo de Álvaro Romillo), con inmunidad levantada el 19-may-2026; otras causas abiertas; PCR de Illa archivada el 5-nov-2026. Condenas civiles firmes: Pastor (7.000 €) y jefe de Policía de Canarias (10.000 €); otras sin firmeza verificada.
- Parlamento Europeo: participó en el 61 % de las votaciones nominales (445 de 729).
- Viabilidad: Alicante exigiría ≈65.834 votos nuevos (≈7,35 % del voto válido de 2023); Madrid ≈110.232 por la barrera del 3 %. Encuestas 1,6-2,4 %, casi todas con cero escaños.

## 4. Comparación final (puntuación propia 0-4, criterios del usuario)

| | Economía | Integridad | Representación | Seguridad/cohesión | Credibilidad | Total |
|---|---|---|---|---|---|---|
| PP | 3 | 2 | 1 | 2 | 2 | 10 |
| PSOE | 2 | 1 | 1 | 2 | 2 | 8 |
| Vox | 2 | 1 | 1 | 1 | 1 | 6 |
| Frente Amplio | 1 | 1 | 1 | 1 | 1 | 5 |
| SALF | 1 | 1 | 1 | 1 | 0 | 4 |
| Podemos | 1 | 1 | 1 | 0 | 0 | 3 |

- El PP queda primero también si se duplican integridad y representación (13 frente a 10 del PSOE), pero **ningún partido sirve bien esos dos criterios**.
- Es juicio mío, no una medición; el margen es estrecho. No es una recomendación de voto.
- Condiciones que podrían cambiarlo: rebajas del PP sin financiación; programa del PSOE sin leer entero; desenlace de la causa de César Sánchez; cribado incompleto.
- Partidos territoriales (ERC, Junts, PNV, Bildu, BNG, CC, UPN-PP) no se puntuaron. En Alicante concurre además Compromís-Front Valencià (en coalición con Podemos, según una nota; sin verificar).

## 5. Cómo se trabajó y limitaciones

- Cada informe: skill `deep-research`, con investigadores en paralelo que escriben en `research_notes/<título>/` y un redactor que escribe `reports/<título>.md`. Una ronda extra de investigación por tema como máximo.
- La mayoría de las fuentes son resúmenes de buscador o prensa. Muchas webs dieron 403 (Newtral, Democrata, Interior, airef.es, Fedea, CENDOJ casi siempre inaccesible). Wikipedia solo como pista. Cifras de 2023 pueden ser provisionales frente a finales.
- Discrepancias documentadas: gasto en defensa (1,28 % frente a 2,1 %), paro (10,18 % frente a 10,3 %), déficit de vivienda (370.000 a 922.000), registro estatal de lobbies (fuentes contradictorias), número de medidas de SALF (111 frente a 119), cociente de Alicante en El Español (71.606) frente al cálculo propio.

## 6. Pendientes sugeridos

1. Leer el PDF completo del PSOE (descargarlo desde un navegador y dejarlo en el repo) y volver a puntuar.
2. Consultar CENDOJ y la hemeroteca regional (Información, Alicante Plaza) por la causa de César Sánchez en Calp (2018-2020).
3. Cribar antecedentes de los candidatos de PSOE, Vox, Frente Amplio y de los otros 37 cabezas de lista de SALF, y de los nombres sin cribar del PP.
4. Obtener resultados oficiales de Interior (provincia por provincia, 2023 y 2024) y repetir los cálculos de escaños de Alicante con datos finales.
5. Comprobar qué listas concurren exactamente en Alicante (BOE núm. 273 del 3-nov-2026).
6. Recalcular la comparación con pesos que elija el usuario.
7. Verificar la web oficial de SALF y el "contrato completo".

## 7. Notas operativas

- Un hook de parada exige commitear y subir los archivos sin seguimiento en cada turno. Los commits llevan los trailers `Co-Authored-By` y `Claude-Session` indicados por el sistema.
- No crear PR salvo petición explícita. Rama de trabajo: `claude/spain-socioeconomic-analysis-ai9dcm`.
- Los scripts de los cálculos de escaños están en la carpeta de scratchpad de la sesión anterior (`.../scratchpad/scripts/`), que puede no existir ya; los resultados están en `research_notes/Alvise Pérez y SALF/viabilidad_electoral.md`.
