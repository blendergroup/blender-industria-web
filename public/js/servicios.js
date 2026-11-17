// Servicios de Blender Industria.
// Texto: "servicios_landing_page_blender.pdf". Fotos: carpeta "Blender-Group-Portafolio-Industrial".
// producto: slug de catalogo.json relacionado (enlace desde la ficha del servicio).

export const SERVICIOS = [
  { id: "diseno-y-calculo", n: "01", titulo: "Diseño y cálculo estructural de pisos",
    resumen: "Ingeniería de losas para naves industriales: cálculo de soporte de cargas y desempeño operativo bajo criterios ACI, con memoria de cálculo y planos ejecutivos.",
    foto: "diseno-y-calculo",
    bloques: [
      { titulo: "Cálculo de soporte del piso (capacidad estructural)",
        items: [
          ["Espesor de losa", "cálculo preciso según las demandas de soporte, cargas fijas, rodantes y estantería."],
          ["Especificación de concreto", "resistencia f'c o módulo de ruptura (MR), baja contracción o convencional, tamaño máximo de agregado (TMA) y revenimiento de diseño."],
          ["Refuerzo estructural", "malla electrosoldada, armado de varilla (1 o 2 parrillas) o refuerzo tridimensional con fibra sintética o metálica."]
        ],
        entrega: "Memoria de cálculo estructural y certificación técnica para construcción." },
      { titulo: "Cálculo de desempeño operativo (comportamiento en servicio)",
        items: [
          ["Separación de juntas de control", "modulación optimizada según criterios ACI para minimizar cortes y prevenir fisuras descontroladas."],
          ["Juntas de construcción", "sugerencias de logística de colado, modulación y planicidad."],
          ["Transmisión de cargas", "selección del sistema de pasajuntas (diámetro, longitud y espaciamiento) o placas Diamond Dowels."],
          ["Planicidad y nivelación (FF-FL)", "números de planicidad según el tipo de operación y los equipos del cliente."],
          ["Blindaje superficial con endurecedor", "endurecedores minerales, metálicos o químicos en pasillos y zonas de alto tránsito (montacargas, trenes de arrastre, carritos o patines)."],
          ["Diseño de diamantes", "detalle geométrico para aislamiento en columnas (circulares o en rehilete)."]
        ],
        entrega: "Planos de pisos, planos de detalles y fichas de especificación." },
      { titulo: "Ingenierías y especificaciones especiales",
        items: [
          ["Barreras de vapor", "polietileno grado 600 para losas que recibirán recubrimiento epóxico o uretano."],
          ["Sistemas sin juntas", "soluciones de ingeniería para pisos especiales jointless o postensados."],
          ["Áreas especiales y remates", "trincheras, fosas, bases de maquinaria, rampas niveladoras y remates embebidos (ángulos, bolardos y perfiles en vértices)."]
        ],
        entrega: "Fichas técnicas especiales y detalles constructivos." }
    ],
    productos: [] },

  { id: "construccion-de-pisos", n: "02", titulo: "Construcción de pisos y sistemas completos",
    resumen: "Servicio llave en mano de pisos pulidos estándar, de alta especialidad, superplanos (FF-FL) y pasillos angostos Fmin, con productos y laboratorio propio.",
    foto: "construccion-de-pisos",
    bloques: [
      { titulo: "Alcance del servicio llave en mano",
        items: [
          ["Terracerías", "preparación y verificación."],
          ["Concreto premezclado", "suministro y colocación."],
          ["Refuerzo", "colocación de armados y materiales de refuerzo."],
          ["Endurecedores", "aplicación de endurecedores minerales e insumos especializados."],
          ["Acabado", "pulido mecánico y curado químico controlado."]
        ] },
      { titulo: "Tipos de piso que construimos",
        items: [
          ["Pulidos estándar", "áreas de almacenamiento general y talleres."],
          ["Pulidos de alta especialidad", "naves industriales de alta exigencia."],
          ["Superplanos (FF-FL)", "con estricto control de tolerancias de nivelación."],
          ["Fmin", "para pasillos angostos de estantería de gran altura."]
        ] },
      { titulo: "Insumos de fabricación propia",
        items: [
          ["Con nuestros aliados", "endurecedor mineral Quartzstone FF Blender (natural y color), Blender Grout, aislantes de cargas verticales y horizontales, membranas de curado y retardantes de evaporación."]
        ] }
    ],
    productos: [] },

  { id: "recubrimientos-especiales", n: "03", titulo: "Recubrimientos especiales",
    resumen: "Sistemas epóxicos, uretano-cementicios de grado alimenticio y loseta antiácida para proteger el concreto de ataques químicos, choques térmicos y tránsito extremo.",
    foto: "recubrimientos-especiales",
    bloques: [
      { titulo: "Recubrimientos epóxicos",
        items: [["Sistemas continuos monolíticos", "excelente apariencia estética, impermeabilidad y fácil limpieza. Ideales para áreas de ensamble, farmacéutica y almacenes comerciales."]] },
      { titulo: "Recubrimientos uretano-cementicios",
        items: [["Grado alimenticio", "alta resistencia térmica y química; soporta derrames calientes, sanitizaciones agresivas y tránsito de impacto constante."]] },
      { titulo: "Loseta antiácida DAPAMEX KSF B",
        items: [["Suministro y colocación profesional", "para entornos con exposición química severa, ácidos concentrados, solventes y cuartos de baterías."]] }
    ],
    productos: [] },

  { id: "reparacion-de-losas-y-juntas", n: "04", titulo: "Reparación y restauración de losas y juntas",
    resumen: "Rehabilitación con autonivelante cementicio de alto desempeño UltraLevel HT 8.0 y reconstrucción estructural de juntas por método de cajón.",
    foto: "reparacion-de-losas-y-juntas",
    bloques: [
      { titulo: "Sistema UltraLevel HT 8.0 (rehabilitación superficial)",
        items: [
          ["Preparación", "preparación mecánica de la superficie para lograr perfil de anclaje."],
          ["Adherencia", "aplicación de puente de adherencia."],
          ["Nivelación", "vaciado de mortero autonivelante cementicio de alto desempeño UltraLevel HT 8.0."]
        ] },
      { titulo: "Reparación estructural de juntas por cajón",
        items: [
          ["Corte y saneado en cajón", "reconstrucción y perfilado de bordes despostillados en juntas de control y de construcción."],
          ["Morteros de reparación", "mortero cementicio y mortero epóxico de alta resistencia al impacto."]
        ] }
    ],
    productos: [] },

  { id: "sello-de-juntas", n: "05", titulo: "Sello y calafateo de juntas",
    resumen: "Poliuretano semirrígido autonivelante para absorber movimientos térmicos, proteger los bordes de corte y evitar la filtración de contaminantes.",
    foto: "sello-de-juntas",
    bloques: [
      { titulo: "Juntas de control y construcción",
        items: [["Calafateo técnico", "poliuretano semirrígido autonivelante, respetando la especificación y la dureza Shore indicada en el proyecto para proteger las aristas del tráfico de ruedas duras."]] },
      { titulo: "Juntas de expansión en naves y exteriores",
        items: [["Selladores autonivelantes", "juntas de expansión, juntas perimetrales y diamantes de columnas, en interiores de naves industriales y en patios de maniobras exteriores."]] }
    ],
    productos: [] },

  { id: "lavado-y-densificado", n: "06", titulo: "Lavado y densificado químico de pisos",
    resumen: "Limpieza y desengrasado profundo con Citrus Blender, más endurecimiento químico antipolvo y densificado superficial con Denso Hard y Li-quid Hard.",
    foto: "lavado-y-densificado",
    bloques: [
      { titulo: "Lavado desengrasante profundo",
        items: [["Citrus Blender", "limpieza industrial de superficies nuevas y en uso: elimina grasas, aceites y contaminantes y deja la superficie lista para densificado o uso."]] },
      { titulo: "Endurecedores químicos líquidos",
        items: [
          ["Denso Hard (base sodio)", "máxima cristalización y endurecimiento profundo."],
          ["Li-quid Hard (base litio)", "reacción homogénea, de penetración rápida y antipolvo."]
        ] }
    ],
    productos: [] },

  { id: "blender-shine", n: "07", titulo: "Sistema Blender Shine: desbaste, pulido y brillo",
    resumen: "Abrillantado mecánico diamantado de 50 a 3,000 granos, con personal calificado y más de 20 años de experiencia en maquinaria, metales y resinas.",
    foto: "blender-shine",
    bloques: [
      { titulo: "Desbaste inicial y corte",
        items: [["Nivelación y apertura de poro", "con maquinaria industrial y segmentos metálicos. Acabado sal y pimienta o agregado expuesto, según especificación."]] },
      { titulo: "Pulido progresivo y brillo",
        items: [["Refinado mecánico continuo", "pads de resina diamantada en secuencias completas: granos 50, 100, 200, 400, 800, 1,500 y 3,000 para brillo espejo natural."]] },
      { titulo: "Densificado y color translúcido",
        items: [["Tintas DYE OVER", "densificadores químicos y tintas translúcidas para delimitación de señalética, logotipos empresariales y coloración de áreas completas."]] }
    ],
    productos: [] }
];
