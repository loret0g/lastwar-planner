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
        'Abrir tareas de radar cada 6 horas',
        'Subir de nivel el dron',
        'Gastar energía',
        'Recolectar todo el día'
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
        'Guardar tareas de radar',
        'Abrir regalos de construcción',
        'Pide el puesto de Secretario de Desarrollo y construye al máximo',
        'Utiliza aceleradores de construcción',
        'Manda los 4 camiones LEGENDARIOS',
        'Realiza las tareas legendarias: actualizar hasta que salga una dorada y hacerla',
        'Reclutar y mejorar supervivientes'
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
        'Abrir tareas de radar cada 6 horas',
        'Investigar en “Duelo de alianzas”, “Camión interurbano”, “Fuerzas especiales”',
        'Utilizar aceleradores de investigación',
        'Abrir cofres de dron, juntar componentes y mejorarlo'
      ],
      dont: [
        'No usar puntos ni chips de dron',
        'No mejorar héroes hoy'
      ]
    },
    Jueves: {
      do: [
        'Guardar tareas de radar',
        'Gastar toda la EXP (abrir los cofres de EXP que se encuentran en el inventario)',
        'Usar tickets de reclutamiento de héroes',
        'Utilizar medallas en “Habilidades de héroe”',
        'Usar fragmentos de héroe (dorados a Kim, morados y azules)',
        'Saquea camiones con fragmentos dorados'
      ],
      dont: []
    },
    Viernes: {
      do: [
        'Pide el puesto de Secretario de Seguridad y entrena/promueve tropas',
        'Usar aceleradores de tropas',
        'Abrir tareas de radar cada 6 horas',
        'Abrir regalos de construcción',
        'Pide el puesto de Secretario de Desarrollo y construye',
        'Utiliza aceleradores de construcción (moderado si hay ventaja)',     
        'Investigación tecnológica (aceleradores si vamos perdiendo)',
        'Poner escudo para que esté activo a las 04:00 y que dure hasta las 16:00 si compites en el duelo de servidor, sino hasta las 04:00 del sábado',
        'No dejes las tropas recolectando por la noche, pueden ser atacadas',
      ],
      dont: []
    },
    Sábado: {
      do: [
        'Manda los 4 camiones LEGENDARIOS',
        'Realiza las tareas legendarias',
        'Usar aceleradores solo si es necesario',
        'Puedes usar las tareas de radar aunque no puntúan'
      ],
      dont: []
    },
    Domingo: {
      do: [
        'Guardar tareas de radar',
        'Poner tropas a recolectar (que terminen después de las 04:00 para puntuar el lunes)',
        'Tomar un Martini'
      ],
      dont: []
    }
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
