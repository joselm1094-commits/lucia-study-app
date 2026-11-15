# Comparativa socioeconómica y estructural de España frente a países de renta alta (segunda ronda, datos a 15-nov-2026)

## Alcance y método

### Takeaway
Se recuperaron datos primarios verificables (API del Banco Mundial, API de Eurostat, PDF del Heritage 2026, PDF del WJP 2025, tablas OCDE-PISA 2022 vía Wikipedia) para unos 20 de los indicadores pedidos. Los demás figuran como "n/d" porque no se pudo acceder a la tabla original (OECD Data Explorer devolvió error 500, sitios OCDE/WJP-web 403, sin acceso a Harvard Atlas, CEPEJ, B-READY, QS/THE/ARWU, UNODC prisiones, Pensions at a Glance). No se ha estimado ninguna cifra.

### Cited Findings
- Banco Mundial, WDI (API, última actualización de la base 2026-11-11): [api.worldbank.org](https://api.worldbank.org/v2/country/ESP/indicator/NY.GDP.PCAP.PP.CD?format=json&mrv=1). Se usa el último año disponible por país, indicado en cada celda.
- Eurostat (API de difusión, consultada 15-nov-2026): [ec.europa.eu/eurostat/api](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_peps01n). Cubre UE, Noruega y (a veces) Suiza; el resto de países de la lista = n/d en estos indicadores.
- Los puestos (#x/N) son cálculo propio sobre la lista de 22 países (España incluida) con dato; N varía según cobertura. No son los rankings oficiales mundiales salvo donde se indica (WJP, Heritage).
- Media UE-27 de Eurostat se muestra aparte cuando existe; no hay "media OCDE" verificada salvo PISA.

### Inferences
- Los países de habla no europea (EE. UU., Canadá, Japón, Corea, Australia, Singapur, Israel) quedan mayormente n/d en indicadores Eurostat; una tercera ronda debería usar OECD Data Explorer vía navegador, que aquí falló.

### Gaps
- Ver sección final "Huecos pendientes".

## Bloque 1. Riqueza y estructura económica

### Takeaway
En PIB per cápita nominal España (38.627 USD, 2025) está en el tramo bajo de la lista (solo por encima de Grecia, Polonia, Portugal, Japón y Corea del Sur), y en PPA (59.868 USD) por debajo de Alemania, Francia, Italia, Reino Unido, Corea, Finlandia, Suecia, Dinamarca y Países Bajos; solo supera a Grecia, Israel, Japón, Polonia y Portugal.

### Cited Findings

### 1.1 PIB per cápita (USD)

| País | PPA, USD internacionales corrientes | Nominal, USD corrientes |
|---|---|---|
| **España** | 59,868 (2025) [#17/22] | 38,627 (2025) [#17/22] |
| Alemania | 75,407 (2025) [#8/22] | 60,496 (2025) [#10/22] |
| Francia | 63,975 (2025) [#14/22] | 48,986 (2025) [#15/22] |
| Italia | 62,803 (2025) [#16/22] | 43,309 (2025) [#16/22] |
| Países Bajos | 87,320 (2025) [#6/22] | 73,684 (2025) [#7/22] |
| Polonia | 54,262 (2025) [#20/22] | 28,420 (2025) [#21/22] |
| Portugal | 53,146 (2025) [#21/22] | 32,082 (2025) [#20/22] |
| Irlanda | 155,089 (2025) [#2/22] | 131,592 (2025) [#1/22] |
| Suecia | 72,529 (2025) [#9/22] | 63,133 (2025) [#9/22] |
| Dinamarca | 83,218 (2025) [#7/22] | 76,970 (2025) [#6/22] |
| Finlandia | 65,884 (2025) [#12/22] | 56,149 (2025) [#13/22] |
| Noruega | 104,044 (2025) [#3/22] | 94,594 (2025) [#4/22] |
| Grecia | 45,264 (2025) [#22/22] | 26,948 (2025) [#22/22] |
| Reino Unido | 64,606 (2025) [#13/22] | 57,602 (2025) [#12/22] |
| EE. UU. | 90,027 (2025) [#5/22] | 90,027 (2025) [#5/22] |
| Canadá | 66,746 (2025) [#11/22] | 55,698 (2025) [#14/22] |
| Japón | 55,422 (2025) [#19/22] | 35,951 (2025) [#19/22] |
| Corea del Sur | 63,125 (2025) [#15/22] | 36,227 (2025) [#18/22] |
| Australia | 71,934 (2025) [#10/22] | 65,130 (2025) [#8/22] |
| Suiza | 102,513 (2025) [#4/22] | 114,769 (2025) [#2/22] |
| Singapur | 163,354 (2025) [#1/22] | 98,814 (2025) [#3/22] |
| Israel | 59,717 (2025) [#18/22] | 60,337 (2025) [#11/22] |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Banco Mundial WDI NY.GDP.PCAP.PP.CD y NY.GDP.PCAP.CD](https://api.worldbank.org/v2/country/ESP/indicator/NY.GDP.PCAP.CD?format=json&mrv=1). Nota: la API devuelve 2025 incluso para estimaciones recientes; el FMI WEO (oct-2026) no se pudo consultar.


### 1.2 Productividad, salarios, salario mínimo, estructura empresarial, complejidad

| Indicador | España | Resto de países |
|---|---|---|
| Productividad por hora (OCDE/Eurostat) | n/d | n/d (OECD SDMX devolvió "Internal server error") |
| Salario medio y mediano real/PPA (OCDE) | n/d | n/d |
| Salario mínimo mensual bruto, EUR, 2026-S2, 12 pagas equivalentes ([Eurostat earn_mw_cur](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_mw_cur)) | 1.425 (2026-S2) | Irlanda 2.391; Alemania 2.343; Países Bajos 2.338; Francia 1.867; Polonia 1.119; Portugal 1.073. Resto (Italia, Grecia, Suecia, Dinamarca, Finlandia, Noruega, Suiza) = sin salario mínimo legal nacional o n/d en la consulta; no-UE n/d |
| Índice de complejidad económica (Harvard Atlas) | n/d | n/d |
| % empresas >250 empleados | n/d | n/d |
| Empresas en Fortune Global 500 (Wikipedia, lista 2026, solo top-10 países legible) | n/d (no figura en el top-10 mostrado) | EE. UU. 141; Japón 40; Alemania 28; Francia 24; Reino Unido 21; Canadá 14; Corea del Sur 13; Suiza 12 ([Wikipedia: Fortune Global 500](https://en.wikipedia.org/wiki/Fortune_Global_500)); el resto n/d |
| Universidades en top-200 QS/THE/ARWU | n/d | n/d |

Caveat: el salario mínimo de Eurostat para España equivale a 1.221 EUR x 14 pagas / 12; es una conversión de Eurostat, no el SMI mensual de 14 pagas.

## Bloque 2. Pobreza, desigualdad, salud

### Takeaway
España tiene el AROPE (25,7 %, 2025) y el AROPE infantil (33,8 %) más altos de la UE entre los países comparados salvo Grecia en AROPE total (27,5 %); su Gini (30,8) está en la franja media-alta europea. Esperanza de vida alta (83,9 años, 2024), mejor que Alemania, Francia, Reino Unido o EE. UU.

### Cited Findings

### 2.1 Pobreza y desigualdad

| País | Gini renta disponible (Eurostat; EE. UU. = Banco Mundial) | AROPE población total, % | AROPE menores de 18, % | Tasa de sobrecarga de coste de vivienda (hogares), % |
|---|---|---|---|---|
| **España** | 30.8 (2025) [#5/14] | 25.7 (2025) [#2/13] | 33.8 (2025) [#1/12] | 7.2 (2025) [#6/13] |
| Alemania | 30.1 (2025) [#7/14] | 21.2 (2025) [#4/13] | 23.5 (2025) [#5/12] | 11.2 (2025) [#4/13] |
| Francia | 30.4 (2025) [#6/14] | 20.8 (2025) [#5/13] | 27.5 (2025) [#2/12] | 6.4 (2025) [#8/13] |
| Italia | 31.0 (2025) [#3/14] | 22.6 (2025) [#3/13] | 27.1 (2025) [#3/12] | 5.0 (2025) [#11/13] |
| Países Bajos | 25.9 (2025) [#12/14] | 15.8 (2025) [#12/13] | 12.7 (2025) [#12/12] | 6.5 (2025) [#7/13] |
| Polonia | 24.9 (2025) [#13/14] | 15.0 (2025) [#13/13] | 15.6 (2025) [#9/12] | 4.1 (2025) [#13/13] |
| Portugal | 30.9 (2025) [#4/14] | 18.6 (2025) [#7/13] | 19.2 (2025) [#7/12] | 6.3 (2025) [#9/13] |
| Irlanda | 27.2 (2025) [#10/14] | 18.8 (2025) [#6/13] | 23.7 (2025) [#4/12] | 5.3 (2025) [#10/13] |
| Suecia | 28.6 (2025) [#8/14] | 18.6 (2025) [#8/13] | 23.4 (2025) [#6/12] | 10.8 (2025) [#5/13] |
| Dinamarca | 28.2 (2025) [#9/14] | 17.9 (2025) [#9/13] | 14.8 (2025) [#10/12] | 14.7 (2025) [#2/13] |
| Finlandia | 27.1 (2025) [#11/14] | 17.2 (2025) [#10/13] | 17.1 (2025) [#8/12] | 4.7 (2025) [#12/13] |
| Noruega | 23.7 (2025) [#14/14] | 16.1 (2025) [#11/13] | 14.3 (2025) [#11/12] | 13.5 (2025) [#3/13] |
| Grecia | 31.6 (2025) [#2/14] | 27.5 (2025) [#1/13] | n/d | 26.4 (2025) [#1/13] |
| Reino Unido | n/d | n/d | n/d | n/d |
| EE. UU. | 41.8 (2024) [#1/14] | n/d | n/d | n/d |
| Canadá | n/d | n/d | n/d | n/d |
| Japón | n/d | n/d | n/d | n/d |
| Corea del Sur | n/d | n/d | n/d | n/d |
| Australia | n/d | n/d | n/d | n/d |
| Suiza | n/d | n/d | n/d | n/d |
| Singapur | n/d | n/d | n/d | n/d |
| Israel | n/d | n/d | n/d | n/d |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Eurostat ilc_di12, ilc_peps01n, ilc_lvho07a](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_peps01n) y [Banco Mundial SI.POV.GINI](https://api.worldbank.org/v2/country/USA/indicator/SI.POV.GINI?format=json&mrv=1).
Media UE-27 (Eurostat 2025): Gini 29,2; AROPE 20,9 %; AROPE infantil 24,3 %; sobrecarga vivienda 7,6 %. Suiza: Eurostat sin dato en ilc_*. Aviso: la sobrecarga de vivienda en España (7,2 %) es inferior a la media UE; contrasta con la percepción de acceso difícil (ver huecos: precio/renta y alquiler n/d). Pobreza relativa OCDE (umbral 50 %) n/d.

### 2.2 Salud

| País | Esperanza de vida al nacer, años | Gasto sanitario corriente, % PIB |
|---|---|---|
| **España** | 83.9 (2024) [#5/22] | n/d |
| Alemania | 80.8 (2024) [#20/22] | 12.3 (2024) [#1/12] |
| Francia | 83.0 (2024) [#12/22] | 11.5 (2024) [#2/12] |
| Italia | 84.0 (2024) [#4/22] | 8.4 (2024) [#10/12] |
| Países Bajos | 82.0 (2024) [#17/22] | 10.0 (2024) [#7/12] |
| Polonia | 78.4 (2024) [#22/22] | 8.1 (2024) [#11/12] |
| Portugal | 82.4 (2024) [#13/22] | 10.2 (2024) [#6/12] |
| Irlanda | 83.0 (2024) [#11/22] | 6.9 (2024) [#12/12] |
| Suecia | 84.1 (2024) [#2/22] | 11.2 (2024) [#4/12] |
| Dinamarca | 82.3 (2024) [#15/22] | 9.4 (2024) [#8/12] |
| Finlandia | 82.3 (2024) [#14/22] | n/d |
| Noruega | 83.2 (2024) [#9/22] | n/d |
| Grecia | 81.8 (2024) [#18/22] | n/d |
| Reino Unido | 81.4 (2024) [#19/22] | 11.1 (2024) [#5/12] |
| EE. UU. | 78.9 (2024) [#21/22] | n/d |
| Canadá | 82.1 (2024) [#16/22] | 11.3 (2024) [#3/12] |
| Japón | 84.0 (2024) [#3/22] | n/d |
| Corea del Sur | 83.6 (2024) [#6/22] | 8.7 (2024) [#9/12] |
| Australia | 83.1 (2024) [#10/22] | n/d |
| Suiza | 84.4 (2024) [#1/22] | n/d |
| Singapur | 83.3 (2024) [#7/22] | n/d |
| Israel | 83.2 (2024) [#8/22] | n/d |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Banco Mundial SP.DYN.LE00.IN y SH.XPD.CHEX.GD.ZS](https://api.worldbank.org/v2/country/ESP/indicator/SP.DYN.LE00.IN?format=json&mrv=1)
Esperanza de vida saludable (HALE/HLY): n/d (consulta Eurostat hlth_hlye fallida). Gasto sanitario: n/d para varios países (Australia, Finlandia, Grecia, Israel, Japón, Noruega, Singapur, Suiza, EE. UU. sin dato en la API; no se estima).

## Bloque 3. Educación

### Takeaway
En PISA 2022 España (473 mates, 474 lectura, 485 ciencias) queda por debajo de la media OCDE de 500 y de Irlanda, Polonia, Reino Unido, Dinamarca, Finlandia, Canadá, Japón, Corea; supera a Grecia, Israel, Noruega. En abandono temprano España (12,8 %, 2025) es el segundo peor de la lista UE tras Alemania (13,1 %), y en población 25-34 con estudios superiores (52,5 %) supera la media UE (44,8 %).

### Cited Findings

### 3.1 PISA 2022 (OCDE)

| País | Matemáticas | Lectura | Ciencias |
|---|---|---|---|
| **España** | 473 (2022) [#16/22] | 474 (2022) [#20/22] | 485 (2022) [#17/22] |
| Alemania | 475 (2022) [#14/22] | 480 (2022) [#15/22] | 492 (2022) [#14/22] |
| Francia | 474 (2022) [#15/22] | 474 (2022) [#18/22] | 487 (2022) [#16/22] |
| Italia | 471 (2022) [#18/22] | 482 (2022) [#14/22] | 477 (2022) [#20/22] |
| Países Bajos | 493 (2022) [#6/22] | 459 (2022) [#21/22] | 488 (2022) [#15/22] |
| Polonia | 489 (2022) [#8/22] | 489 (2022) [#10/22] | 499 (2022) [#10/22] |
| Portugal | 472 (2022) [#17/22] | 477 (2022) [#16/22] | 484 (2022) [#18/22] |
| Irlanda | 492 (2022) [#7/22] | 516 (2022) [#2/22] | 504 (2022) [#7/22] |
| Suecia | 482 (2022) [#13/22] | 487 (2022) [#12/22] | 494 (2022) [#12/22] |
| Dinamarca | 489 (2022) [#9/22] | 489 (2022) [#11/22] | 494 (2022) [#13/22] |
| Finlandia | 484 (2022) [#12/22] | 490 (2022) [#9/22] | 511 (2022) [#5/22] |
| Noruega | 468 (2022) [#19/22] | 477 (2022) [#17/22] | 478 (2022) [#19/22] |
| Grecia | 430 (2022) [#22/22] | 438 (2022) [#22/22] | 441 (2022) [#22/22] |
| Reino Unido | 489 (2022) [#10/22] | 494 (2022) [#8/22] | 500 (2022) [#9/22] |
| EE. UU. | 465 (2022) [#20/22] | 504 (2022) [#6/22] | 499 (2022) [#11/22] |
| Canadá | 497 (2022) [#5/22] | 507 (2022) [#5/22] | 515 (2022) [#4/22] |
| Japón | 536 (2022) [#2/22] | 516 (2022) [#3/22] | 547 (2022) [#2/22] |
| Corea del Sur | 527 (2022) [#3/22] | 515 (2022) [#4/22] | 528 (2022) [#3/22] |
| Australia | 487 (2022) [#11/22] | 498 (2022) [#7/22] | 507 (2022) [#6/22] |
| Suiza | 508 (2022) [#4/22] | 483 (2022) [#13/22] | 503 (2022) [#8/22] |
| Singapur | 575 (2022) [#1/22] | 543 (2022) [#1/22] | 561 (2022) [#1/22] |
| Israel | 458 (2022) [#21/22] | 474 (2022) [#19/22] | 465 (2022) [#21/22] |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: transcripción en [Wikipedia: PISA (ranking summary 2022)](https://en.wikipedia.org/w/index.php?title=Programme_for_International_Student_Assessment&action=raw) de la tabla OCDE [PISA 2022 Results](https://www.oecd.org/en/publications/pisa-2022-results-volume-i_53f23881-en.html) (fuente secundaria; el sitio OCDE devolvió 403). Cobertura: 81 países. Media OCDE 2022: n/d (no se pudo verificar la cifra en la fuente primaria).


### 3.2 Abandono temprano y educación superior

| País | Abandono escolar temprano 18-24, % | Población 25-34 con estudios superiores (ISCED 5-8), % |
|---|---|---|
| **España** | 12.8 (2025) [#2/13] | 52.5 (2025) [#6/13] |
| Alemania | 13.1 (2025) [#1/13] | 40.9 (2025) [#11/13] |
| Francia | 7.2 (2025) [#7/13] | 55.8 (2025) [#4/13] |
| Italia | 8.2 (2025) [#5/13] | 31.1 (2025) [#13/13] |
| Países Bajos | 7.4 (2025) [#6/13] | 56.1 (2025) [#3/13] |
| Polonia | 4.0 (2025) [#11/13] | 45.2 (2025) [#9/13] |
| Portugal | 6.1 (2025) [#9/13] | 42.5 (2025) [#10/13] |
| Irlanda | 3.6 (2025) [#13/13] | 66.8 (2025) [#1/13] |
| Suecia | 6.7 (2025) [#8/13] | 53.6 (2025) [#5/13] |
| Dinamarca | 10.0 (2025) [#3/13] | 52.5 (2025) [#7/13] |
| Finlandia | 9.9 (2025) [#4/13] | 38.2 (2025) [#12/13] |
| Noruega | 3.8 (2025) [#12/13] | 56.8 (2025) [#2/13] |
| Grecia | n/d | n/d |
| Reino Unido | n/d | n/d |
| EE. UU. | n/d | n/d |
| Canadá | n/d | n/d |
| Japón | n/d | n/d |
| Corea del Sur | n/d | n/d |
| Australia | n/d | n/d |
| Suiza | 5.5 (2025) [#10/13] | 50.6 (2025) [#8/13] |
| Singapur | n/d | n/d |
| Israel | n/d | n/d |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Eurostat edat_lfse_14 y edat_lfse_03](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_14)
Media UE-27 2025: abandono 9,1 %; superiores 25-34 44,8 %. Gasto educativo % PIB: n/d (WB solo devolvió Singapur 2,2 % 2024; Eurostat/OCDE Education at a Glance no consultados). Países no europeos: n/d.

## Bloque 4. Fiscalidad, deuda, demografía

### Takeaway
España tiene deuda pública de 100,5 % del PIB (2025) y déficit de 2,4 %, mejor que Francia (-5,1 %), Polonia (-7,2 %) y Finlandia, peor que Portugal, Irlanda, Grecia, Dinamarca (superávit). Fecundidad 1,10 (2024), la más baja de los países UE comparados; edad mediana 45,8 años (2025), segunda tras Italia.

### Cited Findings

### 4.1 Deuda y saldo de las AAPP (Eurostat, S13)

| País | Deuda bruta, % PIB | Saldo, % PIB (negativo = déficit) |
|---|---|---|
| **España** | 100.5 (2025) [#4/12] | -2.4 (2025) [#7/12] |
| Alemania | 62.8 (2025) [#7/12] | -2.9 (2025) [#8/12] |
| Francia | 115.7 (2025) [#3/12] | -5.1 (2025) [#11/12] |
| Italia | 136.7 (2025) [#2/12] | -3.1 (2025) [#9/12] |
| Países Bajos | 44.7 (2025) [#9/12] | -1.6 (2025) [#5/12] |
| Polonia | 59.6 (2025) [#8/12] | -7.2 (2025) [#12/12] |
| Portugal | 89.2 (2025) [#5/12] | 0.7 (2025) [#4/12] |
| Irlanda | 34.8 (2025) [#11/12] | 1.8 (2025) [#3/12] |
| Suecia | 35.1 (2025) [#10/12] | -1.6 (2025) [#6/12] |
| Dinamarca | 27.2 (2025) [#12/12] | 2.9 (2025) [#1/12] |
| Finlandia | 88.4 (2025) [#6/12] | -3.8 (2025) [#10/12] |
| Noruega | n/d | n/d |
| Grecia | 145.4 (2025) [#1/12] | 2.0 (2025) [#2/12] |
| Reino Unido | n/d | n/d |
| EE. UU. | n/d | n/d |
| Canadá | n/d | n/d |
| Japón | n/d | n/d |
| Corea del Sur | n/d | n/d |
| Australia | n/d | n/d |
| Suiza | n/d | n/d |
| Singapur | n/d | n/d |
| Israel | n/d | n/d |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Eurostat gov_10dd_edpt1](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/gov_10dd_edpt1)
Media UE-27 2025: deuda 81,5 %; saldo -3,1 %. Noruega y Suiza n/d. Países no UE: n/d (FMI WEO no consultado). Referencia no comparable: saldo de la administración CENTRAL 2024 (Banco Mundial GC.NLD.TOTL.GD.ZS): Canadá -1,2; Suiza +0,5; Corea -1,8; Reino Unido -6,9; EE. UU. -7,2; Israel -8,2; Singapur +3,4; Noruega +13,6 (cifras de gobierno central, no AAPP).

### 4.2 Demografía

| País | Fecundidad (hijos/mujer; Eurostat UE+NO+CH, Banco Mundial resto) | Edad mediana de la población |
|---|---|---|
| **España** | 1.10 (2024) [#20/22] | 45.8 (2025) [#2/13] |
| Alemania | 1.36 (2024) [#11/22] | 45.5 (2025) [#4/13] |
| Francia | 1.61 (2024) [#3/22] | 42.8 (2025) [#8/13] |
| Italia | 1.18 (2024) [#17/22] | 49.1 (2025) [#1/13] |
| Países Bajos | 1.43 (2024) [#9/22] | 42.6 (2025) [#9/13] |
| Polonia | 1.14 (2024) [#19/22] | 43.4 (2025) [#6/13] |
| Portugal | 1.27 (2024) [#13/22] | 45.6 (2025) [#3/13] |
| Irlanda | 1.47 (2024) [#6/22] | 39.6 (2025) [#13/13] |
| Suecia | 1.43 (2024) [#10/22] | 41.2 (2025) [#11/13] |
| Dinamarca | 1.47 (2024) [#7/22] | 42.2 (2025) [#10/13] |
| Finlandia | 1.25 (2024) [#14/22] | 43.5 (2025) [#5/13] |
| Noruega | 1.45 (2024) [#8/22] | 40.8 (2025) [#12/13] |
| Grecia | 1.24 (2024) [#16/22] | n/d |
| Reino Unido | 1.55 (2024) [#4/22] | n/d |
| EE. UU. | 1.63 (2024) [#2/22] | n/d |
| Canadá | 1.25 (2024) [#15/22] | n/d |
| Japón | 1.15 (2024) [#18/22] | n/d |
| Corea del Sur | 0.75 (2024) [#22/22] | n/d |
| Australia | 1.48 (2024) [#5/22] | n/d |
| Suiza | 1.29 (2024) [#12/22] | 42.9 (2025) [#7/13] |
| Singapur | 0.97 (2024) [#21/22] | n/d |
| Israel | 2.87 (2024) [#1/22] | n/d |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Eurostat demo_find y demo_pjanind](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_find); [Banco Mundial SP.DYN.TFRT.IN](https://api.worldbank.org/v2/country/KOR/indicator/SP.DYN.TFRT.IN?format=json&mrv=1)
Media UE-27 edad mediana 2025: 44,9. Presión fiscal total % PIB (OCDE Revenue Statistics): n/d; el indicador del Banco Mundial GC.TAX.TOTL.GD.ZS es solo gobierno central y no sirve para comparar. Gasto en pensiones % PIB y tasa de reemplazo (Pensions at a Glance 2025): n/d, no se accedió a la publicación.

## Bloque 5. Vivienda y energía

### Takeaway
En energía España destaca por alta dependencia de importaciones (78,4 % de la energía usada, 2024) pero cuota renovable eléctrica sólida (60,7 % en 2025). Vivienda: solo se verificó la sobrecarga (tabla 2.1); precio/renta y esfuerzo de alquiler quedan n/d.

### Cited Findings

### 5.1 Energía

| País | Renovables en generación eléctrica, % (Banco Mundial EG.ELC.RNEW.ZS, 2021, todos los países) | Cuota renovable en consumo eléctrico, % (Eurostat nrg_ind_ren, 2025) | Importaciones netas de energía, % del uso (Banco Mundial EG.IMP.CONS.ZS; negativo = exportador neto) |
|---|---|---|---|
| **España** | 47.0 (2021) [#8/22] | 60.7 (2025) [#5/12] | 78.4 (2024) [#8/22] |
| Alemania | 39.8 (2021) [#12/22] | 57.9 (2025) [#6/12] | 70.3 (2024) [#10/22] |
| Francia | 22.8 (2021) [#16/22] | 33.1 (2025) [#11/12] | 41.8 (2024) [#15/22] |
| Italia | 41.0 (2021) [#9/22] | 43.5 (2025) [#9/12] | 79.2 (2024) [#7/22] |
| Países Bajos | 33.1 (2021) [#14/22] | 54.7 (2025) [#8/12] | 88.4 (2024) [#3/22] |
| Polonia | 17.5 (2021) [#19/22] | 32.5 (2025) [#12/12] | 46.8 (2024) [#13/22] |
| Portugal | 64.9 (2021) [#6/22] | 65.6 (2025) [#3/12] | 74.2 (2024) [#9/22] |
| Irlanda | 37.2 (2021) [#13/22] | 41.7 (2025) [#10/12] | 87.2 (2024) [#5/22] |
| Suecia | 67.4 (2021) [#4/22] | 89.2 (2025) [#1/12] | 27.7 (2024) [#17/22] |
| Dinamarca | 79.0 (2021) [#2/22] | 77.7 (2025) [#2/12] | 44.5 (2024) [#14/22] |
| Finlandia | 52.9 (2021) [#7/22] | 56.6 (2025) [#7/12] | 33.9 (2024) [#16/22] |
| Noruega | 99.1 (2021) [#1/22] | n/d | -729.0 (2024) [#22/22] |
| Grecia | 40.6 (2021) [#10/22] | 60.9 (2025) [#4/12] | 93.5 (2024) [#2/22] |
| Reino Unido | 40.2 (2021) [#11/22] | n/d | 47.6 (2024) [#12/22] |
| EE. UU. | 20.3 (2021) [#18/22] | n/d | -9.8 (2024) [#19/22] |
| Canadá | 67.0 (2021) [#5/22] | n/d | -95.0 (2024) [#20/22] |
| Japón | 21.1 (2021) [#17/22] | n/d | 87.3 (2024) [#4/22] |
| Corea del Sur | 6.7 (2021) [#21/22] | n/d | 83.2 (2024) [#6/22] |
| Australia | 26.7 (2021) [#15/22] | n/d | -211.2 (2024) [#21/22] |
| Suiza | 67.9 (2021) [#3/22] | n/d | 48.0 (2024) [#11/22] |
| Singapur | 4.0 (2021) [#22/22] | n/d | 293.9 (2024) [#1/22] |
| Israel | 7.6 (2021) [#20/22] | n/d | 4.7 (2024) [#18/22] |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Banco Mundial](https://api.worldbank.org/v2/country/ESP/indicator/EG.ELC.RNEW.ZS?format=json&mrv=1), [Eurostat nrg_ind_ren](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_ind_ren)
Media UE-27 renovables 2025: 49,9 %. Noruega excluida de la columna Eurostat: la API devuelve 122,0 %, valor >100 que se considera no interpretable sin la metodología (normalización). Precios de electricidad hogares/industria (Eurostat nrg_pc_204/205): n/d, consulta fallida por dimensiones no válidas.

## Bloque 6. Instituciones, libertad económica y seguridad

### Takeaway
España es 25.ª de 143 en WJP 2025 (0,71) y 53.ª de 176 en Heritage 2026 (66,8): rango medio-alto en Estado de derecho pero tras todos los nórdicos, anglosajones y germánicos de la lista, y por delante de Francia en libertad económica, Italia y Grecia.

### Cited Findings

### 6.1 Estado de derecho y libertad económica

| País | WJP Rule of Law 2025: puesto/143 y puntuación (0-1) | Heritage Economic Freedom 2026: puesto/176 y puntuación |
|---|---|---|
| **España** | #25, 0.71 (2025) | #53, 66.8 (2026) |
| Alemania | #6, 0.83 (2025) | #24, 71.7 (2026) |
| Francia | #22, 0.72 (2025) | #65, 64.6 (2026) |
| Italia | #34, 0.66 (2025) | #73, 63.3 (2026) |
| Países Bajos | #9, 0.82 (2025) | #10, 78.5 (2026) |
| Polonia | #32, 0.66 (2025) | #40, 68.5 (2026) |
| Portugal | #29, 0.67 (2025) | #27, 71.2 (2026) |
| Irlanda | #8, 0.82 (2025) | #3, 83.3 (2026) |
| Suecia | #4, 0.85 (2025) | #11, 77.8 (2026) |
| Dinamarca | #1, 0.90 (2025) | #7, 79.0 (2026) |
| Finlandia | #3, 0.87 (2025) | #13, 76.6 (2026) |
| Noruega | #2, 0.89 (2025) | #8, 78.8 (2026) |
| Grecia | #48, 0.60 (2025) | #75, 63.2 (2026) |
| Reino Unido | #14, 0.78 (2025) | #29, 70.4 (2026) |
| EE. UU. | #27, 0.68 (2025) | #22, 72.8 (2026) |
| Canadá | #13, 0.79 (2025) | #14, 75.6 (2026) |
| Japón | #15, 0.78 (2025) | #30, 70.3 (2026) |
| Corea del Sur | #19, 0.74 (2025) | #19, 73.7 (2026) |
| Australia | #11, 0.80 (2025) | #4, 80.1 (2026) |
| Suiza | no cubierto en el índice 2025 | #2, 83.7 (2026) |
| Singapur | #16, 0.78 (2025) | #1, 84.4 (2026) |
| Israel | no cubierto en el índice 2025 | #41, 68.4 (2026) |

Fuentes: [WJP Rule of Law Index 2025 (PDF oficial)](https://worldjusticeproject.org/rule-of-law-index/downloads/WJPIndex2025.pdf) (143 países; Suiza e Israel no figuran en la tabla de ranking leída) y [Heritage 2026 Index of Economic Freedom, Highlights (PDF oficial)](https://static.heritage.org/index/pdf/2026/2026_indexofeconomicfreedom_highlights.pdf) (176 países). Los puestos son los oficiales mundiales. Estados Unidos tiene en WJP el #27 (0,68). Fraser y B-READY: n/d. Eficiencia judicial CEPEJ (duración de procesos): n/d.

### 6.2 Seguridad: homicidios por 100.000

| País | Homicidios intencionales, Banco Mundial/UNODC |
|---|---|
| **España** | 0.7 (2023) [#13/19] |
| Alemania | 0.9 (2023) [#6/19] |
| Francia | 1.3 (2023) [#3/19] |
| Italia | 0.6 (2023) [#16/19] |
| Países Bajos | 0.7 (2023) [#12/19] |
| Polonia | 0.8 (2023) [#10/19] |
| Portugal | n/d |
| Irlanda | 0.7 (2023) [#14/19] |
| Suecia | 1.1 (2023) [#4/19] |
| Dinamarca | 0.8 (2023) [#8/19] |
| Finlandia | 1.0 (2023) [#5/19] |
| Noruega | 0.7 (2023) [#11/19] |
| Grecia | 0.8 (2023) [#9/19] |
| Reino Unido | n/d |
| EE. UU. | 5.8 (2023) [#1/19] |
| Canadá | 2.0 (2023) [#2/19] |
| Japón | 0.2 (2023) [#18/19] |
| Corea del Sur | 0.5 (2023) [#17/19] |
| Australia | 0.9 (2023) [#7/19] |
| Suiza | 0.6 (2023) [#15/19] |
| Singapur | 0.1 (2023) [#19/19] |
| Israel | n/d |

Puesto = orden de mayor a menor valor entre los países con dato (#1 = valor más alto; no implica juicio de mejor/peor). Fuente: [Banco Mundial VC.IHR.PSRC.P5](https://api.worldbank.org/v2/country/ESP/indicator/VC.IHR.PSRC.P5?format=json&mrv=1) (fuente UNODC, año 2023)
Eurostat crim_off_cat (2024, ICCS 0101, por 100.000): España 0,72; Italia 0,57; Suiza 0,50; Países Bajos 0,67; Portugal 0,68; Irlanda 0,69; Polonia 0,69; Noruega 0,70; Grecia 0,78; Alemania 0,83; Dinamarca 0,87; Suecia 0,87; Francia 1,28; Finlandia 1,78 ([Eurostat](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/crim_off_cat)). Población reclusa y policías por 100.000: n/d (consultas sin resultado utilizable). Reino Unido, Portugal e Israel: sin dato en Banco Mundial 2023.

## Modelos de referencia por dimensión y diferencia estructural

### Takeaway
Solo con datos verificados aquí: Países Bajos, Dinamarca, Irlanda y Noruega aparecen repetidamente como referencia en AROPE bajo, Estado de derecho y libertad económica; Irlanda y Polonia en abandono y PISA; Francia y Países Bajos en educación superior y fecundidad. Las diferencias estructurales son inferencias de estos datos, no hallazgos de una fuente única.

### Cited Findings
- Pobreza y desigualdad: Polonia (AROPE 15,0 %; Gini 24,9), Países Bajos (15,8 %; 25,9; AROPE infantil 12,7 %), Noruega (16,1 %; Gini 23,7), Dinamarca (AROPE infantil 14,8 %) frente a España 25,7 %, Gini 30,8 y AROPE infantil 33,8 % — [Eurostat 2025](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_peps01n)
- Educación: Irlanda (PISA lectura 516, abandono 3,6 %, superiores 25-34 66,8 %), Polonia (abandono 4,0 %), Japón y Corea (PISA mates 536/527), Singapur (575) frente a España 473, abandono 12,8 % — [Eurostat](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_14), PISA 2022 vía [Wikipedia/OCDE](https://en.wikipedia.org/w/index.php?title=Programme_for_International_Student_Assessment&action=raw)
- Instituciones: Dinamarca, Noruega, Finlandia, Suecia (WJP #1-#4), Irlanda y Países Bajos (#8, #9) — [WJP 2025](https://worldjusticeproject.org/rule-of-law-index/downloads/WJPIndex2025.pdf)
- Libertad económica: Singapur (#1), Suiza (#2), Irlanda (#3), Australia (#4), Dinamarca (#7), Países Bajos (#10) — [Heritage 2026](https://static.heritage.org/index/pdf/2026/2026_indexofeconomicfreedom_highlights.pdf)
- Finanzas públicas: Dinamarca (deuda 27,2 %, superávit 2,9 %), Irlanda (34,8 %; +1,8 %), Suecia (35,1 %), Países Bajos (44,7 %) frente a España 100,5 % — [Eurostat](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/gov_10dd_edpt1)
- Fecundidad: Francia 1,61 (2024) frente a España 1,10 — [Eurostat](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_find)
- Renta por habitante: Irlanda, Singapur, Suiza, Noruega, EE. UU., Países Bajos, Dinamarca lideran PPA (ver 1.1) — [Banco Mundial](https://api.worldbank.org/v2/country/ESP/indicator/NY.GDP.PCAP.PP.CD?format=json&mrv=1)

### Inferences
- Renta: la brecha de PIB per cápita PPA con Países Bajos/Dinamarca (unos 27.000 USD, 2025) coincide con peor mercado de trabajo (paro 10,3 % ya verificado) y más pobreza infantil; hace falta productividad por hora (n/d) para separar horas trabajadas, empleo y productividad.
- Educación: el patrón de España es abandono alto con muchas titulaciones superiores en 25-34: sugiere polarización de niveles (muchos universitarios y muchos sin secundaria superior) frente a Irlanda/Polonia, con ambas colas más cortas.
- Estado de derecho y libertad económica: España está en la zona media-alta (#25 WJP, #53 Heritage) pero lejos del grupo nórdico-irlandés; esto señala calidad institucional pero no explica sola el diferencial.
- Modelos por dimensión sugeridos (5-6): Países Bajos (pobreza baja, WJP, libertad económica), Dinamarca (instituciones, finanzas públicas, AROPE infantil), Irlanda (educación, libertad económica, finanzas), Polonia (AROPE, abandono; convergencia de renta), Finlandia (PISA ciencia 511, WJP) y Corea del Sur/Japón (PISA, esperanza de vida alta). Esta selección es inferencia.

### Gaps
- Sin verificar (n/d en todas las celdas): productividad por hora; salario medio/mediano; pobreza relativa OCDE; esperanza de vida saludable; gasto educativo % PIB; presión fiscal total; gasto en pensiones y tasa de reemplazo; precio vivienda/renta y esfuerzo de alquiler; precios de electricidad; Harvard Atlas ECI; % empresas >250 empleados; universidades top 200; Fraser; CEPEJ; B-READY; población reclusa; policías por 100.000.
- Cobertura parcial: Fortune Global 500 (solo top-10 países); gasto sanitario; salario mínimo (solo 7 países); media OCDE de PISA.
- Fuentes bloqueadas o fallidas en el entorno: OECD SDMX (HTTP 500), oecd.org (403), worldjusticeproject.org páginas web (sin contenido; se usó el PDF), statranker (403), Heritage web (sin tabla; se usó el PDF).
- Datos de países no europeos en Eurostat: no existen; requieren OCDE.
- Los puestos #x/N son cálculos propios sobre muestras de 22 países y cobertura desigual; no equivalen a rankings oficiales.
