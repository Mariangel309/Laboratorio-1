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
// ─────────────────────────────────────────────────────────────────────────────

// =========================================================
//  DÍA 1
// =========================================================
const Abril = new NodoB(5, 'Abril', true,
    '"eres lo peor que le ha pasado a este colegio, en serio. todos hablan de ti y ninguno dice nada bueno. ojalá nunca hubieras llegado aquí." /// Det. Alex: cuenta con actividad sostenida dirigida exclusivamente hacia la víctima. Interacciones iniciadas siempre por este perfil.',
    1, 1, Sanciones[1][0], true, 0);

const Adam = new NodoB(5, 'Adam', true,
    '"jajaja otra vez publicando como si alguien te fuera a dar like 💀 qué sad la vida" /// Det. Alex: responde consistentemente al contenido de la víctima. Sin interacción previa con ella antes del período analizado.',
    11, 1, Sanciones[1][1], true, 25);

const Allison = new NodoB(5, 'Allison', true,
    '"alguien le dijo que sus fotos son un chiste? porque yo necesito que alguien se lo diga 😭😭" /// Det. Alex: comentarios dirigidos específicamente a la víctima. Patrón de aparición coordinado con otros perfiles del caso.',
    11, 1, Sanciones[1][1], true, -10);

const Alma = new NodoB(5, 'Alma', true,
    '"[reacción 😂 en 23 publicaciones de la víctima] [compartió 8 sin texto propio]" /// Det. Alex: sin mensajes directos. Interacción pasiva pero sistemática con el contenido ofensivo.',
    12, 1, Sanciones[1][2], true, -25);

const Ana = new NodoB(5, 'Ana', true,
    '"[reacción 😂 en 19 publicaciones de la víctima] ni un comentario propio en todo el período" /// Det. Alex: perfil silencioso pero presente en cada incidente documentado.',
    12, 1, Sanciones[1][2], true, -40);

const Andres = new NodoB(5, 'Andres', false,
    '"oye te mandé mensaje ayer, ¿estás bien? vi lo del grupo y me pareció muy feo" /// Det. Alex: un único mensaje hacia la víctima de carácter solidario. Sin presencia en los grupos relacionados.',
    -53, 1, null, false, null);

const Anthony = new NodoB(5, 'Anthony', false,
    '"[sin interacción directa con la víctima. aparece en listas de contactos compartidos]" /// Det. Alex: sin actividad relevante hacia la víctima. Conexión indirecta con perfiles del caso.',
    -54, 1, null, false, null);

const Ben = new NodoB(5, 'Ben', false,
    '"oigan ya párenle, eso no está bien" /// Det. Alex: único comentario registrado, de carácter disuasivo. No volvió a interactuar con el grupo.',
    -55, 1, null, false, null);

const Bruno = new NodoB(5, 'Bruno', false,
    '"[captura enviada a coordinación del colegio con el texto: \'profe mire esto\']" /// Det. Alex: no participó en los incidentes. Aportó evidencia de forma voluntaria.',
    -56, 1, null, false, null);

const Camila = new NodoB(5, 'Camila', false,
    '"[sin publicaciones ni comentarios en el período. aparece como espectadora en varios hilos]" /// Det. Alex: presencia pasiva sin participación activa. Sin mensajes hacia la víctima ni hacia los agresores.',
    -57, 1, null, false, null);

// =========================================================
//  DÍA 2
// =========================================================
const Camilo = new NodoB(5, 'Camilo', true,
    '"miren esto que publicó, alguien que me explique cómo esta persona tiene amigos todavía 😭 el chiste se cuenta solo" /// Det. Alex: publicación con alto nivel de difusión. Generó cadena de respuestas en múltiples grupos simultáneamente.',
    2, 2, Sanciones[2][0], true, 63);

const Clara = new NodoB(5, 'Clara', true,
    '"no puedo creer que siga aquí después de todo jajaja, el descaro tiene nombre y apellido" /// Det. Alex: comentarios aparecen en hilos iniciados por otros perfiles del caso. Actividad concentrada en horas específicas.',
    21, 2, Sanciones[2][1], true, 5);

const Cora = new NodoB(5, 'Cora', true,
    '"yo no entiendo cómo sus amigas no le dicen nada, qué pena ajena con ellas también" /// Det. Alex: mensajes dirigidos al entorno de la víctima además de a ella directamente. Patrón de aislamiento identificado.',
    21, 2, Sanciones[2][1], true, 75);

const Dani = new NodoB(5, 'Dani', true,
    '"[compartió publicación principal sin texto, en 4 grupos distintos del colegio]" /// Det. Alex: sin contenido propio pero con alto alcance de distribución. Presencia en grupos de distintos cursos.',
    22, 2, Sanciones[2][2], true, 85);

const Diego = new NodoB(5, 'Diego', true,
    '"[reacción en 31 publicaciones. un comentario: \'exactamente lo que todos piensan\']" /// Det. Alex: participación mayormente pasiva con un único comentario que valida el contenido ofensivo.',
    22, 2, Sanciones[2][2], true, 20);

const Dylan = new NodoB(5, 'Dylan', false,
    '"borré eso de mi perfil apenas lo vi, no me parece" /// Det. Alex: eliminó contenido relacionado al caso. Sin participación activa en los incidentes.',
    -43, 2, null, false, null);

const Elena = new NodoB(5, 'Elena', false,
    '"[sin interacción documentada con el contenido del caso]" /// Det. Alex: aparece en listas de contactos compartidos pero sin actividad relevante en el período.',
    -44, 2, null, false, null);

const Emma = new NodoB(5, 'Emma', false,
    '"[recibió el contenido reenviado pero no lo distribuyó]" /// Det. Alex: receptor pasivo sin redistribución. Sin mensajes hacia la víctima.',
    -45, 2, null, false, null);

const Eric = new NodoB(5, 'Eric', false,
    '"esto ya se fue de las manos, alguien debería hacer algo" /// Det. Alex: comentario aislado sin seguimiento. Sin participación en los grupos de coordinación.',
    -46, 2, null, false, null);

const Ethan = new NodoB(5, 'Ethan', false,
    '"[captura del hilo principal enviada a directivas con fecha y hora]" /// Det. Alex: aportó documentación al caso de forma proactiva. Sin vínculos con los perfiles agresores.',
    -47, 2, null, false, null);

// =========================================================
//  DÍA 3
// =========================================================
const Eva = new NodoB(5, 'Eva', true,
    '"¿saben por qué sacó tan buenas notas últimamente? porque los exámenes no llegaron solos a sus manos, pregúntenle a ella" /// Det. Alex: publicación sin pruebas adjuntas. Generó reacciones inmediatas en grupos de padres y estudiantes.',
    4, 3, Sanciones[3][0], true, -3);

const Fabio = new NodoB(5, 'Fabio', true,
    '"les mando la conversación donde ella misma lo admite, juzguen ustedes" /// Det. Alex: distribuyó material cuya autenticidad no pudo verificarse en primera instancia. Alto alcance en grupos de padres.',
    41, 3, Sanciones[3][1], true, 8);

const Irene = new NodoB(5, 'Irene', true,
    '"yo estaba ahí cuando pasó, no es mentira lo que están diciendo" /// Det. Alex: declaración sin respaldo documental. Aparece como testigo en múltiples hilos del mismo período.',
    41, 3, Sanciones[3][1], true, 27);

const Isabel = new NodoB(5, 'Isabel', true,
    '"se lo conté a mis papás y ellos ya hablaron con otros papás del curso, esto no se puede quedar así" /// Det. Alex: escaló el contenido hacia el entorno familiar. Amplificación fuera del círculo estudiantil.',
    42, 3, Sanciones[3][2], true, 35);

const Isacc = new NodoB(5, 'Isacc', true,
    '"sí es verdad, varios lo vimos. no sé por qué nadie había dicho nada antes" /// Det. Alex: refuerza versión sin evidencia propia. Tercer perfil que valida la misma historia en el mismo período.',
    42, 3, Sanciones[3][2], true, 50);

const Jackson = new NodoB(5, 'Jackson', false,
    '"esperen eso no tiene sentido, yo estaba en esa clase y no vi nada raro" /// Det. Alex: contradice la versión circulante. Sin vínculos con los perfiles que iniciaron el rumor.',
    -23, 3, null, false, null);

const Joel = new NodoB(5, 'Joel', false,
    '"[recibió las capturas por WhatsApp, no las reenvió]" /// Det. Alex: receptor sin redistribución. Sin actividad en los hilos del caso.',
    -24, 3, null, false, null);

const Julia = new NodoB(5, 'Julia', false,
    '"a mí me llegó eso y le dije a quien me lo mandó que no lo siguiera pasando" /// Det. Alex: actuó activamente para frenar la distribución. Sin participación en los incidentes.',
    -25, 3, null, false, null);

const Kevin = new NodoB(5, 'Kevin', false,
    '"[sin actividad documentada en el período del caso]" /// Det. Alex: aparece en contactos compartidos. Sin interacción con el contenido circulante.',
    -26, 3, null, false, null);

const Laura = new NodoB(5, 'Laura', false,
    '"eso que están mandando está editado, miren bien la fuente del texto" /// Det. Alex: señaló inconsistencias en el material distribuido. Aportó análisis técnico informal al caso.',
    -27, 3, null, false, null);

// =========================================================
//  DÍA 4
// =========================================================
const Leo = new NodoB(5, 'Leo', true,
    '"[perfil creado con fotos de la víctima. primeras publicaciones: \'soy una amargada y odio a todos en este colegio\']" /// Det. Alex: cuenta con datos reales de la víctima pero comportamiento inconsistente con su historial conocido.',
    5, 4, Sanciones[4][0], true, -5);

const Lina = new NodoB(5, 'Lina', true,
    '"[accedió a perfil ajeno. publicó desde él: \'la verdad es que me inventé todo para llamar la atención\']" /// Det. Alex: actividad registrada desde dispositivo distinto al habitual de la titular de la cuenta.',
    51, 4, Sanciones[4][1], true, -1);

const Lucas = new NodoB(5, 'Lucas', true,
    '"[descargó y redistribuyó 14 fotos del perfil de la víctima en un período de 3 horas]" /// Det. Alex: actividad de extracción masiva de contenido. Sin interacción directa con la víctima en el período.',
    51, 4, Sanciones[4][2], true, 6);

const Luis = new NodoB(5, 'Luis', true,
    '"[proporcionó datos de contacto y ubicación de la víctima a través de mensajes privados]" /// Det. Alex: transferencia de información personal hacia perfiles del caso. Origen de los datos sin confirmar.',
    52, 4, Sanciones[4][2], true, 11);

const Luisa = new NodoB(5, 'Luisa', true,
    '"[interactuó con el perfil falso: \'jaja típico de ti decir eso\', \'todos sabíamos que pensabas así\']" /// Det. Alex: comentarios que validan el perfil falso como auténtico ante contactos de la víctima.',
    52, 4, Sanciones[4][2], true, 23);

const Mia = new NodoB(5, 'Mia', true,
    '"[cuenta sin historial previo. únicos mensajes: comentarios ofensivos dirigidos a la víctima real desde perfil que usa su imagen]" /// Det. Alex: perfil sin red de contactos previa. Actividad iniciada y terminada en el mismo período del caso.',
    -13, 4, null, true, -7);

const Nico = new NodoB(5, 'Nico', true,
    '"[perfil con foto genérica. publicaciones exclusivamente en hilos relacionados con la víctima]" /// Det. Alex: sin actividad fuera del caso documentado. Patrón de uso puntual.',
    -14, 4, null, true, -4);

const Nora = new NodoB(5, 'Nora', true,
    '"[cuenta creada recientemente. comentarios copiados y pegados en múltiples publicaciones de la víctima]" /// Det. Alex: contenido repetido sin variación. Comportamiento automatizado o coordinado.',
    -15, 4, null, true, -2);

const Oscar = new NodoB(5, 'Oscar', true,
    '"[sin foto de perfil. todos los mensajes enviados en el mismo rango horario que otro perfil del caso]" /// Det. Alex: coincidencia de horarios con perfil relacionado. Sin identidad verificable.',
    -16, 4, null, true, 1);

const Paula = new NodoB(5, 'Paula', true,
    '"[perfil con nombre genérico. único contenido: reenvío de material del caso hacia grupos externos al colegio]" /// Det. Alex: amplificación del caso fuera del entorno original. Sin interacciones sociales registradas.',
    -17, 4, null, true, 7);

// =========================================================
//  DÍA 5
// =========================================================
const Ronald = new NodoB(5, 'Ronald', true,
    '"[coordinó envío masivo desde múltiples dispositivos. mensaje tipo enviado: \'todos juntos hasta que desaparezca de aquí\']" /// Det. Alex: actividad simultánea desde distintos puntos de acceso. Patrón de organización centralizada.',
    3, 5, Sanciones[5][0], true, 29);

const Rosa = new NodoB(5, 'Rosa', true,
    '"si sigues en este colegio te va a ir muy mal, ya sabes. no es una broma." /// Det. Alex: mensaje directo con contenido intimidatorio. Enviado desde cuenta con historial previo en el caso.',
    31, 5, Sanciones[5][1], true, 33);

const Ruben = new NodoB(5, 'Ruben', true,
    '"más te vale que no vayas a hablar con nadie de esto, ya sabes cómo termina la gente que habla de más" /// Det. Alex: mensaje dirigido a perfil cercano a la víctima. Patrón de presión hacia el entorno.',
    31, 5, Sanciones[5][1], true, 38);

const Sara = new NodoB(5, 'Sara', true,
    '"[miembro activo de grupo privado. mensajes internos: \'hoy le toca a las 8, mañana a las 10, no paren\']" /// Det. Alex: participación en canal de coordinación. Mensajes internos recuperados del caso.',
    32, 5, Sanciones[5][2], true, 48);

const Sofia = new NodoB(5, 'Sofia', true,
    '"[invitó a 6 contactos al grupo de coordinación durante el período del caso]" /// Det. Alex: actividad de expansión de la red. Puente entre el grupo central y participantes nuevos.',
    32, 5, Sanciones[5][2], true, 16);

const Tomas = new NodoB(5, 'Tomas', true,
    '"[cuenta sin actividad previa. todos los mensajes enviados en ráfagas de 10 en menos de 2 minutos]" /// Det. Alex: velocidad de envío inconsistente con uso humano individual. Coordinación externa probable.',
    -33, 5, null, true, 26);

const Tyler = new NodoB(5, 'Tyler', true,
    '"[perfil creado semanas antes del incidente. actividad exclusiva durante el período del caso]" /// Det. Alex: uso puntual y concentrado. Sin red social construida previamente.',
    -34, 5, null, true, 31);

const Valen = new NodoB(5, 'Valen', true,
    '"[mensajes idénticos enviados desde este perfil y otro del caso en un intervalo de segundos]" /// Det. Alex: duplicación de contenido entre perfiles. Operación simultánea probable.',
    -35, 5, null, true, 34);

const Violeta = new NodoB(5, 'Violeta', true,
    '"[únicos comentarios: respuestas de apoyo a mensajes ofensivos de perfiles conocidos del caso]" /// Det. Alex: actividad de refuerzo coordinado. Sin interacciones fuera del caso.',
    -36, 5, null, true, 36);

const Zoe = new NodoB(5, 'Zoe', true,
    '"[perfil con información mínima. mensajes enviados exclusivamente hacia la víctima y su entorno cercano]" /// Det. Alex: objetivo focalizado. Sin dispersión de actividad hacia otros usuarios.',
    -37, 5, null, true, 39);

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