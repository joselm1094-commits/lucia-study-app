# Programa electoral de SALF (Se Acabó la Fiesta) para las generales del 29N de 2026

Fecha de la investigación: 20-nov-2026. Fuente primaria leída entera: "Contrato Electoral Simplificado. Generales 2026" (PDF de 42 páginas, creado el 10-nov-2026 según los metadatos). Lo descargué con curl de la copia alojada por [The Objective](https://theobjective.com/wp-content/uploads/2026/11/salf.pdf) y lo extraje con pdftotext. Carpeta de trabajo: `/tmp/claude-0/-home-user-lucia-study-app/54b369fb-1327-5fa6-a42a-f56c36e4550e/scratchpad/salfpdf/salf.txt`.

Convención de páginas: la numeración impresa en el pie de cada página coincide con la página del PDF (la portada es la 1). Marco con **[LIT p.X]** el texto literal del documento o su contenido directo. Marco con **[PRENSA]** lo que cuenta un medio. Marco con **[INF]** mi inferencia o valoración jurídica y económica, que no procede de ninguna fuente citada.

Corrección importante respecto a la investigación anterior: el "Contrato electoral 29N" **sí está publicado**, desde al menos el 10-nov-2026. The Objective lo enlaza el 10-nov y Canal 4 Diario resume su contenido el 13-nov. Las dos investigaciones previas del repositorio (`Diagnóstico España y programas 29N.md`, línea 185) lo daban por no publicado, y esa conclusión ya no es válida.

---

## 1. ¿Existe un programa completo del 29N? Dónde, fecha, extensión y estructura

### Takeaway
Existe un documento oficial de 42 páginas titulado "Contrato Electoral Simplificado", fechado el 10-nov-2026. Se organiza en 10 bloques temáticos con 10 "compromisos" de portada y 111 medidas numeradas, más una página de reforma del Gobierno y una tabla de financiación. Es "simplificado": el cierre remite a un "contrato completo" en la web, que no pude abrir.

### Cited Findings
- Título literal: "CONTRATO ELECTORAL SIMPLIFICADO · GENERALES 2026 · 29 DE NOVIEMBRE DE 2026". La contraportada dice: "SEACABOLAFIESTA.COM · El contrato completo, las cifras y su cumplimiento, actualizado" — [LIT pp.1 y 42](https://theobjective.com/wp-content/uploads/2026/11/salf.pdf)
- Metadatos del PDF: 42 páginas, creado con Adobe Illustrator el 10-nov-2026. The Objective publicó el 10-nov-2026 a las 15:41 la noticia que enlaza el PDF — [The Objective](https://theobjective.com/espana/politica/2026-11-10/alvise-megacarcel-diputado/)
- Estructura [LIT pp.2-41], con el número de medidas que conté en cada bloque: Gobierno (pp.2-3, rediseño del Ejecutivo), 10 compromisos (p.4), I Vivienda (10 medidas, pp.5-7), II Seguridad (11, pp.8-11), III Impuestos (13, pp.12-15) más "Cómo se paga" (p.16), IV Inmigración (10, pp.17-19), V Pensiones (10, pp.20-22), VI Sanidad (12, pp.23-25), VII Corrupción (14, pp.26-30), VIII Empleo (10, pp.31-33), IX Educación (10, pp.34-36), X Geopolítica (11, pp.37-41). Suma: **111 medidas numeradas** (conteo propio).
- Cada medida lleva un titular, un párrafo breve y, con frecuencia, una cifra de coste o ahorro ("Coste: ≈ X M€/año"). Hay que distinguir lo que el documento afirma de lo que verifica: los datos de contexto y las cifras de coste son del partido y no traen fuente ni metodología en el PDF.
- Las 10 compromisos de portada [LIT p.4]: 1 Vivienda (primera casa un 35 % más barata, okupa fuera en 48 h), 2 Seguridad (macrocárcel sin tercer grado para corruptos y criminales), 3 Impuestos (nadie paga IRPF por los primeros 35.000 euros), 4 Inmigración (solo legal, expulsión en 48 h, paralización total de inmigración de países no colaboradores), 5 Pensiones ("Reforma urgente contra el sistema fraudulento actual"), 6 Sanidad (central de compras, 60 días para operarte), 7 Corrupción (imprescriptible, sin tercer grado, "devuelves el triple", denunciante cobra el 15 %), 8 Empleo (cuña fiscal del 41 al 29 %, contrato único con mochila, fin de la cuota de autónomos), 9 Educación (ley de 20 años, castellano garantizado, el dinero sigue al alumno), 10 Geopolítica (referéndum de renegociación europea, bloqueo comercial a Marruecos, ley antiterrorista contra los Hermanos Musulmanes).
- Discrepancia sobre el número de medidas: la web oficial y varios agregadores hablan de "119 medidas y 10 compromisos" según el resultado de búsqueda (no pude abrir la web oficial, que devuelve 403 a WebFetch y curl). Mi conteo sobre el PDF es 111. No pude reconciliar la diferencia; puede que la web cuente medidas del contrato "completo" o subapartados (p.ej. las del bloque de Gobierno).
- Cláusula de penalización personal: según The Objective, el 100 % del sueldo público de Alvise quedaría bloqueado en el Banco de España y se penalizaría si vota en contra de sus compromisos; también propone sueldo variable para los diputados según su voto — [The Objective](https://theobjective.com/espana/politica/2026-11-10/alvise-megacarcel-diputado/). Otras fuentes de búsqueda hablan de comparar sus votos con las medidas en 2030 y de que, si no se vota el 100 %, el dinero iría al Estado (resumen de búsqueda de [Política Electoral](https://www.politicaelectoral.com/es/espana/generales-2026/nacional/se-acabo-la-fiesta), no leído directamente). **El PDF que leí (42 pp.) no contiene esa cláusula**; la información viene de prensa y de la web.
- Un agregador (DatosClaros) usó solo el resumen de Canal 4 Diario del 13-nov (13 medidas en 6 áreas) y lo marca "Pendiente de confirmar con la fuente original"; no localizó propuesta de empleo — [DatosClaros](https://www.datosclaros.es/comparador-de-programas-29n/). El PDF sí trae un bloque de Empleo completo, de modo que ese agregador está incompleto.
- No pude abrir la web oficial (403) ni el PDF del dominio oficial (403 por curl). Un resultado de búsqueda sitúa el PDF en `seacabolafiesta.com/SALF_Contrato_Electoral_29N.pdf`. Asumo que la copia de The Objective es el mismo documento, porque coincide con el contenido que reproducen Canal 4 y The Objective, pero no pude compararlas byte a byte.

### Inferences
- [INF] El documento es un programa en sentido pleno para efectos de comparación (cubre fiscalidad, Estado, justicia, inmigración, pensiones, sanidad, educación, empleo y exterior), pero con lagunas que se detallan en la sección 2.
- [INF] El formato mezcla medidas, estadísticas de contexto y eslóganes; cada afirmación numérica de contexto (p.ej. "52.000 M€ al año de tu casa a sus presupuestos") es del partido y no se puede verificar en el propio documento.

### Gaps
- Contenido de la web oficial y del "contrato completo" (no accesible: 403).
- Origen de las 119 medidas frente a las 111 que conté.
- Existencia de documentos programáticos intermedios o del programa de las europeas de 2024: no hallé un texto accesible (ver sección 6).

---

## 2. Contenido por áreas (literal con página) y lagunas

### Takeaway
El documento es detallado y cuantificado en fiscalidad, Estado, vivienda, pensiones, sanidad e inmigración. **Guarda silencio** sobre OTAN, reforma electoral, democracia directa interna, RTVE, modelo territorial más allá de financiación y supresión de diputaciones, y política energética más allá del IVA. Propone referéndum sobre la UE (no sobre el euro).

### Cited Findings
**Estado y Gobierno [LIT pp.2-3, 16, 30]**
- Ministerios 22 → 10 ("Doce ministerios desaparecen el primer día"), vicepresidencias 3 → 1 (económica: Hacienda, Economía y Empleo), secretarías de Estado 35 → 15, direcciones generales 128 → 70, altos cargos 823 → 450, asesores 1.255 → 400, entes estatales 452 → 300 (p.3). "Ahorro directo mínimo de 300 millones de euros" (p.3).
- Fuera el Senado, el Consejo de Estado, los CES, la publicidad institucional y las subvenciones a sindicatos y patronal; "Partidos: 50 % menos"; límite de 15 años en cargos públicos remunerados (p.30). Las ONG solo aparecen en la prohibición de financiación extranjera a "ONG que hagan política" (p.41); no hay un recorte general de subvenciones a ONG ni mención del término "chiringuitos".
- Supresión de las diputaciones provinciales (1.500 M€ de ahorro) y gestión mancomunada obligatoria en municipios de menos de 5.000 habitantes (3.000 M€) (p.16).
- Ahorro de 500 M€ agrupado para "Senado, Consejo de Estado, CES, publicidad institucional, subvenciones a partidos, sindicatos y patronal, asesores" (p.16).

**Fiscalidad [LIT pp.12-16]**
- IRPF: mínimo exento de 35.000 € con calendario 15.000 (2027), 22.000 (2028), 28.000 (2029), 35.000 (2030), con reducción gradual hasta 50.000; hoy 5.550 €; coste ≈ 43.000 M€/año en 2030 (p.12). +5.000 € de mínimo por hijo y progenitor (≈ 5.500 M€) (p.12). Deflactación anual por ley (p.12).
- Autónomos: eliminación total de la cuota ("206 € → 0"), coste ≈ 12.000 M€/año, "lo que hoy recauda el RETA"; IVA de caja (p.13). Sociedades 25 % → 20 % en dos años, 15 % si se reinvierte, 10 % a startups tres años (≈ 6.000 M€) (p.13).
- Sucesiones, Donaciones y Patrimonio suprimidos, "también el impuesto a las grandes fortunas" (≈ 3.500 M€) (p.13). IVA de la luz 21 % → 4 % y agua 10 % → 4 %, más supresión del impuesto a la producción eléctrica (≈ 2.600 M€) (p.13). IBI eliminado por completo, sin compensación, con pérdida municipal de ≈ 13.400 M€/año "que los ayuntamientos absorben con ahorro" (p.7).
- Efectivo sin límite: se deroga el tope de 1.000 € y "España vetará el de 10.000 que impone Bruselas desde 2027"; el euro digital "nunca sustituirá ni condicionará al efectivo" (p.15). El documento **no propone salir del euro** ni cambiar de moneda.
- Reglas: "un euro de rebaja, un euro de ahorro certificado por la AIReF", "Déficit cero en 2030" (p.13); toda subida de impuestos exigirá tres quintos del Congreso "(reforma constitucional)" (p.14); reforma constitucional para techo a la presión fiscal y a la deuda con "tipos penales constitucionalmente blindados" (p.15); el 50 % de los inspectores fiscales se dedicarán a investigar políticos, cargos públicos y empresas subvencionadas (p.14).
- Financiación ("Cómo se paga", p.16): rebaja fiscal total en 2030 ≈ 80.000 M€; ahorro identificado 83.800 M€; 3.800 M€ a reducir deuda. Desglose: sobrecoste autonómico por duplicidades 57.000; entes públicos 3.000; gestión mancomunada 3.000; contratación electrónica 5.000; diputaciones 1.500; inmigración 1.000; Senado, etc. 500; supresión de ministerios 300; "efectos dinámicos" 8.000; ayuda al desarrollo 4.500.
- Financiación autonómica: criterios objetivos iguales para todas las comunidades, oposición a condonaciones de deuda salvo catástrofe (p.14). No hay propuesta de modelo concreto ni de cuantías.

**Vivienda [LIT pp.5-7]**
- ITP y AJD al 0 %, IVA al 4 % devuelto íntegro en la renta, licencia en plazo y suelo público sin coste; "el comprador de primera vivienda paga, como mínimo, un 35 % menos que hoy" por ley; coste ≈ 5.000 M€/año, "lo paga el sobrecoste autonómico" (p.5). Ley de neutralidad: la recaudación por vivienda no puede crecer más que el IPC (p.5).
- Desalojo de okupas en 48 h con denuncia y título; inquiokupa en 30 días "sin excusas de vulnerabilidad" (p.5).
- Suelo de la Sareb y del Estado a concurso en 12 meses para vivienda protegida en propiedad (meta 100.000 viviendas en obra en 2030) (p.6). Licencia en un mes, dos o tres según tamaño, con silencio positivo y el ayuntamiento paga el retraso; licencia automática en 15 días para vivienda industrializada en suelo público y urbano consolidado con "estándar técnico único" (meta 150.000 viviendas/año en 2030) (pp.6-7). SOCIMI con más de 100 viviendas tributan al 25 % (p.6). Aval público del 20 % de la entrada para menores de 40 (garantía 2.000 M€); seguro público de impago de alquiler 12 meses (≈ 150 M€/año); registro único de alquiler turístico "sin prohibiciones" (pp.6-7). Cita 755.000 viviendas que faltan en núcleos urbanos (p.5).

**Seguridad y justicia [LIT pp.8-11, 26-29]**
- Macrocárcel de máxima seguridad (≈ 3.000 M€ "pagados con lo decomisado al narco y al crimen organizado"); cumplimiento íntegro; prisión permanente revisable por violación a menores o con lesiones graves; "tres condenas: prisión sin suspensión" (p.8). Registro público de agresores sexuales, pulsera de por vida y castración química "voluntaria" como condición de beneficios (p.9). Extranjeros condenados cumplen la pena en terceros países, con veto de por vida (ahorro ≈ 500 M€) (p.9).
- Equiparación salarial de Guardia Civil y Policía con los mossos (+7.500 €/año), jubilación a los 60 (p.9); Plan Estrecho (180 M€) (p.10); mili voluntaria 6-12 meses, 1.600 € netos, 30.000 plazas, ≈ 1.200 M€/año, más exención de IRPF de 50.000 € durante diez años para quien la complete, ≈ 250 M€ (p.10).
- 2.000 jueces y 1.500 fiscales más, juicios rápidos en 72 h para multirreincidentes y flagrantes, expediente digital único (≈ 400 M€/año); cita 11 jueces por 100.000 habitantes frente a 23 en Europa (pp.8, 11). Presunción legal de legítima defensa en vivienda o negocio, incluido el uso de armas legalmente tenidas; licencia de arma para defensa del domicilio sin trabas (p.11). Policía judicial "blindada": la injerencia política es delito (p.11).

**Corrupción y reforma institucional [LIT pp.26-30]**
- Imprescriptibilidad de cohecho, malversación, prevaricación, tráfico de influencias y financiación ilegal de cargos públicos (p.26). Sin tercer grado, sin indulto, sin permisos (p.26). Responsabilidad civil del triple, decomiso de patrimonio no justificado, funcionario condenado pierde la plaza, empresa corruptora 15 años sin contratar con el Estado (p.27). El denunciante cobra el 15 % de lo recuperado, libre de impuestos, con anonimato y autoridad independiente (p.27).
- Reforma constitucional para prohibir amnistías y condicionar indultos (informe favorable del CGPJ o de un órgano ad hoc), con prohibición del indulto a políticos corruptos y tipos penales para su uso político; "antes de esta reforma, una única excepción: indultaremos a José Manuel Lomas" (p.27).
- Fiscal General elegido por tres quintos del Congreso entre fiscales con 25 años de carrera, mandato de seis años (p.28). Supresión del Tribunal Constitucional (control en una sala del Supremo elegida por jueces, antigüedad o sorteo) (p.28). CGPJ sin influencia política: elección por jueces, antigüedad y/o sorteo, y delito por dar o recibir instrucciones a un juez (p.28). Acción popular blindada en la Constitución (p.29). Fin de los aforamientos mediante reforma constitucional "presentada el primer día" (p.29). Puertas giratorias: 5 años de incompatibilidad (p.29). Contratación pública electrónica (5.000 M€ de ahorro) y publicación de todo gasto superior a 1.000 € en 24 h (pp.30). Cita 47.500 M€/año de sobrecoste en contratos sin competencia (p.26).
- **No hay** propuesta de obligación de declarar patrimonio con regla nueva ni inhabilitación específica distinta del "pierde la plaza para siempre"; el programa no menciona un registro patrimonial de políticos ni una agencia anticorrupción con ese nombre, salvo la "autoridad independiente" para denunciantes.

**Inmigración [LIT pp.17-19]**
- Expulsión en 48 h tras identificación, 100 % de órdenes ejecutadas en 90 días, internamiento hasta la expulsión (≈ 300 M€) (p.17). Derogar la regularización de 2026, revisar concesiones, prohibir por ley orgánica toda regularización masiva (p.17). "Readmisión o nada": sin fondos, visados ni preferencias comerciales a Marruecos, Argelia, Senegal o Mauritania si no readmiten en 72 h, y veto a acuerdos europeos que no lo exijan (p.17).
- "Moratoria total, durante toda la legislatura" a la inmigración de países que no colaboran contra las mafias ni readmiten; para el resto, solo visados con contrato previo y cupo anual votado (p.18). Cupos preferentes para Hispanoamérica; nacionalidad a los 10 años con examen (p.18). Pérdida de residencia con condena superior a un año; pérdida de nacionalidad de dobles nacionales por terrorismo, crimen organizado o delitos sexuales graves (p.18). Prueba radiológica y dental obligatoria a menores antes de ingresar en un centro (p.18).
- Ilegalizar a los Hermanos Musulmanes y Hamás, prohibir la financiación extranjera del culto, registro público de donaciones, expulsar a imanes que prediquen contra la Constitución (p.19). Prohibición del velo integral (p.19). Sin ayudas no contributivas ni vivienda pública sin cinco años de residencia legal y cotización; tasa del 2 % a remesas a países que no readmiten (ahorro ≈ 1.000 M€) (p.19).
- El PDF **no usa el término "remigración"** ni propone deportaciones masivas de residentes legales. La expresión "deportaciones masivas" de la investigación previa (oct-2025) no aparece en este documento; hay "expulsión" de quien tiene orden de expulsión, internamiento, y revisión individual de regularizaciones.

**Pensiones [LIT pp.20-22]**
- Revalorización con IPC y prohibición de recortes con rango constitucional (p.20). Sistema mixto: para menores de 45, 2 % del salario a cuenta individual obligatoria, heredable, comisión máxima 0,3 %; coste de transición ≈ 6.000 M€/año hasta 2030 (p.20). "Mochila austriaca" del 1,53 % a cargo de la empresa (p.21). Jubilación activa total y jubilación libre con 40 años cotizados (p.21). Pensión mínima de 1.000 € (14 pagas) con 35 años cotizados, ≈ 2.000 M€/año (p.21). Fuera pensiones de políticos y complemento parlamentario (p.21). Fondo de Reserva gestionado por un fondo soberano independiente (p.22). Libertad de base de cotización para autónomos (p.22). Publicación mensual de cotizaciones y transferencias del Estado y calendario de pago de la deuda de la Seguridad Social (p.22).
- Cita: pensiones pasan del 13 % al 17 % del PIB en 2050 "si nadie hace nada" (p.20).

**Sanidad [LIT pp.23-25]**
- Central única de compras (ahorro de 6.000 M€, 15 % de 41.000 M€) (p.23). 60 días para cirugía, 30 para especialista, 7 para pruebas prioritarias; superado el plazo, el paciente elige centro público o privado y paga la sanidad pública (≈ 1.500 M€/año) (p.23). Subida del 20 % a médicos y 10 % a otros profesionales en cuatro años y 30.000 € de complemento en plazas rurales (≈ 5.500 M€/año "lo paga la central de compras") (p.23). 10.000 camas y 1.500 UCI más (≈ 3.000 M€) (p.24). Cita en 48 h, historia clínica única (300 M€ una vez), tarjeta sanitaria para "españoles y residentes legales con cotización o cobertura", "urgencias para todos, siempre" (pp.24). Copago cero para pensiones mínimas y crónicos, gratuidad de fármacos hasta los 3 años, salud mental en 15 días, gerentes por concurso con mandato de cinco años, test de paternidad gratuito al nacer (pp.24-25).

**Empleo [LIT pp.31-33]**
- Cuña fiscal del 41 al 29 % (≈ 2.600 M€/año); contrato único indefinido con indemnización creciente de 12 a 33 días más mochila; autónomos con cuota cero y licencia de actividad en 24 h (p.31). Alta por las mutuas en contingencias comunes a los 15 días con revisión del INSS en 72 h (ahorro ≈ 2.000 M€) (p.32). FP dual con salario del 50 % del convenio y cotización cero dos años por contratar a menores de 30 y mayores de 50 (≈ 1.500 M€) (p.32). "Una norma entra, dos salen" para regulación que afecte a empresas (p.32). Baja por enfermedad pagada por la Seguridad Social desde el día 1 (≈ 3.000 M€) (p.32). Los fijos discontinuos cuentan como parados cuando no trabajan; oposiciones anónimas; fin de la prestación tras rechazar dos ofertas adecuadas; el Ingreso Mínimo baja 50 céntimos por cada euro ganado (p.33).
- **No hay propuesta sobre salario mínimo** (solo "cero cotización del trabajador en el salario mínimo", p.31) ni sobre jornada laboral ni despido objetivo más allá del contrato único.

**Educación [LIT pp.34-36]**
- Ley educativa "para 20 años" aprobada por dos tercios y blindada (p.34). Castellano garantizado con Alta Inspección sancionadora; selectividad única y en castellano (p.34). MIR docente (400 M€) (p.34); +10 % de sueldo docente (≈ 2.500 M€) (p.35); FP desde los 15 (p.35); cheque escolar de igual importe en pública, concertada y privada (8.293 € por alumno) (p.35); Consejo Académico independiente fija contenidos, neutralidad ideológica obligatoria y prohibición de propaganda de partidos y sindicatos en el aula (p.35); mismo temario de Historia en toda España (p.36); beca-salario de 2.000 € para FP superior con déficit (400 M€); inglés B2 al acabar Bachillerato (250 M€) (p.36).

**Geopolítica y Europa [LIT pp.37-41]**
- "Referéndum de renegociación europea; y de salida, si Bruselas se niega": primer referéndum de renegociación; si Bruselas rechaza renegociar, "segundo referéndum: la salida" (p.37). El documento no menciona salir del euro y defiende la permanencia del efectivo frente al euro digital (p.15).
- Veto a Mercosur, al recorte de la PAC y al Pacto Verde en el Consejo; cita Mercosur "se aplica desde mayo de 2026" (p.37). Ley antiterrorista con penas máximas "por la mera pertenencia" a los Hermanos Musulmanes y otras redes de radicalización islámica (p.38). Bloqueo comercial total a Marruecos si bloquea un puerto español o usa la inmigración como "ataque híbrido"; "reivindicación de los territorios del Rif" si el Parlamento marroquí no rechaza reivindicaciones sobre Ceuta, Melilla y Canarias (p.38). Exención de IRPF 2026 para ceutíes (≈ 150 M€) (p.39). Gibraltar: cosoberanía como primer paso (p.39). Sáhara: vuelta a la posición de la ONU y tratado de amistad con Argelia (p.39). Comunidad Hispánica de naciones (p.40). Defensa: gasto del 2 % del PIB con prioridad a industria nacional, retribuciones de militares equiparadas a la Guardia Civil, nueva Ley de la carrera militar (≈ 1.200 M€/año) (p.40). Ley de agentes extranjeros y prohibición de financiación extranjera de partidos, fundaciones, medios y ONG que hagan política (p.41). Ayuda oficial al desarrollo (4.550 M€) cortada salvo emergencias y programas con retorno (p.41).

**Temas que el programa NO menciona (búsqueda de términos en el texto completo)**
- OTAN: no aparece (solo "Defensa" en la p.40, con el 2 % del PIB sin nombrar la Alianza).
- Reforma electoral (listas abiertas, circunscripción única, voto electrónico): no aparece.
- Democracia directa interna (referéndums vinculantes, revocatorias): el único referéndum es el europeo (p.37).
- RTVE: no aparece (solo "televisión pública infantil" en versión original, p.36).
- Modelo territorial: no hay propuesta de recentralización explícita ni de supresión de autonomías; sí supresión de diputaciones, financiación igual para todas las CCAA y castellano garantizado. Tampoco nombra el nacionalismo salvo en "socios separatistas" (p.14).
- Energía: solo IVA de luz y agua, impuesto a la producción eléctrica y la organización del ministerio (p.3); no hay política nuclear, renovables ni precios.
- Salir del euro, monarquía, cambio de régimen: no aparecen.
- Patrimonio de políticos con regla de declaración nueva: no aparece. Sí hay pensiones de políticos y decomiso de patrimonio no justificado.

### Inferences
- [INF] En volumen, el documento prioriza rebajas fiscales y recorte del Estado; la financiación depende de una sola partida (57.000 M€ de "sobrecoste autonómico", 68 % del ahorro identificado).
- [INF] Varias medidas de la portada se redactan como resultado garantizado por ley (p.ej. "un 35 % menos"), lo que es un objetivo y no un instrumento.

### Gaps
- No encontré el texto de la web oficial ni del "contrato completo".
- El documento no incluye calendario para la mayoría de medidas (sí lo hay para el IRPF, la dotación de plazas, plazos legales de licencias y algunas metas a 2030).

---

## 3. Cuantificación, calendario, financiación y rango normativo (resumen por medida clave)

### Takeaway
Casi todas las medidas fiscales y de gasto traen coste en M€/año; pocas traen calendario. Más de una docena requieren **reforma constitucional**; otras requieren ley orgánica, o chocan con normas de la UE o del Derecho internacional. Todas las valoraciones jurídicas son mías [INF], con base en la Constitución y el Derecho de la UE conocidos, no en fuentes recién leídas.

### Cited Findings
Cuantificadas en el programa [LIT]: IRPF (43.000 M€, 2027-2030, p.12), cuota de autónomos (12.000 M€, p.13), sociedades (6.000 M€), sucesiones/patrimonio (3.500 M€), IVA luz y agua (2.600 M€), IBI (13.400 M€), vivienda primera compra (5.000 M€), mili (1.200 + 250 M€), justicia (400 M€), sanidad (múltiples), educación (múltiples), geopolítica (150 M€ y 1.200 M€). No cuantificadas: reforma de pensiones más allá de la transición (6.000 M€ hasta 2030) y los efectos de la moratoria migratoria, la supresión del TC, o el bloqueo comercial a Marruecos. Sin calendario: la mayoría de las medidas (ver p.12 para IRPF; p.6 para suelo a 12 meses; p.28 y p.29 "reforma presentada el primer día").

Medidas que el propio documento declara de rango constitucional o de ley orgánica [LIT]: tres quintos para subir impuestos "(reforma constitucional)" (p.14); techo constitucional de presión fiscal y deuda (p.15); pensiones y su revalorización en la Constitución (p.20); prohibición de amnistías y límites a indultos (p.27); supresión del TC (p.28); CGPJ (p.28); acción popular (p.29); fin de aforamientos (p.29); ley orgánica contra regularizaciones masivas (p.17); referéndum de salida UE (p.37).

### Inferences
Valoración jurídica [INF], con cautela porque no leí los textos legales en esta sesión:
- **Reforma constitucional por el art. 167 CE (3/5 más posible referéndum)**: supresión del Senado y del TC, aforamientos de diputados y senadores (art. 71), techo de impuestos y deuda, pensiones constitucionalizadas, prohibición de amnistía, 3/5 para subir impuestos, elección del CGPJ. Es coherente con la propia hoja de ruta del informe previo, que ya clasificó las piezas por 167 o ley orgánica; SALF las plantea todas a la vez. El `Mejor modelo político` previo califica la viabilidad del aforamiento del art. 71 y del CGPJ por 167 como Baja o Media-baja, y ve en las reformas por un solo bloque un riesgo de legitimidad. Esto aplica a este paquete.
- **Choque con el Derecho de la UE o internacional**: (a) límite de efectivo: el tope de 10.000 € procede de un reglamento europeo de prevención del blanqueo, directamente aplicable; España no puede "vetarlo" unilateralmente una vez aprobado, y derogar el tope nacional de 1.000 € es posible pero queda sujeto a ese reglamento. (b) Mercosur y PAC: son competencia de la UE decidida por mayoría cualificada o unanimidad según el acto; un "veto" español no es unilateral. (c) Moratoria total de inmigración "durante toda la legislatura": choca con el derecho de asilo y la reagrupación familiar protegidos por el Derecho de la UE y el internacional; solo sería viable limitada a migración económica. (d) Expulsión en 48 h con internamiento hasta la expulsión: choca con la Directiva de retorno, los plazos máximos de internamiento y las garantías judiciales de la CE. (e) Pérdida de nacionalidad de dobles nacionales: la CE impide privar de la nacionalidad a los españoles de origen. (f) Ilegalizar los Hermanos Musulmanes y aplicar la ley antiterrorista "por mera pertenencia": la lista terrorista de la UE la decide el Consejo, y la "mera pertenencia" a una organización no designada plantea problemas de tipicidad. (g) Referéndum de salida: una salida de la UE se rige por el art. 50 TUE, es decir, el Gobierno no podría imponer ni garantizar el resultado de una "renegociación" y la UE no tiene obligación de renegociar; la CE no prevé un referéndum de renegociación vinculante.
- **Medidas con difícil encaje o riesgo de constitucionalidad**: presunción legal de legítima defensa con inversión de la carga de la prueba (tensión con la presunción de inocencia y la proporcionalidad); castración química (voluntaria, pero condicionando beneficios); "devuelves el triple" (proporcionalidad); imprescriptibilidad de delitos de corrupción (posible por ley orgánica, pero excepcional en el Derecho español); prohibición del indulto (el indulto está regulado por ley preconstitucional; la CE prohíbe solo los generales).
- **Viables por ley ordinaria u orgánica en principio**: ITP/AJD y IVA devuelto, licencias y silencio positivo (competencias municipales y autonómicas; hace falta cooperación autonómica), aval público, SOCIMI al 25 %, deflactación, IRPF, sociedades, cuota de autónomos, central de compras (acuerdo con 17 CCAA), plazos máximos de espera, más jueces y fiscales, contratación electrónica, mochila austriaca, contrato único, cheque escolar, prohibición del velo integral (el TEDH avaló la ley francesa).
- **Cuestiones de competencia autonómica**: sucesiones, patrimonio, sanidad, educación, vivienda y licencias dependen de comunidades y ayuntamientos; la medida del IBI es financiación municipal (art. 142 CE) y el programa pide a los ayuntamientos que absorban 13.400 M€ "con ahorro".

### Gaps
- No hay valoración independiente del paquete fiscal ni jurídico (ver sección 5).

---

## 4. Contraste con la evidencia de las investigaciones previas

### Takeaway
Hay piezas que coinciden con lo que la evidencia previa respalda (licencias y suelo, contratación pública, sobrecoste de contratos, independencia fiscal, aceleración judicial, transparencia). Hay otras que contradicen el criterio de proporcionalidad y de baja fragmentación de vetos (supresión del TC, 3/5 para impuestos). No tengo evidencia que respalde las cifras de ahorro autonómico ni la caída de homicidios atribuida a la macrocárcel.

### Cited Findings
- Contratación: el informe previo cita sobrecoste de 40.000-48.000 M€ en contratos sin competencia (CNMC) y propone reforzar la competencia y la independencia de la OIReScon ([CNMC](https://www.cnmc.es/2017-01-18-la-cnmc-intensifica-su-esfuerzo-en-la-persecucion-de-las-irregularidades-en-los), vía `Mejor modelo político para España.md`, fila 12). SALF cita 47.500 M€/año (p.26) y propone plataforma única, subasta inversa y publicación (p.30); la cifra de SALF cae en el rango de la CNMC, aunque el ahorro de 5.000 M€ que asigna es suyo, sin método.
- Calidad regulatoria: el informe previo sitúa a España en 0,56 en calidad regulatoria WGI 2024, la peor de 15 países, y recoge la unidad de mercado como palanca. SALF propone "una norma entra, dos salen" y unidad de mercado (p.32) y estándar técnico único en vivienda (p.7); la regla de dos por una no tiene evidencia en las notas previas [INF].
- Justicia lenta: el informe previo recoge 444 días en justicia civil frente a 247 de la UE (CEPEJ). SALF ofrece más jueces y fiscales y expediente digital (p.11) y cita 225 días de duración penal (p.11, sin fuente); los 72 horas se limitan a multirreincidentes y flagrantes.
- Integridad y nombramientos: el informe previo propone Fiscal General con mandato fijo no coincidente con la legislatura y CGPJ con filtro, y advierte del riesgo de exceso de vetos (3/5) que reproduzca el bloqueo del CGPJ. SALF propone Fiscal General con 3/5 y mandato de 6 años (p.28), lo que coincide en el mandato y se arriesga en la mayoría reforzada.
- Aforamientos: el informe previo califica la reforma del art. 71 como de viabilidad baja y sin datos; SALF cuenta 17.621 aforados (p.26) sin fuente.
- Pensiones: el informe previo y `Diagnóstico` no recogieron una evaluación de sostenibilidad de cuentas individuales; la cuestión de la transición (doble pago) no se trata en el programa más allá de 6.000 M€/año hasta 2030 (p.20) [INF].
- Vivienda (oferta): SALF recoge la falta de oferta (755.000 viviendas) y propone oferta de suelo y licencias; pero la medida principal (ITP/AJD 0 %, IVA devuelto, aval del 20 %) actúa sobre la demanda y puede capitalizarse en precio si la oferta no responde [INF, supuesto estándar de economía de la vivienda sin fuente de esta sesión]. Un blog especializado critica que las promesas de vivienda de SALF son "sin letra pequeña" — [Hablando de Hipotecas](https://hablandodehipotecas.com/blog/elecciones-2026-vivienda-salf) (solo titular visto; no leído).
- Representación y democracia: no hay propuesta electoral, por lo que no se puede contrastar con la evidencia previa sobre listas desbloqueadas o proporcionalidad; la propuesta de reforma del sistema es institucional (justicia, aforamientos, TC), no de sistema electoral.

### Inferences
- [INF] Clasificación resumida:
  - **Respaldadas por la evidencia previa o plausibles**: contratación pública electrónica y transparencia de gasto; límites a puertas giratorias; independencia del Fiscal General con mandato fijo; más medios judiciales; central de compras sanitaria (la estimación de ahorro es del partido); suelo público y licencias con plazos.
  - **Viables pero con dudas de eficacia**: rebaja de impuestos a la vivienda sin aumento previo de oferta; mochila austriaca y cuenta individual sin estudio de transición; cheque escolar.
  - **Chocan con la Constitución, la UE o el Derecho internacional**: ver sección 3 (moratoria de inmigración, expulsión en 48 h, pérdida de nacionalidad de origen, veto unilateral a normas UE, referéndum de salida con efecto jurídico automático, TC suprimido sin reforma agravada).
  - **Sin respaldo en la evidencia reunida**: 57.000 M€ de ahorro autonómico; caída de homicidios "105 → 1" atribuida a un modelo de macrocárcel (p.8) sin fuente; "efectos dinámicos" de 8.000 M€ contados como ahorro (p.16).

### Gaps
- No leí en esta sesión los informes del AIReF, CNMC ni normativa para contrastar cada medida; las cifras previas proceden de las notas previas.

---

## 5. Valoraciones independientes (AIReF, Fedea, Funcas, verificadores)

### Takeaway
No encontré ninguna valoración de AIReF, Fedea, Funcas, Newtral ni Maldita sobre el contrato de SALF de 2026. El único contraste disponible es de agregadores que no evalúan.

### Cited Findings
- Búsquedas dirigidas a AIReF, Fedea y Funcas no devolvieron análisis del contrato de SALF; los resultados fueron licitaciones de la AIReF y un artículo académico de Funcas de 2021 sin relación — resultado de búsqueda (sin enlace útil).
- Búsqueda dirigida a Newtral y Maldita sobre promesas de SALF: sin verificaciones del contrato; solo aparecen notas de prensa y blogs — resultado de búsqueda.
- DatosClaros declara en su metodología que no hace evaluaciones y que no ofrece estimaciones de coste ni viabilidad para SALF — [DatosClaros](https://www.datosclaros.es/comparador-de-programas-29n/)
- Un blog de vivienda afirma que SALF "no tiene programa nacional" y que sus posiciones son parcialmente concretas; es una fuente desactualizada respecto al PDF del 10-nov — [Hablando de Hipotecas](https://hablandodehipotecas.com/blog/elecciones-2026-vivienda-salf) (extracto de búsqueda).
- El propio programa invoca a la AIReF como certificadora del ahorro previo a cada bajada de impuestos (p.13); no consta que la AIReF haya aceptado ese papel ni que lo haya evaluado [INF por ausencia de resultados].

### Inferences
- [INF] Una estimación mínima con los datos del propio programa: la suma de costes de la portada fiscal (43.000 + 5.500 + 12.000 + 6.000 + 3.500 + 2.600 + 13.400 de IBI municipal) supera 86.000 M€, es decir, por encima de los 80.000 M€ declarados, aunque parte del IBI es de entes locales y puede computarse aparte. Es aritmética mía sobre cifras del partido, no una auditoría.

### Gaps
- Ninguna valoración independiente. Conviene volver a buscar en Newtral, Maldita, Fedea y AIReF más adelante, por si publican durante la campaña.

---

## 6. Programa de las europeas de 2024 y coherencia con las votaciones

### Takeaway
No pude acceder al programa europeo de 2024 de SALF; solo hay datos de votaciones y asistencia de prensa. La coherencia entre promesas y votos no se puede evaluar sistemáticamente con lo hallado.

### Cited Findings
- Newtral (feb-2025): Alvise asistió a 20 de los 36 plenos con votaciones en sus primeros siete meses y en su primera votación votó en contra de la ayuda financiera para la reconstrucción de Ucrania — resumen de búsqueda de [Newtral](https://www.newtral.es/alvise-parlamento-europeo/20250219/) (la página dio 403 a WebFetch; solo conozco el extracto).
- VoteWatch/Votemap: 3.649 de 5.887 votaciones (62,0 %) con 1.457 a favor, 1.413 en contra y 561 abstenciones — [Votemap](https://votemap.eu/en/mep/257019) (extracto de búsqueda).
- El Español (oct-2024): votó en contra de recortar los privilegios de los eurodiputados y de enviar ayuda económica a Ucrania — [El Español](https://www.elespanol.com/espana/politica/20241024/alvise-vota-recortar-privilegios-eurodiputados-enviar-ayuda-economica-ucrania/895910634_0.html) (solo titular).
- Periodista Digital (ago-2025, medio crítico, afirmaciones del propio medio): el sorteo de su sueldo íntegro se hizo una vez el 25-ago-2024 (ganó un seguidor más de 8.000 €) y se interrumpió por motivos fiscales; faltó a 16 de 38 jornadas clave (≈ 42 %); el Supremo investiga 100.000 € recibidos en efectivo en la campaña; el Parlamento le sancionó con dos días de dietas por ocultar ingresos; su partido no recibió subvención por no presentar cuentas — [Periodista Digital](https://www.periodistadigital.com/politica/20250826/sigue-contando-alvise-perez-ano-promesas-electorales-incumplidas-noticia-689405125467/)
- Inmunidad: el Parlamento Europeo levantó su inmunidad en mayo de 2026 y EFE Verifica indicó que la votación no estuvo dividida — [Swissinfo/EFE Verifica](https://www.swissinfo.ch/spa/no-es-cierto-que-la-votaci%C3%B3n-sobre-la-inmunidad-de-alvise-p%C3%A9rez-estuviera-dividida/91453101) (titular).
- Un resultado indica que SALF en el Parlamento Europeo estaba en No Inscritos y que Alvise dejaría de ser eurodiputado cuando se convocaran generales — [Aquí Europa](http://aquieuropa.com/se-acabo-la-fiesta-en-los-no-inscritos-y-alvise-dejara-de-ser-eurodiputado-cuando-se-convoquen-elecciones-generales/) (titular; no verificado).
- Incoherencia posible entre el contrato y la práctica: el contrato propone fin de los privilegios de políticos (pensiones, escoltas), y el voto contra recortar privilegios de eurodiputados (El Español) apunta a una tensión [INF], aunque sin leer los detalles del voto.

### Inferences
- [INF] Las cifras de asistencia de Newtral (20/36), Votemap (62 % de votos registrados) y Periodista Digital (58 % de jornadas) no son comparables entre sí por metodología y fecha distintas.

### Gaps
- Programa europeo de 2024 de SALF: no localizado en texto. No hay contraste promesa a promesa.
- Newtral y Maldita: no pude leer los artículos íntegros (403), solo extractos.
- Votaciones del PE sobre migración, Pacto Verde, Mercosur o PAC (temas que el contrato recoge) no consultadas; hacen falta para medir coherencia con p.37.
- Documentos programáticos intermedios (2025-2026) no localizados salvo el programa autonómico de Aragón (feb-2026) citado por DatosClaros.

---

## Fuentes principales
- Contrato Electoral Simplificado SALF, 42 pp. (copia en [The Objective](https://theobjective.com/wp-content/uploads/2026/11/salf.pdf)); web oficial seacabolafiesta.com (403 al acceder).
- [The Objective, 10-nov-2026](https://theobjective.com/espana/politica/2026-11-10/alvise-megacarcel-diputado/)
- [DatosClaros](https://www.datosclaros.es/comparador-de-programas-29n/)
- [Periodista Digital, 26-ago-2025](https://www.periodistadigital.com/politica/20250826/sigue-contando-alvise-perez-ano-promesas-electorales-incumplidas-noticia-689405125467/)
- Informes previos del repositorio: `reports/Mejor modelo político para España.md`, `reports/Diagnóstico España y programas 29N.md`.
