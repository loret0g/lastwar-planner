export const SECTIONS = [
  'Tareas Diarias',
  'Carrera de armas',
  'Duelo de alianza',
  'Duelo de servidor',
  'Asedio zombie',
  'Héroes',
  'Requisitos CG'
];

export const DAYS = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
];

// Ejemplo mínimo. Amplíalo según tu estrategia.
export const DEFAULT_TASKS = {
  'Tareas Diarias': {
    Lunes: [
      'Hacer radar',
      'Donar al centro de ayuda',
      'Entrenar tropas'
    ],
    Martes: [
      'Guardar tareas radar (i)',
      'Esperar carrera de armas de construcción para abrir regalos'
    ],
    // ...
  },

  'Carrera de armas': {
    Martes: [
      'Ahorra energía para la I+D',
      'Gastar aceleradores solo si llegas al cofre 3'
    ],
    
    
  }
  // resto de secciones …
};