export const DAYS = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
]

export const ALLIANCE_DUEL_TASKS = {
  Lunes: {
    do: [
      { text: 'Realizar las tareas de radar (cada 6 horas)', tooltipKey: null },
      { text: 'Subir el nivel del dron (datos y piezas)', tooltipKey: 'droneData' },
      { text: 'Abrir cofres de chip (no de componentes)', tooltipKey: 'dronChip' },
      { text: 'Gastar energía', tooltipKey: null },
      { text: 'Recolectar recursos (las tropas en las minas, todo el día)', tooltipKey: null },
      { text: 'Guarda la tarea UR con estrella para el martes', tooltipKey: 'shinyTaskStar' }
    ],
    dont: [
      'No abrir regalos de las construcciones (dejamos para el martes)',
      'No abrir cofres de componentes de dron',
      'No mejorar los héroes',
      'No usar tickets de supervivientes, ni de héroes',
      'No usar aceleradores'
    ]
  },

  Martes: {
    do: [
      { text: 'Guardar tareas de radar', tooltipKey: 'radar' },
      { text: 'Abrir los regalos de construcción que se han guardado durante toda la semana', tooltipKey: null },
      { text: 'Utilizar aceleradores de construcción', tooltipKey: null },
      { text: 'Mandar los 4 camiones LEGENDARIOS', tooltipKey: null },
      { text: 'Realizar únicamente tareas legendarias', tooltipKey: 'legendaryTasks' },
      { text: 'Usar tickets de reclutamiento de SUPERVIVIENTES (no de héroes)', tooltipKey: null }
    ],
    dont: [
      'No realizar tareas de radar, se guardan para mañana',
      'No abrir cofres de dron (ni de componentes, ni de chips)',
      'No usar nada del dron',
      'No mejorar los héroes',
      'No usar tickets de héroes',
      'No usar aceleradores de investigación, ni de entrenamiento. Hoy solo de construcción'
    ]
  },

  Miércoles: {
    do: [
      { text: 'Realizar las tareas de radar (cada 6 horas)', tooltipKey: null },
      { text: 'Investigar donde se utilicen "medallas de honor"', tooltipKey: 'honorMedals' },
      { text: 'Utilizar aceleradores de investigación', tooltipKey: null },
      { text: 'Abrir cofres de componentes de dron y juntarlos', tooltipKey: null },
      { text: 'Guarda la tarea UR con estrella para el sábado', tooltipKey: 'shinyTaskStar' },
    ],
    dont: [
      'No abrir regalos de las construcciones',
      'No usar nada del dron que no sea abrir los cofres de componentes',
      'No mejorar los héroes',
      'No usar tickets de supervivientes, ni de héroes',
      'No usar aceleradores de construcción, ni de entrenamiento. Hoy solo de investigación'
    ]
  },

  Jueves: {
    do: [
      { text: 'Guardar tareas de radar', tooltipKey: 'radar' },
      { text: 'Usar tickets de reclutamiento de héroes', tooltipKey: null },
      { text: 'Gastar toda la EXP de héroe (abrir los cofres de EXP que se encuentran en el inventario)', tooltipKey: null },
      { text: 'Usar fragmentos de héroe', tooltipKey: null },
      { text: 'Utilizar medallas en “Habilidades de héroe”', tooltipKey: 'skillMedals' },
      { text: 'Guarda la tarea UR con estrella para el sábado', tooltipKey: 'shinyTaskStar' },
    ],
    dont: [
      'No realizar tareas de radar, se guardan para mañana',
      'No abrir cofres de dron (ni de componentes, ni de chips)',
      'No usar nada del dron',
      'No usar tickets de supervivientes',
      'No usar aceleradores',
      'No abrir regalos de las construcciones'
    ]
  },

  Viernes: {
    do: [
      { text: 'Realizar las tareas de radar (cada 6 horas)', tooltipKey: null },
      { text: 'Utilizar el puesto de "Secretario de Seguridad" para entrenar/promover tropas', tooltipKey: null },
      { text: 'Usar aceleradores de entrenamiento', tooltipKey: null },
      { text: 'Guarda la tarea UR con estrella para el sábado', tooltipKey: 'shinyTaskStar' },

      { text: 'Si vamos perdiendo y es decisivo:', type: 'section' },
      { text: 'Utilizar aceleradores de construcción o abrir algún regalo', tooltipKey: null },
      { text: 'Utilizar aceleradores de investigación', tooltipKey: null },

      { text: 'Antes del reinicio del servidor:', type: 'section' },
      { text: 'Poner escudo para que esté activo a la hora del reinicio del servidor (04:00 en España) y que dure hasta la batalla de la capital si compites, sino hasta el siguiente reinicio (a las 04:00 del domingo en España)', tooltipKey: null },
      { text: 'No dejes las tropas recolectando por la noche, serán atacadas', tooltipKey: null },
    ],
    dont: [
      'No abrir cofres de dron (ni de componentes, ni de chips)',
      'No usar nada del dron',
      'No mejorar los héroes',
      'No usar tickets de héroes ni supervivientes',
      'Usar aceleradores de construcción e investigación solo en caso de VS decisivo'
    ]
  },

  Sábado: {
    do: [
      { text: 'Mandar los 4 camiones LEGENDARIOS', tooltipKey: null },
      { text: 'Realizar únicamente tareas legendarias', tooltipKey: 'legendaryTasks' },
      { text: 'ATACAR AL ENEMIGO', tooltipKey: 'attackEnemy' },
      { text: 'Usar aceleradores para curar tropas', tooltipKey: null },
      { text: 'Puedes usar las tareas de radar aunque no puntúan', tooltipKey: null },

      { text: 'Si vamos perdiendo y es decisivo:', type: 'section' },
      { text: 'Utilizar aceleradores de construcción', tooltipKey: null },
      { text: 'Utilizar aceleradores de investigación', tooltipKey: null }
    ],
    dont: [
      'No abrir regalos de las construcciones',
      'No abrir cofres de dron (ni de componentes, ni de chips)',
      'No usar nada del dron',
      'No mejorar los héroes',
      'No usar tickets de héroes ni supervivientes',
      'Usar aceleradores de construcción e investigación solo en caso de VS decisivo'
    ]
  },

  Domingo: {
    do: [
      { text: 'Guardar tareas de radar', tooltipKey: 'radar' },
      { text: 'Poner tropas a recolectar (que terminen después del reinicio del servidor para puntuar el lunes)', tooltipKey: 'gather' },
      { text: 'Comprar recursos (sin gastar dinero real)', tooltipKey: 'buyResources' },
      { text: 'Guarda la tarea UR con estrella para el martes', tooltipKey: 'shinyTaskStar' },
      { text: 'Tomar un Martini', tooltipKey: null }
    ],
    dont: [
      'No realizar tareas de radar, se guardan para mañana',
      'No abrir regalos de las construcciones',
      'No abrir cofres de dron (ni de componentes, ni de chips)',
      'No usar nada del dron',
      'No mejorar los héroes',
      'No usar tickets de héroes ni supervivientes',
      'No usar aceleradores'
    ]
  }
}