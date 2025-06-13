export const SECTIONS = [
  'Duelo de alianza',
  'Tareas Diarias',
  'Carrera de armas',
  'Duelo de servidor',
  'Asedio zombie',
  'Héroes',
  'Requisitos CG'
];

export const DAYS = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
];

// Estructura: cada sección → cada día → { do: [..], dont: [..] }
export const DEFAULT_TASKS = {
  'Duelo de alianza': {
    Lunes: {
      do: [
        { text: 'Abrir tareas de radar cada 6 horas', tooltipKey: null },
        { text: 'Subir de nivel el dron', tooltipKey: null },
        { text: 'Gastar energía', tooltipKey: null },
        { text: 'Recolectar todo el día', tooltipKey: null }
      ],
      dont: [
        'No abrir regalos/construcciones (dejamos para el martes)',
        'No abrir cofres de componentes de dron',
        'No usar mejoras de héroes',
        'No abrir edificios terminados',
        'No usar componentes de dron',
        'No usar tickets de supervivientes/héroe',
        'No usar fragmentos de héroe',
        'No acelerar edificios, investigaciones ni tropas'
      ]
    },
    Martes: {
      do: [
        { text: 'Guardar tareas de radar', tooltipKey: 'radar' },
        { text: 'Abrir regalos de construcción', tooltipKey: null },
        { text: 'Pide el puesto de Secretario de Desarrollo y construye al máximo', tooltipKey: null },
        { text: 'Utiliza aceleradores de construcción', tooltipKey: null },
        { text: 'Manda los 4 camiones LEGENDARIOS', tooltipKey: null },
        { text: 'Realiza las tareas legendarias: actualizar hasta que salga una dorada y hacerla', tooltipKey: null },
        { text: 'Reclutar y mejorar supervivientes', tooltipKey: null }
      ],
      dont: [
        'No abrir cofres de dron',
        'No usar mejoras de héroes',
        'No abrir edificios terminados',
        'No usar componentes de dron',
        'No usar tickets de supervivientes/héroe',
        'No usar tickets de héroe',
        'No usar fragmentos de héroe',
        'No acelerar edificios, investigaciones ni tropas'
      ]
    },
    Miércoles: {
      do: [
        { text: 'Abrir tareas de radar cada 6 horas', tooltipKey: null },
        { text: 'Investigar en “Duelo de alianzas”, “Camión interurbano”, “Fuerzas especiales”', tooltipKey: null },
        { text: 'Utilizar aceleradores de investigación', tooltipKey: null },
        { text: 'Abrir cofres de dron, juntar componentes y mejorarlo', tooltipKey: null }
      ],
      dont: [
        'No usar puntos ni chips de dron',
        'No mejorar héroes hoy'
      ]
    },
    Jueves: {
      do: [
        { text: 'Guardar tareas de radar', tooltipKey: 'radar' },
        { text: 'Gastar toda la EXP (abrir los cofres de EXP que se encuentran en el inventario)', tooltipKey: null },
        { text: 'Usar tickets de reclutamiento de héroes', tooltipKey: null },
        { text: 'Utilizar medallas en “Habilidades de héroe”', tooltipKey: null },
        { text: 'Usar fragmentos de héroe (dorados a Kim, morados y azules)', tooltipKey: null },
        { text: 'Saquea camiones con fragmentos dorados', tooltipKey: null }
      ],
      dont: []
    },
    Viernes: {
      do: [
        { text: 'Pide el puesto de Secretario de Seguridad y entrena/promueve tropas', tooltipKey: null },
        { text: 'Usar aceleradores de tropas', tooltipKey: null },
        { text: 'Abrir tareas de radar cada 6 horas', tooltipKey: null },
        { text: 'Abrir regalos de construcción', tooltipKey: null },
        { text: 'Pide el puesto de Secretario de Desarrollo y construye', tooltipKey: null },
        { text: 'Utiliza aceleradores de construcción (moderado si hay ventaja)', tooltipKey: null },
        { text: 'Investigación tecnológica (aceleradores si vamos perdiendo)', tooltipKey: null },
        { text: 'Poner escudo para que esté activo a las 04:00 y que dure hasta las 16:00 si compites en el duelo de servidor, sino hasta las 04:00 del sábado', tooltipKey: null },
        { text: 'No dejes las tropas recolectando por la noche, pueden ser atacadas', tooltipKey: null }
      ],
      dont: []
    },
    Sábado: {
      do: [
        { text: 'Manda los 4 camiones LEGENDARIOS', tooltipKey: null },
        { text: 'Realiza las tareas legendarias', tooltipKey: null },
        { text: 'Usar aceleradores solo si es necesario', tooltipKey: null },
        { text: 'Puedes usar las tareas de radar aunque no puntúan', tooltipKey: null }
      ],
      dont: []
    },
    Domingo: {
      do: [
        { text: 'Guardar tareas de radar', tooltipKey: 'radar' },
        { text: 'Poner tropas a recolectar (que terminen después de las 04:00 para puntuar el lunes)', tooltipKey: null },
        { text: 'Tomar un Martini', tooltipKey: null }
      ],
      dont: []
    }
  },
  
  'Tareas Diarias': {
    Lunes: {
      do: [
        { text: 'Hacer radar', tooltipKey: null },
        { text: 'Donar al centro de ayuda', tooltipKey: null },
        { text: 'Entrenar tropas', tooltipKey: null }
      ],
      dont: []
    },
    Martes: {
      do: [
        { text: 'Guardar tareas radar', tooltipKey: null },
        { text: 'Esperar carrera de armas de construcción para abrir regalos', tooltipKey: null }
      ],
      dont: []
    },
    // …otros días…
  },
  
  'Tareas Diarias': {
    Lunes: {
      do: [
        'Hacer radar',
        'Donar al centro de ayuda',
        'Entrenar tropas'
      ],
      dont: []
    },
    Martes: {
      do: [
        'Guardar tareas radar',
        'Esperar carrera de armas de construcción para abrir regalos'
      ],
      dont: []
    },
    // …otros días…
  },

  'Carrera de armas': {
    Martes: {
      do: [
        'Ahorra energía para la I+D',
        'Gastar aceleradores solo si llegas al cofre 3'
      ],
      dont: []
    }
  },

  // …resto de secciones…
};
