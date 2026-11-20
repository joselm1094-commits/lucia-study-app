# Viabilidad electoral de Se Acabó la Fiesta (SALF) en las generales del 29N de 2026, con foco en Alicante (datos a 20-nov-2026)

Convenciones: "Dato citado" lleva enlace; "Cálculo propio" lo marco como tal. Scripts de cálculo: `/tmp/claude-0/-home-user-lucia-study-app/54b369fb-1327-5fa6-a42a-f56c36e4550e/scratchpad/scripts/` (`prov.py`, `calc.py`, `scen.py`; salidas `calc_out.txt`, `scen_out.txt`). Limitaciones de acceso: el portal del Ministerio del Interior (infoelectoral) devolvió 403 y resultados.interior.gob.es no respondió, así que los datos "oficiales" proceden de tablas con formato del Ministerio alojadas por terceros y de Wikipedia, y se indica cuando hay discrepancias. Neutralidad: estas notas no recomiendan votar ni no votar.

## 1. Resultados de SALF en las europeas del 9-J de 2024 (nacional, comunidades, provincias; comparación con la Comunitat Valenciana)

### Takeaway
SALF obtuvo 803.545 votos (4,58 %) y 3 eurodiputados. En Alicante rozó el 6 % (unos 38.700 votos, 4.ª fuerza) y fue la única provincia valenciana en que superó a Compromís-Sumar. Es un resultado de unas europeas (circunscripción única, participación 46,4 %), no extrapolable directamente a unas generales.

### Cited Findings
- Resultado final nacional: SALF 803.545 votos, 4,58 %, 3 escaños; votos válidos 17.527.438; electores 38.050.286; participación 46,39 % — [Wikipedia ES, Elecciones europeas 2024 en España](https://es.wikipedia.org/wiki/Elecciones_al_Parlamento_Europeo_de_2024_en_Espa%C3%B1a), [Wikipedia EN](https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Spain).
- Con un escrutinio parcial (99 %), Público daba 800.763 votos y 4,63 % (y una participación del 49,22 %, distinta de la final) — [Público](https://www.publico.es/resultados-elecciones/europeas/2024/espana); Alicante Plaza daba 4,59 % — [Alicante Plaza](https://alicanteplaza.es/alicanteplaza/elpartidodealviseirrumpeenelparlamentoeuropeocontresescaos). Las cifras provisionales y finales difieren; uso la final.
- Por comunidades (votos y %): Andalucía 181.071 (6,21 %); Aragón 26.609 (5,09 %); Asturias 14.027 (3,28 %); Cantabria 14.651 (5,68 %); Castilla y León 42.957 (4,03 %); Cataluña 67.337 (2,81 %); Extremadura 14.232 (3,45 %); Galicia 22.817 (2,03 %); La Rioja 4.546 (3,66 %); Comunidad de Madrid 141.801 (5,06 %); Región de Murcia 34.153 (6,57 %); Navarra 7.997 (3,06 %); Comunitat Valenciana 113.791 (5,77 %); Ceuta 1.544 (7,81 %); Melilla 1.088 (5,86 %) — [Wikipedia EN, Results of the 2024 EP election in Spain](https://en.wikipedia.org/wiki/Results_of_the_2024_European_Parliament_election_in_Spain). (Castilla-La Mancha 6,32 %, Canarias 5,35 % y Baleares 1,73 % aparecen en la misma tabla, pero la extracción no permitió asignar con seguridad cada cifra a su comunidad; no las uso.)
- Por provincia (% de voto válido) en la misma fuente: Alicante 6,0 %; Castellón 5,1 %; Valencia 5,8 %; Madrid 5,1 %; Sevilla 6,3 %; Málaga 7,4 %; Zaragoza 5,2 %; Murcia 6,6 %; Cádiz 6,5 %. Barcelona aparece con ~2,8 % (cuadra con el 2,81 % de Cataluña, pero la fila de esa tabla estaba descolocada, así que es aproximado) — [Wikipedia EN](https://en.wikipedia.org/wiki/Results_of_the_2024_European_Parliament_election_in_Spain).
- Alicante: 38.715 votos, ≈6 %, cuarta fuerza, por delante de Compromís-Sumar (36.141 votos); 647.183 votantes (49 %) en el escrutinio de la noche electoral — [Alicante Plaza](https://alicanteplaza.es/la-agrupacion-de-alvise-irrumpe-como-cuarta-fuerza-en-alicante-por-delante-de-compromis-sumar). El Debate da 6,02 % en la provincia y 113.400 votos/5,77 % en la Comunitat Valenciana (frente a 113.791 de Wikipedia) y dice que Alicante es la única provincia valenciana donde SALF supera a Compromís-Sumar — [El Debate](https://www.eldebate.com/espana/comunidad-valenciana/20240610/pp-gana-elecciones-europeas-comunidad-valenciana-deja-izquierda-borde-lona_203828.html). Nota: Alicante Plaza contiene una incoherencia interna (PP 28,26 % frente a ~38 %), que no afecta a la cifra de SALF.
- Madrid: 141.801 votos, quinta fuerza tras Vox y Sumar según El Debate; Andalucía 180.816 votos (6,21 %); Málaga casi 40.000 votos (mejor provincia en votos); Las Palmas 6,7 %, Murcia 6,6 %, Guadalajara 6,5 % — [El Debate](https://www.eldebate.com/espana/20240611/mapa-municipios-acabo-fiesta-alvise-perez-sacado-votos-europeas-cns_204030.html).
- Proyección a Congreso de los resultados europeos (Carles Lozano, recogida en Wikipedia): SALF 4,6 % → 5 escaños en total (Madrid 2, entre otros); Alicante 0 con 6,0 % — [Wikipedia EN](https://en.wikipedia.org/wiki/Results_of_the_2024_European_Parliament_election_in_Spain). Es una proyección de otra elección, no un resultado.

### Inferences
- Cálculo propio: Alicante (6,0 %) quedó ~0,2 puntos por encima de la media de la Comunitat Valenciana (5,77 %) y ~1,4 puntos sobre la media nacional (4,58 %); Madrid (5,06 %) quedó algo por encima de la media nacional; Cataluña y Galicia, muy por debajo.
- La participación de las europeas (46 %) fue muy inferior a la de unas generales (71,7 % en Alicante en 2023), lo que complica comparar votos absolutos.

### Gaps
- No pude descargar la tabla oficial del Ministerio del Interior (403/sin respuesta); faltan los votos oficiales de SALF por provincia (excepto Alicante, por prensa) y un desglose municipal. La cifra de Valencia provincia y Castellón en votos no la localicé.

## 2. Encuestas del 29N: estimaciones y escaños de SALF, evolución desde 2024

### Takeaway
Las encuestas de noviembre de 2026 sitúan a SALF en torno al 1,6–2,4 % (media de elDiario.es: 1,8 %), con 0 escaños en casi todas. Solo las olas de Sondaxe/La Voz de Galicia de mediados de noviembre (2,7–3,1 %) aparecen con 1 escaño, y no pude confirmar en qué provincia. No hay proyección provincial para Alicante.

### Cited Findings
- Fecha de las elecciones: 29 de noviembre de 2026 — [Wikipedia, Opinion polling for the next Spanish general election](https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Spanish_general_election).
- Media de encuestas de elDiario.es (16-nov-2026): las encuestas dan a SALF "alrededor de un 2 %", media 1,8 %; PP+Vox 193 escaños; el artículo señala que la subida de Vox ya tiene en cuenta a SALF — [elDiario.es](https://www.eldiario.es/1_d089ec).
- Tabla de sondeos (extraída del HTML de Wikipedia; la última columna antes de "Lead" es SALF, con el formato "% + escaños"; los matices de la extracción son míos), fechas de campo de noviembre de 2026 — [Wikipedia](https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Spanish_general_election):
  - 40dB/Prisa (olas 10–19 nov): 1,6–1,8 %, 0 escaños (2–4 nov: 2,0 %).
  - EM-Analytics/Electomanía (9–18 nov): 2,1–2,4 %, 0 escaños (1–8 nov: 1,8–2,0 %).
  - SocioMétrica/El Español (hasta 15 nov): 2,2 %; (hasta 25 oct: 2,4 %; 1 nov: 2,5 %), 0 escaños.
  - SW Demoscopia/La Séptima (hasta 17 nov): 2,0 %, 0 escaños.
  - Target Point/El Debate (12 nov): 2,1 %, 0 escaños. GAD3/Vocento (3–5 nov): 1,3 %, 0. Celeste-Tel/Onda Cero (29 oct–3 nov): 1,6 %. IMOP/El Confidencial (10–13 nov): 1,6 %; (2–6 nov): 1,7 %. Public First/Politico (15–17 nov): figura 2,0 % (columna incierta).
  - Sondaxe/La Voz de Galicia: 11–15 nov 3,0 % (1 escaño); 12–16 nov 3,1 % (1); 13–17 nov 2,7 % (1); 14–18 nov SALF sin cifra y 0 escaños; el 2–4 nov daba 1,6 %–2,5 % según fuente (la prensa citó 2,5 % el 1-nov) .
  - Sigma Dos/El Mundo, NC Report/La Razón, Data10/Okdiario, DYM/Henneo, CIS, Metroscopia, InvyMark: la tabla no recoge una cifra propia para SALF (aparece "–"); es decir, no se publica, o se agrupa en "otros".
- Seguimiento de Sondaxe del 15-nov (vía Demócrata): PP 30,8 % y 130 escaños, PSOE 26,4 % y 106; PP+Vox 195; SALF sin desglose de escaños en el artículo; una oleada anterior (1-nov) daba a SALF el 2,5 % — [Demócrata](https://www.democrata.es/encuestas/elecciones-generales/tracking-encuesta-29n-hoy-sondaxe-15-noviembre-2026/) (sólo vi el resumen de búsqueda; la página dio 403 al abrirla).
- Evolución: Votómetro (Redlines, The Objective, 22-feb-2026): SALF 2,0 % nacional, 1 escaño en Madrid (3–4 % allí), umbral efectivo de Madrid 2,5–2,7 %; metodología: 28 encuestas ponderadas, 10.000 simulaciones, D'Hondt y 3 % — [The Objective](https://theobjective.com/espana/politica/2026-02-22/alvise-escano-congreso-votometro/). Un CIS de octubre de 2024 y sondeos de diciembre de 2024 ya mostraban SALF cayendo (dic-2024: de 4,9 % a 3,1 %, según un resumen de búsqueda no verificado en el original) — [Vozpópuli](https://www.vozpopuli.com/espana/politica/el-partido-de-alvise-reaparece-en-aragon-tras-un-ano-de-irrelevancia-con-la-amenaza-de-fragmentar-a-la-derecha.html).
- Regionales de 2026: en Castilla y León (15-mar) SALF sacó >17.000 votos, 1,40 %, sin escaño, frente a ~43.000 votos (~4 %) en las europeas de 2024 (≈ –60 %) — [elDiario.es](https://www.eldiario.es/politica/partido-alvise-naufraga-castilla-leon-encadena-segundo-fracaso-autonomico_1_13063589.html); [The Objective](https://theobjective.com/espana/castilla-y-leon/2026-03-15/alvise-castilla-leon-vox-resultados/) da 15.933 votos (discrepancia entre medios). En Aragón (8-feb) quedó sin representación con ~18.000 votos según Kreab y "rozó el escaño por Zaragoza" — [Kreab](https://kreab.com/espana/wp-content/uploads/sites/3/2026/02/vf-informe-kreab-elecciones-aragon-08f2026.pdf).
- Candidatura: SALF presenta listas al Congreso en 46 provincias, sin Senado, y Alvise Pérez encabeza la de Madrid — [Demócrata](https://www.democrata.es/en/politics/alvise-registers-salf-lists-for-congress-in-46-provinces-and-rules-out-competing-for-the-senate/) (según resumen de búsqueda; 403 al abrir). No pude confirmar si Alicante está entre las 46 provincias.

### Inferences
- Cálculo propio: respecto al 4,58 % de 2024, el rango de encuestas de noviembre (1,6–2,4 %) equivale a conservar entre el ~35 % y el ~52 % del voto (Sondaxe 2,7–3,1 %: ~59–68 %). Aplicando ese ratio de forma ingenua (supuesto fuerte: retención uniforme) al 6,02 % de Alicante saldrían 2,1–3,2 % (3,6–4,1 % con Sondaxe), y al 5,06 % de Madrid, 1,8–2,7 % (3,0–3,4 % con Sondaxe). Es un ejercicio de escala, no una proyección provincial.
- La única fuente que da 1 escaño es Sondaxe; si ese escaño fuera en Madrid sería coherente con el Votómetro, pero no está confirmado.

### Gaps
- No encontré encuesta provincial de Alicante para el 29N con SALF. No pude abrir las fichas originales de Sondaxe, Sigma Dos (SALF no figura), NC Report, DYM, CIS, ni las series de Politicheck/Electomanía por provincia. La interpretación de columnas de la tabla de Wikipedia puede tener errores de extracción.

## 3. Aritmética electoral: D'Hondt, barrera del 3 % y votos que necesitaría SALF (Alicante, Madrid y otras provincias)

### Takeaway
En Alicante, sumando votos nuevos a los de 2023, SALF necesitaría unos 65.834 votos (≈7,3 % sobre los válidos de 2023, ≈6,8–7,35 % según de dónde salgan los votos), frente a los ~38.700 de 2024 y los ~20.000–29.000 que sugiere un escalado ingenuo de las encuestas. En Madrid el obstáculo es la barrera del 3 %: ≈110.000 votos nuevos; el D'Hondt por sí solo exigiría ~2,5 %.

### Cited Findings
- Alicante 2023 (provisional, antes del voto CERA, formato Ministerio del Interior): censo 1.261.001; participación 71,71 %; abstención 356.620 (28,28 %); votos válidos 895.189; en blanco 6.558; PP 5 esc. 329.167; PSOE 4 esc. 286.424; Vox 2 esc. 145.562; Sumar-Compromís 1 esc. 114.973; PACMA 7.238 — [Resultados provinciales 23J (PDF)](https://aytoconsuegra.es/wp-content/uploads/2023/07/congreso_23J23-resultados-prov.pdf).
- El Español (20-oct-2026) cita el cociente 71.606, que "PP necesitaba 28.864 votos más" y que el PSOE perdería el 4.º escaño con más de 31.000 votos menos, la barrera del 3 % y el umbral "de más de 71.000 votos" — [El Español](https://www.elespanol.com/alicante/20261020/provincia-alicante-ley-dhont-pp-cerca-sexto-escano-psoe-quinto/1003744426063_0.html). El artículo no menciona a SALF.
- Madrid 2023 (provisional): 37 escaños; válidos 3.564.144; PP 1.443.881 (15), PSOE 993.870 (11), Sumar 550.389 (6), Vox 499.733 (5) — [PDF resultados provinciales](https://aytoconsuegra.es/wp-content/uploads/2023/07/congreso_23J23-resultados-prov.pdf). Con el voto CERA el PP quitó un escaño al PSOE en Madrid (reparto final PP 16/PSOE 10) — [Maldita](https://maldita.es/malditodato/20230729/voto-cera-batalla-escanos/); [Demócrata](https://www.democrata.es/elecciones-generales-espana/herramientas/resultados-23j).
- Barrera: 3 % de los votos válidos por circunscripción (la prensa lo recoge así; el Votómetro aplica "3 % mínimo"; no verifiqué el texto del art. 163 LOREG en el BOE) — [The Objective](https://theobjective.com/espana/politica/2026-02-22/alvise-escano-congreso-votometro/), [El Español](https://www.elespanol.com/alicante/20261020/provincia-alicante-ley-dhont-pp-cerca-sexto-escano-psoe-quinto/1003744426063_0.html).

### Cálculo propio (supuestos: los votos de 2023 se mantienen; SALF es una lista nueva cuyos votos se suman desde la abstención/no votantes, salvo que se indique; D'Hondt con 3 % sobre válidos incluidos blancos)
1. Alicante, cifras del enunciado (finales con CERA: PP 330.293, PSOE 287.737, Vox 146.133, Sumar 115.787): cocientes ordenados 12.º = PP 5.º = 66.058,6; 11.º = PSOE 4.º = 71.934,25; 13.º (primer excluido) = Sumar 2.º = 57.893,5. Con las cifras provisionales: 12.º = 65.833,4; PSOE 4.º = 71.606,0; Sumar 2.º = 57.486,5. El reparto resultante es 5-4-2-1 en ambos casos.
2. Lista nueva con V votos desde abstención: obtiene escaño si V > cociente del último escaño. Alicante: V ≥ 65.834 (provisional) o 66.059 (final). Sobre los 895.189 válidos de 2023 son el 7,35 %; contando que SALF también engrosa el total (65.834/(895.189+65.834)) son el 6,85 %. El 3 % se supera de sobra (3 % ≈ 27.700 votos).
3. Si los votos de SALF salen de otros partidos (participación constante), cuota mínima de SALF para escaño en Alicante: 6,4 % si sale solo de Vox o solo del PP, 6,5 % si de PP+Vox a partes proporcionales, 6,8 % si de todos proporcionalmente, 7,35 % si es voto nuevo.
4. Los 38.715 votos de SALF en 2024 equivaldrían al 4,3 % de los válidos de 2023 en Alicante: por debajo del escaño aunque se repitieran íntegros y se sumaran a los de 2023.
5. Observación sobre las cifras citadas: (329.167+28.864)/5 = 71.606,2 = cociente del 4.º escaño del PSOE. Es decir, los "28.864 votos" elevarían el 5.º cociente del PP hasta igualar el 4.º del PSOE; para un 6.º escaño del PP el cálculo (si el escaño desplazado fuera el 4.º del PSOE) sería 6 × 71.606 – 329.167 ≈ 100.469 votos más. Además, con un reparto 5-4-2-1 el último escaño asignado es el 5.º del PP (65.833,4), no el 4.º del PSOE (71.606). Lo señalo como discrepancia de planteamiento con el artículo, no como error del lector. Tampoco reproduzco los "31.000 votos menos" del PSOE: con los supuestos anteriores, el 4.º del PSOE cae por debajo del primer excluido (Sumar 2.º, 57.487) con unos 56.500 votos menos, si esos votos desaparecen.
6. Madrid (cifras provisionales, 37 escaños): último cociente = 90.352, primer excluido 90.243 → SALF necesitaría 90.352 votos nuevos (2,54 % de los válidos de 2023) por D'Hondt, pero la barrera del 3 % exige ≈110.232 votos nuevos (3,00 % del total con SALF). Si los votos salen de otros partidos con participación constante, el mínimo es ~3,0 % (la barrera manda); desde abstención, 3,09 %. Los 141.801 votos de SALF en Madrid en 2024 (5,06 % de aquel voto válido) superarían ambos umbrales si se repitieran.
7. Otras provincias (votos nuevos necesarios por D'Hondt, % sobre válidos 2023; datos provisionales): Barcelona (32 esc.) 72.772 (2,75 %), pero la barrera del 3 % exige ≈81.854; Valencia (16) 80.238 (5,61 %); Alicante (12) 65.834 (7,35 %); Sevilla (12) 73.887 (7,00 %); Málaga (11) 59.996 (7,67 %); Murcia (10) 62.658 (8,42 %); Cádiz (9) 55.256 (8,71 %); Baleares (8) 50.379 (10,05 %); Castellón (5) 48.763 (15,91 %); provincias de 3 escaños, 17,5–22,6 %. Tabla completa de las 50 circunscripciones: `calc_out.txt`. Madrid y Barcelona son las únicas donde el umbral efectivo (el 3 %) es lo que limita y el coste en porcentaje es el más bajo.

### Inferences
- Con los datos de noviembre de 2026 (1,6–2,4 % nacional, ~35–52 % de retención respecto a 2024), SALF está por debajo de las cuotas necesarias en casi todas las provincias; Madrid es la única donde un 3,0–3,5 % es verosímil con Sondaxe o con el Votómetro de febrero (3–4 %), pero requeriría cruzar justo la barrera.
- Los umbrales de Madrid y Barcelona dependen de la barrera del 3 %, no del D'Hondt, por lo que el margen de error de una encuesta provincial es decisivo.

### Gaps
- Faltan los resultados finales de 2023 con CERA para todas las provincias (solo uso los provisionales, salvo las cifras de Alicante del enunciado); el voto CERA y el voto por correo de 2026 pueden mover ±1 escaño y unos 1.000–4.000 votos por provincia. No verifiqué el texto del art. 163 LOREG.

## 4. Efecto de voto dividido: origen del voto de SALF, perfil sociodemográfico

### Takeaway
Los estudios del CIS de 2024 indican que SALF captó sobre todo a hombres jóvenes de derecha, con trasvase mayor desde Vox que desde el PP, y con un componente de voto nuevo y abstencionista. En el modelo de Alicante (cálculo propio), restar votos a Vox puede costarle un escaño, que pasaría a Sumar, sin que SALF obtenga representación.

### Cited Findings
- CIS postelectoral europeas (estudio 3465, 9-jul-2024): 58 % de los votantes de SALF volverían a votarle en generales; 17,7 % irían a Vox; 7,3 % al PP; 7,4 % no votarían; 6,7 % dudosos; 22 % no responde — [El Independiente](https://www.elindependiente.com/espana/2024/07/09/casi-la-mitad-de-los-votantes-de-alvise-no-le-votarian-al-congreso-segun-el-cis/amp/). Más de 800.000 votantes en el 9-J.
- CIS preelectoral 3458 (8–17 mayo 2024), según Maldita: la fuga desde el PP sería mínima (0,8 % de sus votantes); la competencia con Vox sería mayor (18,2 % de su espacio de las últimas europeas) y se disputaría a abstencionistas y jóvenes primerizos; el 15,6 % de los nuevos votantes decididos apoyaba a SALF. Maldita advierte de que son inferencias de cruces de encuesta (el voto es secreto) — [Maldita](https://maldita.es/malditodato/20240612/votante-se-acabo-la-fiesta-estimaciones-encuestas/).
- Perfil: barómetro CIS de junio de 2024: masculino, joven y de derecha; Ara describe a sus votantes repartidos entre centro, centroderecha y extrema derecha — [La Voz de Ibiza](https://lavozdeibiza.com/actualidad/2024/06/24/el-cis-confirma-que-alvise-perez-capta-votantes-jovenes-de-vox-y-de-clase-baja); [Ara](https://es.ara.cat/misc/hombres-jovenes-derecha-extrema-votante-alvise-perez_1_5059672.html) (titular "clase baja" y "jóvenes de Vox" en La Voz de Ibiza; no pude abrir los textos para extraer cifras de edad, estudios o renta).
- Regional 2026: en Castilla y León, el 1,4 % de SALF habría permitido a Vox superar el 20 % y ganar escaños en algunas provincias, según The Objective — [The Objective](https://theobjective.com/espana/castilla-y-leon/2026-03-15/alvise-castilla-leon-vox-resultados/); elDiario.es no analiza ese efecto. Vox ya incorpora a SALF en su subida, según elDiario.es (media del 16-nov) — [elDiario.es](https://www.eldiario.es/1_d089ec).

### Cálculo propio (Alicante, base 2023 provisional, SALF con cuota s del voto válido y el resto constante)
- s = 4 %, 5 %, 6 % (≈35.800, 44.800, 53.700 votos): SALF 0 escaños en todos los supuestos. Si los votos salen solo de Vox, Vox pasa de 2 a 1 escaño y Sumar de 1 a 2; si salen de PP+Vox pro rata o de todos pro rata o de abstención, el reparto no cambia (5-4-2-1).
- s = 7,35 % desde abstención: sin escaño (65.796 < 65.834); con PP+Vox pro rata, SALF 1 y PP 4 (5-4-2-1 → 4-4-2-1+1); si sale solo de Vox: Vox 1, SALF 1; con s = 8 % desde abstención o PP+Vox: PP pierde un escaño (4-4-2-1-SALF 1). Es decir, un escaño de SALF en Alicante se llevaría normalmente el 5.º del PP o el 2.º de Vox, no uno de la izquierda.
- Madrid (provisional; 37 escaños): s = 3 % → 0 escaños (106.924 < 110.232 por la barrera efectiva); s = 3,5 % (~124.700 votos): SALF 1; si salen de PP+Vox, PP 14; si salen de todos pro rata, PSOE 10; s = 5,06 %: SALF 2 si sale de todos (Sumar 5), SALF 1 con PP 14 si sale de PP+Vox.

### Inferences
- Dado que el CIS 2024 apunta a Vox como fuente principal y al PP como fuente menor, el efecto aritmético más probable de un SALF cerca del umbral es restar a Vox (a la derecha) en provincias medianas; pero el signo de cada escaño depende de la provincia y de cuántos escaños marginales haya en juego.
- Perfil sociodemográfico completo (estudios, ingresos): no localizado con fuente.

### Gaps
- No obtuve las tablas de edad, sexo, estudios e ingresos del estudio 3465 ni de estudios de Sigma Dos, 40dB, Metroscopia o Fundación Alternativas sobre el voto de SALF; ni transferencia de voto de las encuestas de 2026.

## 5. Voto desperdiciado y efecto sobre la mayoría de gobierno (PP+Vox frente a PSOE+socios)

### Takeaway
Con 1,6–2,4 % nacional, casi todo el voto a SALF no obtendría escaño; la media de elDiario.es da a PP+Vox 193 escaños (mayoría de 176), de modo que el efecto de SALF sobre la mayoría depende de cuántos escaños marginales tome a cada bloque.

### Cited Findings
- elDiario.es (16-nov): PP+Vox 193 escaños; SALF media 1,8 % — [elDiario.es](https://www.eldiario.es/1_d089ec). Sondaxe: PP+Vox 195 — [Demócrata](https://www.democrata.es/encuestas/elecciones-generales/tracking-encuesta-29n-hoy-sondaxe-15-noviembre-2026/). 40dB 15–19 nov: PP 127–139 y Vox 56–62 escaños (PP+Vox ≈ 183–201) — [Wikipedia](https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Spanish_general_election).
- Votómetro (feb-2026): calcula la probabilidad de que cada bloque alcance los 176 escaños tras 10.000 simulaciones — [The Objective](https://theobjective.com/espana/politica/2026-02-22/alvise-escano-congreso-votometro/); no recogí la probabilidad concreta.
- En 2023 Vox sostuvo que 5 escaños más habrían dado la mayoría de 176 al bloque PP-Vox (afirmación de Vox, no verificada) — [Última Hora](https://www.ultimahora.es/noticias/elecciones-23j/2023/07/24/1982421/resultado-elecciones-generales-vox-evita-autocritica-carga-contra-voto-util.html); en Alicante el bloque PP-Vox superó en 73.332 votos al PSOE-Sumar-Compromís — [El Español](https://www.elespanol.com/alicante/20261020/provincia-alicante-ley-dhont-pp-cerca-sexto-escano-psoe-quinto/1003744426063_0.html).

### Inferences (cálculo propio)
- Probabilidad de que un voto a SALF "no cuente" para escaño: en una provincia como Alicante necesita ≥6,4–7,35 % para un escaño, y hoy las encuestas lo sitúan (con escalado ingenuo) en 2–3 %; el voto a SALF sería, a efectos de reparto, un voto sin representación en todos los escenarios de este informe salvo en Madrid con ≥3,5 %.
- Efecto sobre el bloque: el voto "desperdiciado" no suma al bloque PP+Vox; quita votos que, de otro modo, podrían haber ido a PP o Vox (según el CIS 2024, principalmente a Vox). En provincias pequeñas esos votos no mueven escaños; en las medianas o grandes pueden mover un escaño marginal (en Alicante, el 2.º de Vox pasaría a Sumar si se pierden suficientes votos de Vox).
- No he encontrado un análisis experto específico del 29N que cuantifique el efecto de SALF en los 176; lo que existe es el análisis de The Objective para Castilla y León y las referencias de elDiario.es.

### Gaps
- No encontré estudios de expertos (Sigma Dos, 40dB, Metroscopia, Fundación Alternativas) sobre el impacto de SALF en la mayoría PP+Vox, ni probabilidades del Votómetro de noviembre.

## 6. Comparación con fenómenos similares (Podemos 2014, Ciudadanos, Vox 2018-19, Ruiz-Mateos 1989)

### Takeaway
Los partidos de protesta españoles siguen trayectorias muy distintas: Podemos y Ciudadanos convirtieron un buen resultado en europeas en gran peso en generales (con caída posterior); Vox se consolidó; Ruiz-Mateos (como SALF, un éxito en unas europeas con 2 o 3 escaños) se esfumó en pocos años. SALF, con caída por debajo del 3 % en regionales de 2026, se parece más al segundo grupo.

### Cited Findings
- Agrupación Ruiz-Mateos, europeas 1989: ~608.000 votos y 2 eurodiputados; en 1994 bajó a unos 82.000 votos (0,44 %) y perdió los escaños; disuelta en 1995 según Wikipedia — [Wikipedia, Ruiz-Mateos Group](https://en.wikipedia.org/wiki/Ruiz-Mateos_Group).
- Podemos: europeas 2014, 1.253.837 votos (8,0 %), 5 escaños; generales 2015, 5.212.711 (20,7 %), 69 escaños; 2016 (Unidos Podemos) 47; abril 2019 32; noviembre 2019 26; 2023 (dentro de Sumar) 5 — [Wikipedia](https://en.wikipedia.org/wiki/Podemos_(Spanish_political_party)).
- Ciudadanos: europeas 2014, 497.146 votos (3,2 %), 2 escaños; generales 2015 3.514.528 (13,9 %), 40; 2016 3.141.570 (13,1 %), 32; abril 2019 4.155.665 (15,9 %), 57; noviembre 2019 1.650.318 (6,8 %), 10; no concurrió en 2023 — [Wikipedia](https://en.wikipedia.org/wiki/Citizens_(Spanish_political_party)).
- Vox: abril 2019 10,26 %, 24 escaños; noviembre 2019 ~3,6 millones de votos, 52 escaños; 2023 ~3 millones, 33 escaños; 2018 Andalucía 12 escaños — [Wikipedia](https://en.wikipedia.org/wiki/Vox_(political_party)) (extracto parcial: la página truncó parte de la tabla; las cifras de 2014-2016 de Vox no están verificadas).
- SALF: 4,58 % en europeas 2024 (3 escaños) → 1,40 % en CyL 2026 sin escaño → 1,6–2,4 % en encuestas del 29N — fuentes arriba.

### Inferences
- Cálculo propio: Podemos multiplicó sus votos por ~4,2 entre europeas 2014 y generales 2015; Ciudadanos por ~7,1 (en una campaña con organización nacional); Ruiz-Mateos dividió sus votos por ~7,4 entre 1989 y 1994; SALF (europeas 2024 → CyL 2026) los dividió por ~2,5 en esa región, no comparable directamente por la menor participación y la presencia de partidos regionales.
- Estos casos sugieren que el éxito en europeas no predice por sí solo la durabilidad; la diferencia clave es la capacidad de organización y de ocupar un espacio disponible (Podemos y Vox) o no (Ruiz-Mateos).

### Gaps
- No localicé estudios académicos (Revista Española de Ciencia Política, Electoral Studies) que comparen específicamente a SALF con otros partidos de protesta. Faltan cifras verificadas de Vox en 2014–2016 y de Podemos/Vox por circunscripción.
