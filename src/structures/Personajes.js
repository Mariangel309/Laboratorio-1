import { NodoB } from './NodoB.js';
import { ArbolB } from './ArbolB.js';
import { Sanciones } from './Sanciones.js';

// ─────────────────────────────────────────────────────────────────────────────
//  RANGOS
//  Día 1: principal=1,  sec1=11,11, sec2=12,12, inocentes=-53,-54,-55,-56,-57
//  Día 2: principal=2,  sec1=21,21, sec2=22,22, inocentes=-43,-44,-45,-46,-47
//  Día 3: principal=4,  sec1=41,41, sec2=42,42, inocentes=-23,-24,-25,-26,-27
//  Día 4: principal=5,  sec1=51,51, sec2=52,52, inocentes=-13,-14,-15,-16,-17
//  Día 5: principal=3,  sec1=31,31, sec2=32,32, inocentes=-33,-34,-35,-36,-37
//
//  ORDEN ABB
//  Abril=0, Alma=-25, Adam=25, Ana=-40, Allison=-10
//  Camilo=63, Clara=5, Sofia=16, Diego=20, Cora=75, Dani=85
//  Eva=-3, Fabio=8, Irene=27, Isabel=35, Isacc=50
//  Leo=-5, Lina=-1, Lucas=6, Luis=11, Luisa=23, Ronald=29
//  Rosa=33, Ruben=38, Sara=48, Sofia=16
//  Mia=-7, Nico=-4, Nora=-2, Oscar=1, Paula=7
//  Tomas=26, Tyler=31, Valen=34, Violeta=36, Zoe=39
// 

// IDS DE DISPOSITIVO
//Abril=D01, Adam=D02, Allison=D03, Alma=D04, Ana=D05
//Camilo=D06, Clara=D07, Cora=D08, Dani=D09, Diego=D10
//Eva=D11, Fabio=D12, Irene=D13, Isabel=D14, Isacc=D15
//Leo=D16, Lina=D17, Lucas=D18, Luis=D19, Luisa=D20
//Ronald=D21, Rosa=D22, Ruben=D23, Sara=D24, Sofia=D25

//Mia=D16,  Nico=D16   (cuentas falsas de Leo)
//Nora=D17, Oscar=D17  (cuentas falsas de Lina)
//Paula=D18            (cuenta falsa de Lucas)
//Tomas=D21, Tyler=D21 (cuentas falsas de Ronald)
//Valen=D22, Violeta=D22 (cuentas falsas de Rosa)
//Zoe=D23              (cuenta falsa de Ruben)
// ─────────────────────────────────────────────────────────────────────────────

// =========================================================
//  DÍA 1
// =========================================================
const Abril = new NodoB(5, 'Abril', true,
    '"eres lo peor que le ha pasado a este colegio, en serio. todos hablan de ti y ninguno dice nada bueno. ojalá nunca hubieras llegado aquí." /// Det. Alex: cuenta con actividad sostenida dirigida exclusivamente hacia la víctima. Se le ha visto interactuando frecuentemente con los perfiles de Alma y Adam en el período analizado.',
    1, 1, Sanciones[1][0], true, 0, 'D01');

const Adam = new NodoB(5, 'Adam', true,
    '"jajaja otra vez publicando como si alguien te fuera a dar like 💀 qué sad la vida" /// Det. Alex: responde consistentemente al contenido de Abril. Parece conocer a Camilo y Sofia, con quienes comparte grupos en común.',
    11, 1, Sanciones[1][1], true, 25, 'D02');

const Allison = new NodoB(5, 'Allison', true,
    '"alguien le dijo que sus fotos son un chiste? porque yo necesito que alguien se lo diga 😭😭" /// Det. Alex: comentarios coordinados con Alma. Parece ser amiga cercana de Ana, aparecen juntas en varios hilos del caso.',
    11, 1, Sanciones[1][1], true, -10, 'D03');

const Alma = new NodoB(5, 'Alma', true,
    '"[reacción 😂 en 23 publicaciones de la víctima] [compartió 8 sin texto propio]" /// Det. Alex: sin mensajes directos pero sigue de cerca la actividad de Abril. Se le ha visto relacionándose con Ana y Allison fuera del caso.',
    12, 1, Sanciones[1][2], true, -25, 'D04');

const Ana = new NodoB(5, 'Ana', true,
    '"[reacción 😂 en 19 publicaciones de la víctima] ni un comentario propio en todo el período" /// Det. Alex: perfil silencioso pero presente en cada incidente. Parece seguir las acciones de Alma de forma sistemática.',
    12, 1, Sanciones[1][2], true, -40, 'D05');

const Andres = new NodoB(5, 'Andres', false,
    '"oye te mandé mensaje ayer, ¿estás bien? vi lo del grupo y me pareció muy feo" /// Det. Alex: un único mensaje hacia la víctima de carácter solidario. Sin presencia en los grupos relacionados.',
    -53, 1, null, false, null, 'D26');

const Anthony = new NodoB(5, 'Anthony', false,
    '"[sin interacción directa con la víctima. aparece en listas de contactos compartidos]" /// Det. Alex: sin actividad relevante. Conexión indirecta con perfiles del caso.',
    -54, 1, null, false, null, 'D27');

const Ben = new NodoB(5, 'Ben', false,
    '"oigan ya párenle, eso no está bien" /// Det. Alex: único comentario registrado, de carácter disuasivo. No volvió a interactuar con el grupo.',
    -55, 1, null, false, null, 'D28');

const Bruno = new NodoB(5, 'Bruno', false,
    '"[captura enviada a coordinación del colegio con el texto: \'profe mire esto\']" /// Det. Alex: no participó en los incidentes. Aportó evidencia de forma voluntaria.',
    -56, 1, null, false, null, 'D29');

const Camila = new NodoB(5, 'Camila', false,
    '"[sin publicaciones ni comentarios en el período. aparece como espectadora en varios hilos]" /// Det. Alex: presencia pasiva sin participación activa. Sin mensajes hacia la víctima ni hacia los agresores.',
    -57, 1, null, false, null, 'D30');

// =========================================================
//  DÍA 2
// =========================================================
const Camilo = new NodoB(5, 'Camilo', true,
    '"miren esto que publicó, alguien que me explique cómo esta persona tiene amigos todavía 😭 el chiste se cuenta solo" /// Det. Alex: publicación con alto nivel de difusión. Parece conocer a Adam, con quien comparte contactos. Se le ha visto relacionándose con Clara y Diego.',
    2, 2, Sanciones[2][0], true, 63, 'D06');

const Clara = new NodoB(5, 'Clara', true,
    '"no puedo creer que siga aquí después de todo jajaja, el descaro tiene nombre y apellido" /// Det. Alex: actividad coordinada con Camilo. Parece ser amiga de Eva, con quien interactúa frecuentemente fuera del caso.',
    21, 2, Sanciones[2][1], true, 5, 'D07');

const Cora = new NodoB(5, 'Cora', true,
    '"yo no entiendo cómo sus amigas no le dicen nada, qué pena ajena con ellas también" /// Det. Alex: mensajes dirigidos al entorno de la víctima. Parece conocer a Sofia, con quien comparte grupos. Se le ha visto relacionándose con Irene e Isabel.',
    21, 2, Sanciones[2][1], true, 75, 'D08');

const Dani = new NodoB(5, 'Dani', true,
    '"[compartió publicación principal sin texto, en 4 grupos distintos del colegio]" /// Det. Alex: alto alcance de distribución. Parece seguir instrucciones de Sofia. Se le ha visto relacionándose con Isacc.',
    22, 2, Sanciones[2][2], true, 85, 'D09');

const Diego = new NodoB(5, 'Diego', true,
    '"[reacción en 31 publicaciones. un comentario: \'exactamente lo que todos piensan\']" /// Det. Alex: participación mayormente pasiva. Parece conocer a Camilo. Se le ha visto interactuando con Fabio y Luis fuera del caso.',
    22, 2, Sanciones[2][2], true, 20, 'D10');

const Dylan = new NodoB(5, 'Dylan', false,
    '"borré eso de mi perfil apenas lo vi, no me parece" /// Det. Alex: eliminó contenido relacionado al caso. Sin participación activa en los incidentes.',
    -43, 2, null, false, null, 'D31');

const Elena = new NodoB(5, 'Elena', false,
    '"[sin interacción documentada con el contenido del caso]" /// Det. Alex: aparece en listas de contactos compartidos pero sin actividad relevante.',
    -44, 2, null, false, null, 'D32');

const Emma = new NodoB(5, 'Emma', false,
    '"[recibió el contenido reenviado pero no lo distribuyó]" /// Det. Alex: receptor pasivo sin redistribución. Sin mensajes hacia la víctima.',
    -45, 2, null, false, null, 'D33');

const Eric = new NodoB(5, 'Eric', false,
    '"esto ya se fue de las manos, alguien debería hacer algo" /// Det. Alex: comentario aislado sin seguimiento. Sin participación en los grupos de coordinación.',
    -46, 2, null, false, null, 'D34');

const Ethan = new NodoB(5, 'Ethan', false,
    '"[captura del hilo principal enviada a directivas con fecha y hora]" /// Det. Alex: aportó documentación al caso de forma proactiva. Sin vínculos con los perfiles agresores.',
    -47, 2, null, false, null, 'D35');


// =========================================================
//  DÍA 3
// =========================================================
const Eva = new NodoB(5, 'Eva', true,
    '"¿saben por qué sacó tan buenas notas últimamente? porque los exámenes no llegaron solos a sus manos, pregúntenle a ella" /// Det. Alex: publicación sin pruebas adjuntas. Parece ser amiga de Clara. Se le ha visto relacionándose con Fabio y Leo fuera del caso.',
    4, 3, Sanciones[3][0], true, -3, 'D11');

const Fabio = new NodoB(5, 'Fabio', true,
    '"les mando la conversación donde ella misma lo admite, juzguen ustedes" /// Det. Alex: distribuyó material cuya autenticidad no pudo verificarse. Parece conocer a Eva y Diego. Se le ha visto relacionándose con Lucas y Luis.',
    41, 3, Sanciones[3][1], true, 8, 'D12');

const Irene = new NodoB(5, 'Irene', true,
    '"yo estaba ahí cuando pasó, no es mentira lo que están diciendo" /// Det. Alex: declaración sin respaldo documental. Parece ser amiga de Cora. Se le ha visto interactuando con Luisa y Ronald en grupos comunes.',
    41, 3, Sanciones[3][1], true, 27, 'D13');

const Isabel = new NodoB(5, 'Isabel', true,
    '"se lo conté a mis papás y ellos ya hablaron con otros papás del curso, esto no se puede quedar así" /// Det. Alex: escaló el contenido hacia el entorno familiar. Parece conocer a Cora. Se le ha visto relacionándose con Rosa y Ruben.',
    42, 3, Sanciones[3][2], true, 35, 'D14');

const Isacc = new NodoB(5, 'Isacc', true,
    '"sí es verdad, varios lo vimos. no sé por qué nadie había dicho nada antes" /// Det. Alex: refuerza versión sin evidencia propia. Parece seguir indicaciones de Dani. Se le ha visto relacionándose con Sara.',
    42, 3, Sanciones[3][2], true, 50, 'D15');

const Jackson = new NodoB(5, 'Jackson', false,
    '"esperen eso no tiene sentido, yo estaba en esa clase y no vi nada raro" /// Det. Alex: contradice la versión circulante. Sin vínculos con los perfiles que iniciaron el rumor.',
    -23, 3, null, false, null, 'D36');

const Joel = new NodoB(5, 'Joel', false,
    '"[recibió las capturas por WhatsApp, no las reenvió]" /// Det. Alex: receptor sin redistribución. Sin actividad en los hilos del caso.',
    -24, 3, null, false, null, 'D37');

const Julia = new NodoB(5, 'Julia', false,
    '"a mí me llegó eso y le dije a quien me lo mandó que no lo siguiera pasando" /// Det. Alex: actuó activamente para frenar la distribución. Sin participación en los incidentes.',
    -25, 3, null, false, null, 'D38');

const Kevin = new NodoB(5, 'Kevin', false,
    '"[sin actividad documentada en el período del caso]" /// Det. Alex: aparece en contactos compartidos. Sin interacción con el contenido circulante.',
    -26, 3, null, false, null, 'D39');

const Laura = new NodoB(5, 'Laura', false,
    '"eso que están mandando está editado, miren bien la fuente del texto" /// Det. Alex: señaló inconsistencias en el material distribuido. Aportó análisis técnico informal al caso.',
    -27, 3, null, false, null, 'D40');

// =========================================================
//  DÍA 4
// =========================================================
const Leo = new NodoB(5, 'Leo', true,
    '"[perfil creado con fotos de la víctima. primeras publicaciones: \'soy una amargada y odio a todos en este colegio\']" /// Det. Alex: cuenta con datos reales de la víctima pero comportamiento inconsistente. Parece conocer a Eva. En sus contactos sigue a Lina y Lucas.',
    5, 4, Sanciones[4][0], true, -5, 'D16');

const Lina = new NodoB(5, 'Lina', true,
    '"[accedió a perfil ajeno. publicó desde él: \'la verdad es que me inventé todo para llamar la atención\']" /// Det. Alex: actividad registrada desde dispositivo distinto al habitual. Parece ser amiga de Eva y Leo. En sus contactos sigue a Nora y Oscar.',
    51, 4, Sanciones[4][1], true, -1, 'D17');

const Lucas = new NodoB(5, 'Lucas', true,
    '"[descargó y redistribuyó 14 fotos del perfil de la víctima en un período de 3 horas]" /// Det. Alex: actividad de extracción masiva. Parece conocer a Fabio y Leo. En sus cuentas sigue a Paula.',
    51, 4, Sanciones[4][1], true, 6, 'D18');

const Luis = new NodoB(5, 'Luis', true,
    '"[proporcionó datos de contacto y ubicación de la víctima a través de mensajes privados]" /// Det. Alex: transferencia de información personal hacia perfiles del caso. Parece conocer a Fabio y Diego.',
    52, 4, Sanciones[4][2], true, 11, 'D19');

const Luisa = new NodoB(5, 'Luisa', true,
    '"[interactuó con el perfil falso: \'jaja típico de ti decir eso\', \'todos sabíamos que pensabas así\']" /// Det. Alex: comentarios que validan el perfil falso. Parece ser amiga de Irene. Se le ha visto relacionándose con Ronald.',
    52, 4, Sanciones[4][2], true, 23, 'D20');

const Mia = new NodoB(5, 'Mia', true,
    '"[cuenta sin historial previo. únicos mensajes: comentarios ofensivos desde perfil que usa la imagen de la víctima]" /// Det. Alex: perfil sin red de contactos previa. Dispositivo coincidente con otro perfil del caso.',
    -13, 4, Sanciones[4][0], true, -7, 'D16');

const Nico = new NodoB(5, 'Nico', true,
    '"[perfil con foto genérica. publicaciones exclusivamente en hilos relacionados con la víctima]" /// Det. Alex: sin actividad fuera del caso. Dispositivo coincidente con otro perfil del caso.',
    -14, 4, Sanciones[4][0], true, -4, 'D16');

const Nora = new NodoB(5, 'Nora', true,
    '"[cuenta creada recientemente. comentarios copiados y pegados en múltiples publicaciones de la víctima]" /// Det. Alex: comportamiento automatizado o coordinado. Dispositivo coincidente con otro perfil del caso.',
    -15, 4, Sanciones[4][1], true, -2, 'D17');

const Oscar = new NodoB(5, 'Oscar', true,
    '"[sin foto de perfil. todos los mensajes enviados en el mismo rango horario que otro perfil del caso]" /// Det. Alex: coincidencia de horarios con perfil relacionado. Dispositivo coincidente con otro perfil del caso.',
    -16, 4, Sanciones[4][1], true, 1, 'D17');

const Paula = new NodoB(5, 'Paula', true,
    '"[perfil con nombre genérico. único contenido: reenvío de material del caso hacia grupos externos]" /// Det. Alex: amplificación fuera del entorno original. Dispositivo coincidente con otro perfil del caso.',
    -17, 4, Sanciones[4][2], true, 7, 'D18');

// =========================================================
//  DÍA 5
// =========================================================
const Ronald = new NodoB(5, 'Ronald', true,
    '"[coordinó envío masivo desde múltiples dispositivos. mensaje tipo: \'todos juntos hasta que desaparezca de aquí\']" /// Det. Alex: organización centralizada. Parece conocer a Irene y Luisa. En sus contactos sigue a Tomas y Tyler.',
    3, 5, Sanciones[5][0], true, 29, 'D21');

const Rosa = new NodoB(5, 'Rosa', true,
    '"si sigues en este colegio te va a ir muy mal, ya sabes. no es una broma." /// Det. Alex: mensaje intimidatorio directo. Parece conocer a Isabel. En sus contactos sigue a Valen y Violeta.',
    31, 5, Sanciones[5][1], true, 33, 'D22');

const Ruben = new NodoB(5, 'Ruben', true,
    '"más te vale que no vayas a hablar con nadie de esto, ya sabes cómo termina la gente que habla de más" /// Det. Alex: presión hacia el entorno de la víctima. Parece conocer a Isabel. En sus contactos sigue a Zoe.',
    31, 5, Sanciones[5][1], true, 38, 'D23');

const Sara = new NodoB(5, 'Sara', true,
    '"[miembro activo de grupo privado. mensajes internos: \'hoy le toca a las 8, mañana a las 10, no paren\']" /// Det. Alex: participación en canal de coordinación. Parece seguir instrucciones de Isacc.',
    32, 5, Sanciones[5][2], true, 48, 'D24');

const Sofia = new NodoB(5, 'Sofia', true,
    '"[invitó a 6 contactos al grupo de coordinación durante el período del caso]" /// Det. Alex: expansión de la red. Parece conocer a Adam. Se le ha visto relacionándose con Cora y Dani.',
    32, 5, Sanciones[5][2], true, 16, 'D25');

const Tomas = new NodoB(5, 'Tomas', true,
    '"[cuenta sin actividad previa. todos los mensajes en ráfagas de 10 en menos de 2 minutos]" /// Det. Alex: velocidad de envío inconsistente con uso humano individual. Dispositivo coincidente con otro perfil del caso.',
    -33, 5, Sanciones[5][2], true, 26, 'D21');

const Tyler = new NodoB(5, 'Tyler', true,
    '"[perfil creado semanas antes del incidente. actividad exclusiva durante el período del caso]" /// Det. Alex: uso puntual y concentrado. Dispositivo coincidente con otro perfil del caso.',
    -34, 5, Sanciones[5][2], true, 31, 'D21');

const Valen = new NodoB(5, 'Valen', true,
    '"[mensajes idénticos enviados desde este perfil y otro del caso en un intervalo de segundos]" /// Det. Alex: operación simultánea probable. Dispositivo coincidente con otro perfil del caso.',
    -35, 5, Sanciones[5][1], true, 34, 'D22');

const Violeta = new NodoB(5, 'Violeta', true,
    '"[únicos comentarios: respuestas de apoyo a mensajes ofensivos de perfiles conocidos del caso]" /// Det. Alex: actividad de refuerzo coordinado. Dispositivo coincidente con otro perfil del caso.',
    -36, 5, Sanciones[5][2], true, 36, 'D22');

const Zoe = new NodoB(5, 'Zoe', true,
    '"[perfil con información mínima. mensajes enviados exclusivamente hacia la víctima y su entorno]" /// Det. Alex: objetivo focalizado. Dispositivo coincidente con otro perfil del caso.',
    -37, 5, Sanciones[5][1], true, 39, 'D23');
// =========================================================
//  REFERENCIAS ABB
// =========================================================
Abril._izqReal   = Alma;     Alma._padreReal   = Abril;
Abril._derReal   = Adam;     Adam._padreReal   = Abril;

Alma._izqReal    = Ana;      Ana._padreReal    = Alma;
Alma._derReal    = Allison;  Allison._padreReal = Alma;

Adam._izqReal    = Camilo;   Camilo._padreReal  = Adam;
Adam._derReal    = Sofia;    Sofia._padreReal   = Adam;

Camilo._izqReal  = Clara;    Clara._padreReal   = Camilo;
Camilo._derReal  = Diego;    Diego._padreReal   = Camilo;

Clara._izqReal   = Eva;      Eva._padreReal     = Clara;
Diego._izqReal   = Fabio;    Fabio._padreReal   = Diego;

Sofia._izqReal   = Cora;     Cora._padreReal    = Sofia;
Sofia._derReal   = Dani;     Dani._padreReal    = Sofia;

Eva._izqReal     = Leo;      Leo._padreReal     = Eva;
Eva._derReal     = Lina;     Lina._padreReal    = Eva;

Fabio._izqReal   = Lucas;    Lucas._padreReal   = Fabio;
Fabio._derReal   = Luis;     Luis._padreReal    = Fabio;

Cora._izqReal    = Irene;    Irene._padreReal   = Cora;
Cora._derReal    = Isabel;   Isabel._padreReal  = Cora;

Dani._izqReal    = Isacc;    Isacc._padreReal   = Dani;

Leo._izqReal     = Mia;      Mia._padreReal     = Leo;
Leo._derReal     = Nico;     Nico._padreReal    = Leo;

Lina._izqReal    = Nora;     Nora._padreReal    = Lina;
Lina._derReal    = Oscar;    Oscar._padreReal   = Lina;

Lucas._derReal   = Paula;    Paula._padreReal   = Lucas;

Irene._izqReal   = Luisa;    Luisa._padreReal   = Irene;
Irene._derReal   = Ronald;   Ronald._padreReal  = Irene;

Isabel._izqReal  = Rosa;     Rosa._padreReal    = Isabel;
Isabel._derReal  = Ruben;    Ruben._padreReal   = Isabel;

Isacc._izqReal   = Sara;     Sara._padreReal    = Isacc;

Ronald._izqReal  = Tomas;    Tomas._padreReal   = Ronald;
Ronald._derReal  = Tyler;    Tyler._padreReal   = Ronald;

Rosa._izqReal    = Valen;    Valen._padreReal   = Rosa;
Rosa._derReal    = Violeta;  Violeta._padreReal = Rosa;

Ruben._derReal   = Zoe;      Zoe._padreReal     = Ruben;

// =========================================================
//  ÍNDICE GLOBAL
// =========================================================
export const TodosLosPersonajes = [
    Abril, Adam, Allison, Alma, Ana, Andres, Anthony, Ben, Bruno, Camila,
    Camilo, Clara, Cora, Dani, Diego, Dylan, Elena, Emma, Eric, Ethan,
    Eva, Fabio, Irene, Isabel, Isacc, Jackson, Joel, Julia, Kevin, Laura,
    Leo, Lina, Lucas, Luis, Luisa, Mia, Nico, Nora, Oscar, Paula,
    Ronald, Rosa, Ruben, Sara, Sofia, Tomas, Tyler, Valen, Violeta, Zoe
];

export const Dias = {
    1: [Abril, Adam, Allison, Alma, Ana, Andres, Anthony, Ben, Bruno, Camila],
    2: [Camilo, Clara, Cora, Dani, Diego, Dylan, Elena, Emma, Eric, Ethan],
    3: [Eva, Fabio, Irene, Isabel, Isacc, Jackson, Joel, Julia, Kevin, Laura],
    4: [Leo, Lina, Lucas, Luis, Luisa, Mia, Nico, Nora, Oscar, Paula],
    5: [Ronald, Rosa, Ruben, Sara, Sofia, Tomas, Tyler, Valen, Violeta, Zoe]
};

const configDias = {
    1: { principales: [Abril], secundariosA: [Adam, Allison], secundariosB: [Alma, Ana], inocentes: [Andres, Anthony, Ben, Bruno, Camila] },
    2: { principales: [Camilo], secundariosA: [Clara, Cora], secundariosB: [Dani, Diego], inocentes: [Dylan, Elena, Emma, Eric, Ethan] },
    3: { principales: [Eva], secundariosA: [Fabio, Irene], secundariosB: [Isabel, Isacc], inocentes: [Jackson, Joel, Julia, Kevin, Laura] },
    4: { principales: [Leo], secundariosA: [Lina, Lucas], secundariosB: [Luis, Luisa], cuentasFalsas: [Mia, Nico, Nora, Oscar, Paula] },
    5: { principales: [Ronald], secundariosA: [Rosa, Ruben], secundariosB: [Sara, Sofia], cuentasFalsas: [Tomas, Tyler, Valen, Violeta, Zoe] }
};

function escogerUno(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function escogerVariosSinRepetir(lista, cantidad) {
    const copia = [...lista];
    const resultado = [];
    for (let i = 0; i < cantidad && copia.length > 0; i++) {
        const idx = Math.floor(Math.random() * copia.length);
        resultado.push(copia[idx]);
        copia.splice(idx, 1);
    }
    return resultado;
}

function mezclarArray(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

let seleccionPartidaActual = {};
export const arbolDias = {};

export function resetPersonajesPartida() {
    seleccionPartidaActual = {};
    Object.keys(arbolDias).forEach(k => delete arbolDias[k]);
}

function generarVectorDia(dia) {
    const cfg = configDias[dia];
    if (!cfg) return [];
    const principal     = escogerUno(cfg.principales);
    const secundarioA   = escogerUno(cfg.secundariosA);
    const secundarioB   = escogerUno(cfg.secundariosB);
    const extras        = cfg.inocentes
        ? escogerVariosSinRepetir(cfg.inocentes, 2)
        : escogerVariosSinRepetir(cfg.cuentasFalsas, 2);
    return mezclarArray([principal, secundarioA, secundarioB, ...extras]);
}

export function vectorDelDia(dia) {
    if (!seleccionPartidaActual[dia])
        seleccionPartidaActual[dia] = generarVectorDia(dia);
    return [...seleccionPartidaActual[dia]];
}

export function construirArbolDia(dia, personajesSeleccionados = null) {
    const arbol  = new ArbolB(5);
    const vector = personajesSeleccionados || vectorDelDia(dia);
    vector.forEach(pj => arbol.insertar(pj));
    arbolDias[dia] = arbol;
    return arbol;
}