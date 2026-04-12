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
// ─────────────────────────────────────────────────────────────────────────────

const dia1 = [
    new NodoB(5, 'Abril', true,
        'Inició la campaña de mensajes ofensivos contra Valeria. Enviaba insultos diarios desde su cuenta personal y animaba a otros a hacer lo mismo.',
        1, 1, Sanciones[1][0]),
    new NodoB(5, 'Adam', true,
        'Respondía y amplificaba los mensajes de Abril con comentarios burlones dirigidos a Valeria en publicaciones públicas.',
        11, 1, Sanciones[1][1]),
    new NodoB(5, 'Allison', true,
        'Enviaba memes editados con la foto de Valeria a grupos del colegio para ridiculizarla frente a sus compañeros.',
        11, 1, Sanciones[1][1]),
    new NodoB(5, 'Alma', true,
        'Comentaba en cada publicación de Valeria con palabras despectivas sin llegar a insultos directos.',
        12, 1, Sanciones[1][2]),
    new NodoB(5, 'Ana', true,
        'Le daba "me gusta" a todos los comentarios ofensivos contra Valeria y los compartía sin agregar texto propio.',
        12, 1, Sanciones[1][2]),
    new NodoB(5, 'Andres', false,
        'Compañero de Valeria que vio los mensajes y los ignoró. No participó ni denunció. Interrogado por cercanía al grupo.',
        -53, 1, null),
    new NodoB(5, 'Anthony', false,
        'Amigo de Abril que estaba en los grupos pero nunca interactuó con el contenido ofensivo.',
        -54, 1, null),
    new NodoB(5, 'Ben', false,
        'Fue confundido inicialmente por las autoridades del colegio al revisar los registros por tener un apodo similar al de la víctima.',
        -55, 1, null),
    new NodoB(5, 'Bruno', false,
        'Docente que recibió una captura de los mensajes de un estudiante preocupado. Reportó el caso a coordinación.',
        -56, 1, null),
    new NodoB(5, 'Camila', false,
        'Estudiante que le mostró a Valeria los mensajes que circulaban sobre ella. Actuó como testigo en la investigación.',
        -57, 1, null)
];

const dia2 = [
    new NodoB(5, 'Camilo', true,
        'Escaló el acoso creando una publicación viral con insultos hacia Valeria que circuló por toda la institución en menos de un día.',
        2, 2, Sanciones[2][0]),
    new NodoB(5, 'Clara', true,
        'Organizó a un grupo de compañeras para bombardear con comentarios negativos cada nueva publicación de Valeria.',
        21, 2, Sanciones[2][1]),
    new NodoB(5, 'Cora', true,
        'Compartió la publicación viral de Camilo en tres grupos distintos del colegio para ampliar su alcance.',
        21, 2, Sanciones[2][1]),
    new NodoB(5, 'Dani', true,
        'Coordinó con otras compañeras para excluir a Valeria de todos los grupos digitales del curso simultáneamente.',
        22, 2, Sanciones[2][2]),
    new NodoB(5, 'Diego', true,
        'Participó en el grupo de coordinación que decidía qué publicar cada día para mantener el acoso activo.',
        22, 2, Sanciones[2][2]),
    new NodoB(5, 'Dylan', false,
        'Recibió la publicación viral pero la eliminó de su perfil al darse cuenta del daño que causaba.',
        -43, 2, null),
    new NodoB(5, 'Elena', false,
        'Fue invitada al grupo de coordinación pero nunca respondió ni participó en ninguna acción.',
        -44, 2, null),
    new NodoB(5, 'Emma', false,
        'Su nombre apareció en capturas de pantalla descontextualizadas. Confirmó no tener relación con los hechos.',
        -45, 2, null),
    new NodoB(5, 'Eric', false,
        'Solicitó a coordinación revisar los registros digitales del colegio tras ver la publicación viral.',
        -46, 2, null),
    new NodoB(5, 'Ethan', false,
        'Capturó evidencia de la publicación viral antes de que fuera eliminada y la entregó a las directivas.',
        -47, 2, null)
];

const dia3 = [
    new NodoB(5, 'Eva', true,
        'Publicó en redes sociales que Valeria había robado exámenes del colegio, sabiendo que era completamente falso, para lograr su expulsión.',
        4, 3, Sanciones[3][0]),
    new NodoB(5, 'Fabio', true,
        'Fabricó y distribuyó capturas de pantalla editadas que simulaban conversaciones de Valeria admitiendo el supuesto robo.',
        41, 3, Sanciones[3][1]),
    new NodoB(5, 'Irene', true,
        'Difundió los rumores fabricados en grupos de WhatsApp de padres de familia para darles mayor credibilidad.',
        41, 3, Sanciones[3][1]),
    new NodoB(5, 'Isabel', true,
        'Contó versiones alteradas de los hechos a compañeros de otros cursos para expandir el daño a la reputación de Valeria.',
        42, 3, Sanciones[3][2]),
    new NodoB(5, 'Isacc', true,
        'Confirmó los rumores cuando otros estudiantes le preguntaron, presentándolos como hechos que él había presenciado.',
        42, 3, Sanciones[3][2]),
    new NodoB(5, 'Jackson', false,
        'Escuchó los rumores pero dudó de su veracidad. Se abstuvo de difundirlos y más tarde los desmintió.',
        -23, 3, null),
    new NodoB(5, 'Joel', false,
        'Recibió las capturas falsas por WhatsApp pero no las reenvió al notar inconsistencias en los textos.',
        -24, 3, null),
    new NodoB(5, 'Julia', false,
        'Fue mencionada en algunos rumores por confusión de nombres. Aclaró su situación ante las directivas del colegio.',
        -25, 3, null),
    new NodoB(5, 'Kevin', false,
        'Investigó la veracidad de los rumores, encontró inconsistencias y reportó la situación como posible calumnia.',
        -26, 3, null),
    new NodoB(5, 'Laura', false,
        'Confrontó a Irene directamente al reconocer que las capturas eran editadas. Aportó su análisis como evidencia.',
        -27, 3, null)
];

const dia4 = [
    new NodoB(5, 'Leo', true,
        'Creó un perfil falso con fotos reales de Valeria y comenzó a publicar contenido ofensivo haciéndose pasar por ella ante sus contactos.',
        5, 4, Sanciones[4][0]),
    new NodoB(5, 'Lina', true,
        'Accedió sin autorización a la cuenta de Valeria usando una contraseña que obtuvo de un tercero y publicó desde ella.',
        51, 4, Sanciones[4][1]),
    new NodoB(5, 'Lucas', true,
        'Descargó y redistribuyó fotos privadas del perfil de Valeria para usarlas en el perfil falso creado por Leo.',
        51, 4, Sanciones[4][1]),
    new NodoB(5, 'Luis', true,
        'Proporcionó a Leo información personal de Valeria obtenida de conversaciones privadas para hacer el perfil falso más creíble.',
        52, 4, Sanciones[4][2]),
    new NodoB(5, 'Luisa', true,
        'Interactuó con el perfil falso como si fuera real para darle credibilidad y más visibilidad ante contactos de Valeria.',
        52, 4, Sanciones[4][2]),
    new NodoB(5, 'Mia', false,
        'Reconoció que el perfil era falso al ver inconsistencias y alertó a Valeria directamente por mensaje privado.',
        -13, 4, null),
    new NodoB(5, 'Nico', false,
        'Siguió el perfil falso creyendo que era real. Al enterarse de la suplantación, lo reportó a la plataforma.',
        -14, 4, null),
    new NodoB(5, 'Nora', false,
        'Su nombre fue mencionado en comentarios del perfil falso. Demostró no tener ninguna relación con su creación.',
        -15, 4, null),
    new NodoB(5, 'Oscar', false,
        'Recibió una solicitud de amistad del perfil falso. Al verificarlo, inició el reporte formal ante la institución.',
        -16, 4, null),
    new NodoB(5, 'Paula', false,
        'Documentó la actividad del perfil falso con capturas fechadas antes de que fuera eliminado por la plataforma.',
        -17, 4, null)
];

const dia5 = [
    new NodoB(5, 'Ronald', true,
        'Organizó y lideró un ataque coordinado desde múltiples cuentas para saturar a Valeria con mensajes hasta que abandonara todas sus redes sociales.',
        3, 5, Sanciones[5][0]),
    new NodoB(5, 'Rosa', true,
        'Envió mensajes anónimos a Valeria advirtiéndole consecuencias físicas si continuaba asistiendo al colegio.',
        31, 5, Sanciones[5][1]),
    new NodoB(5, 'Ruben', true,
        'Amenazó a otros estudiantes para que dejaran de defender a Valeria y no testificaran en la investigación del colegio.',
        31, 5, Sanciones[5][1]),
    new NodoB(5, 'Sara', true,
        'Integró el grupo de coordinación donde se planificaba diariamente qué ataques ejecutar contra Valeria.',
        32, 5, Sanciones[5][2]),
    new NodoB(5, 'Sofia', true,
        'Reclutó a tres estudiantes más para sumarse al ataque coordinado y aumentar el volumen de mensajes simultáneos.',
        32, 5, Sanciones[5][2]),
    new NodoB(5, 'Tomas', false,
        'Fue invitado al grupo de coordinación pero lo abandonó de inmediato y capturó los mensajes como evidencia.',
        -33, 5, null),
    new NodoB(5, 'Tyler', false,
        'Recibió amenazas menores por haber bloqueado a Ronald. Reportó las amenazas a sus padres y al colegio.',
        -34, 5, null),
    new NodoB(5, 'Valen', false,
        'Recibió por error algunos de los mensajes del ataque coordinado. Confirmó no ser la víctima objetivo.',
        -35, 5, null),
    new NodoB(5, 'Violeta', false,
        'Recopiló todas las evidencias de los 5 días y las presentó ante el rector y las autoridades competentes.',
        -36, 5, null),
    new NodoB(5, 'Zoe', false,
        'Pese a las amenazas, mantuvo su testimonio y entregó toda la evidencia recolectada durante los 5 días.',
        -37, 5, null)
];

export const Dias = { 1: dia1, 2: dia2, 3: dia3, 4: dia4, 5: dia5 };

export function vectorDelDia(dia) {
    const p = Dias[dia];
    return [
        p[0],
        p[Math.random() < 0.5 ? 1 : 2],
        p[Math.random() < 0.5 ? 3 : 4],
        p[Math.random() < 0.5 ? 5 : 6],
        p[7 + Math.floor(Math.random() * 3)]
    ];
}

export const arbolDias = {};

export function construirArbolDia(dia) {
    const arbol = new ArbolB(5);
    vectorDelDia(dia).forEach(pj => arbol.insertar(pj));
    arbolDias[dia] = arbol;
    return arbol;
}