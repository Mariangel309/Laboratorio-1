import { ContenidoSancion } from './ContenidoSancion.js';

export const Sanciones = {

    // =========================================================
    //  DÍA 1 — Injuria
    // =========================================================
    1: [
        new ContenidoSancion(
            'Injuria',
            'Expresión verbal, escrita o digital que atenta contra la honra, dignidad o reputación de una persona sin imputarle un hecho concreto.',
            'Multa de 1 a 3 salarios mínimos mensuales. Si se comete por medios digitales o redes sociales, la pena puede incrementarse por la amplitud del daño.',
            'Enviar mensajes repetidos por redes sociales llamando a Valeria con insultos y calificativos degradantes frente a sus compañeros de clase.',
            'Art. 220 del Código Penal Colombiano — Injuria: el que haga a otra persona imputaciones deshonrosas incurrirá en prisión de 16 a 54 meses y multa de 13.33 a 1500 salarios mínimos legales mensuales vigentes.'
        ),
        new ContenidoSancion(
            'Acoso reiterado',
            'Conducta persistente y no deseada dirigida a una persona mediante comunicaciones digitales que generan angustia, miedo o malestar sostenido.',
            'Multa y medida de protección a la víctima. En casos graves, prisión de hasta 2 años si se demuestra daño psicológico documentado.',
            'Enviar a Valeria mensajes ofensivos todos los días durante semanas desde distintas cuentas para eludir bloqueos.',
            'Ley 1620 de 2013 — Ley de Convivencia Escolar: define el ciberacoso como el daño psicológico causado mediante el uso de medios electrónicos. Establece sanciones disciplinarias y obliga a las instituciones educativas a activar rutas de atención.'
        ),
        new ContenidoSancion(
            'Perturbación a la tranquilidad',
            'Acto que interfiere de forma reiterada con la paz, el bienestar o la vida cotidiana de una persona sin llegar a constituir amenaza grave.',
            'Querella y multa menor. Puede acompañarse de orden de alejamiento digital si se demuestra patrón de conducta.',
            'Comentar de forma burlesca cada publicación de Valeria en redes sociales para incomodarla frente a sus seguidores.',
            'Art. 192 del Código Penal Colombiano — Violación de la libertad de trabajo y otras garantías: protege el derecho de las personas a desarrollar su vida sin interferencias injustificadas de terceros.'
        )
    ],

    // =========================================================
    //  DÍA 2 — Injuria agravada
    // =========================================================
    2: [
        new ContenidoSancion(
            'Injuria agravada por medios digitales',
            'Injuria cometida a través de plataformas digitales con alta difusión, lo que amplifica el daño a la reputación de la víctima más allá del entorno inmediato.',
            'Prisión de 1 a 3 años y obligación de retractación pública en el mismo medio donde se cometió el daño.',
            'Crear una publicación viral con insultos dirigidos a Valeria que alcanza miles de visualizaciones en su institución educativa.',
            'Art. 220 y 221 del Código Penal Colombiano agravados por el Art. 58 numeral 9 — Circunstancias de mayor punibilidad: usar medios de comunicación masiva para cometer el delito agrava la pena hasta en una tercera parte.'
        ),
        new ContenidoSancion(
            'Hostigamiento digital',
            'Patrón sistemático de mensajes, comentarios o interacciones no deseadas que buscan intimidar, humillar o aislar a una persona en entornos virtuales.',
            'Multa y restricción de acceso a plataformas digitales como medida cautelar. Prisión de hasta 2 años en casos con daño psicológico acreditado.',
            'Organizar a un grupo para que bombardee con comentarios negativos cada publicación de Valeria hasta que ella misma elimine su perfil.',
            'Ley 1010 de 2006 — Ley de Acoso: aunque originalmente diseñada para el ámbito laboral, sus principios se aplican analógicamente al acoso digital sistemático. Complementada por la Ley 1620 de 2013 para contextos escolares.'
        ),
        new ContenidoSancion(
            'Perturbación a la tranquilidad agravada',
            'Versión intensificada de la perturbación cuando se ejecuta de forma coordinada o cuando el daño emocional a la víctima es demostrable y sostenido.',
            'Multa mayor y orden judicial de cese inmediato. Si hay organización grupal, todos los participantes pueden ser imputados.',
            'Coordinar con varios compañeros para ignorar, ridiculizar y excluir a Valeria de todos los grupos digitales del colegio de forma simultánea.',
            'Art. 192 del Código Penal Colombiano agravado — Cuando la perturbación es coordinada por varios sujetos activos, cada uno responde penalmente de forma individual por su participación en los hechos.'
        )
    ],

    // =========================================================
    //  DÍA 3 — Calumnia
    // =========================================================
    3: [
        new ContenidoSancion(
            'Calumnia',
            'Imputación falsa de un delito a una persona con conocimiento de su falsedad y con intención de causar daño a su reputación.',
            'Prisión de 1 a 4 años y retractación pública obligatoria. Si se difunde por medios digitales, la pena se agrava por el alcance del daño.',
            'Publicar en redes sociales que Valeria robó exámenes del colegio, sabiendo que es falso, para que la expulsen.',
            'Art. 221 del Código Penal Colombiano — Calumnia: el que impute falsamente a otro una conducta típica incurrirá en prisión de 16 a 72 meses y multa de 13.33 a 1500 salarios mínimos legales mensuales vigentes.'
        ),
        new ContenidoSancion(
            'Difamación digital',
            'Difusión de información falsa o descontextualizada sobre una persona a través de medios digitales con el fin de dañar su imagen pública.',
            'Multa y obligación de eliminar el contenido publicado. En casos de daño grave y demostrable, prisión de hasta 2 años.',
            'Crear y compartir capturas de pantalla editadas que simulan conversaciones de Valeria diciendo cosas que nunca dijo.',
            'Art. 221 del Código Penal Colombiano en concordancia con la Ley 1273 de 2009 — Delitos informáticos: la fabricación de evidencia digital falsa para dañar la reputación de una persona constituye agravante del delito base.'
        ),
        new ContenidoSancion(
            'Daño a la reputación por información falsa',
            'Circulación intencional de datos incorrectos o engañosos que afectan la percepción pública de una persona sin imputarle directamente un delito.',
            'Querella civil con indemnización por daño moral. Si el daño es cuantificable y masivo, puede derivar en proceso penal.',
            'Difundir rumores falsos sobre la vida personal de Valeria en grupos de WhatsApp del colegio para que sus amigos se alejen de ella.',
            'Art. 15 de la Constitución Política de Colombia — Derecho a la intimidad y al buen nombre: toda persona tiene derecho a su buen nombre y el Estado debe protegerlo. Su vulneración genera responsabilidad civil y penal.'
        )
    ],

    // =========================================================
    //  DÍA 4 — Suplantación de identidad
    // =========================================================
    4: [
        new ContenidoSancion(
            'Suplantación de identidad digital',
            'Uso fraudulento de la identidad, imagen o datos personales de otra persona en entornos digitales sin su consentimiento para causar daño o engañar a terceros.',
            'Prisión de 1 a 4 años bajo la Ley 1273 de 2009. Agravante si se usa la identidad para cometer otros delitos o si la víctima sufre daño patrimonial.',
            'Crear un perfil falso con fotos reales de Valeria para publicar contenido ofensivo y hacer que sus contactos crean que ella lo escribió.',
            'Ley 1273 de 2009 — Art. 269F: violación de datos personales. El que sin estar facultado sustraiga, venda, envíe, compre, divulgue o emplee datos personales incurrirá en prisión de 48 a 96 meses y multa de 100 a 1000 salarios mínimos.'
        ),
        new ContenidoSancion(
            'Delito informático por acceso no autorizado',
            'Ingreso sin permiso a cuentas, dispositivos o plataformas digitales ajenas para obtener información, suplantar o causar daño.',
            'Prisión de 1 a 3 años. Si se extraen datos personales sensibles, la pena sube hasta 5 años.',
            'Hackear la cuenta de Valeria en una red social para publicar desde ella contenido que la perjudique frente a sus seguidores.',
            'Ley 1273 de 2009 — Art. 269A: acceso abusivo a un sistema informático. El que sin autorización acceda a un sistema informático incurrirá en prisión de 48 a 96 meses y multa de 100 a 1000 salarios mínimos legales mensuales vigentes.'
        ),
        new ContenidoSancion(
            'Uso indebido de datos personales',
            'Recopilación, almacenamiento o uso de información personal de otra persona sin su consentimiento y con fines distintos a los autorizados.',
            'Multa y sanción administrativa por la Superintendencia de Industria y Comercio. En casos graves, prisión de hasta 2 años.',
            'Descargar y redistribuir fotos privadas de Valeria sin su permiso para usarlas en perfiles falsos o como material de burla.',
            'Ley 1581 de 2012 — Ley de Protección de Datos Personales (Habeas Data): regula el tratamiento de datos personales. Su violación puede generar sanciones de hasta 2000 salarios mínimos impuestas por la SIC.'
        )
    ],

    // =========================================================
    //  DÍA 5 — Acoso coordinado
    // =========================================================
    5: [
        new ContenidoSancion(
            'Acoso y hostigamiento digital coordinado',
            'Organización deliberada de múltiples personas para atacar, intimidar o aislar a una víctima de forma simultánea a través de medios digitales.',
            'Prisión de 2 a 6 años para los organizadores. Todos los participantes activos pueden ser imputados. Agravante si la víctima es menor de edad.',
            'Coordinar a un grupo de estudiantes para que desde cuentas distintas ataquen a Valeria simultáneamente hasta que abandone todas sus redes sociales.',
            'Art. 340 del Código Penal Colombiano — Concierto para delinquir: cuando varias personas se organizan para cometer delitos, la pena se agrava para todos los participantes. Complementado por la Ley 1620 de 2013 en contextos escolares.'
        ),
        new ContenidoSancion(
            'Amenazas graves por medios digitales',
            'Comunicación de un mal grave e injusto contra una persona o sus allegados a través de plataformas digitales con el fin de infundir miedo.',
            'Prisión de 1 a 3 años. Si las amenazas son condicionales o sistemáticas, la pena puede elevarse a 5 años.',
            'Enviar a Valeria mensajes desde cuentas anónimas advirtiéndole consecuencias físicas si no abandona el colegio.',
            'Art. 347 del Código Penal Colombiano — Amenazas: el que por cualquier medio amenace a una persona con causarle a ella o a su familia un mal que constituya delito incurrirá en prisión de 16 a 36 meses, agravable si se usan medios digitales.'
        ),
        new ContenidoSancion(
            'Asociación para cometer ciberacoso',
            'Organización estructurada de tres o más personas con el propósito de ejecutar acciones sistemáticas de acoso digital contra una o varias víctimas.',
            'Prisión de 3 a 6 años para los organizadores. Integrantes activos responden individualmente por cada acto ejecutado.',
            'Crear un grupo privado de mensajería para planificar diariamente qué publicaciones hacer, qué rumores difundir y cómo aislar a Valeria.',
            'Art. 340 del Código Penal Colombiano — Concierto para delinquir agravado: cuando la organización tiene carácter permanente y ejecuta múltiples delitos de forma sistemática, la pena puede alcanzar los 18 años de prisión para los líderes.'
        )
    ]
};