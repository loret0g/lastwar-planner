export const SECTIONS = [
  {
    key: "hq-barracks",
    title: "Subir Cuartel general y Barracas",
    items: [
      { text: "El Cuartel General aumenta tu poder y permite a tus héroes conseguir un nivel más alto." },
      { text: "Adelántate a los requisitos que piden para subir el siguiente nivel del cuartel general." },
      {
        text: "Las Barracas, dependiendo de su nivel, te permitirá crear soldados más fuertes.",
        sub: ["Barraca nivel 24 – T8", "Barraca nivel 27 – T9", "Barraca nivel 30 – T10"]
      },
      { text: "Mejora los campos de entrenamiento para poder albergar más tropas." }
    ],
    ctas: [
      { kind: "link", to: "/hq-requirements", label: "Ver requisitos" }
    ]
  },
  {
    key: "first-squad",
    title: "Héroes: Como subir de nivel",
    items: [
      { text: "Hay que tener el primer escuadrón fuerte, será con el que ataques y defiendas tu base." },
      { text: "Céntrate en mejorar el primer escuadrón, no es conveniente ir subiendo a todos los héroes." },
      { text: "Prioriza los héroes UR (dorados)." },
      { text: "Invierte armamento/chips de dron/fragmentos primero en ese equipo." },
      { text: "Poco a poco deberías tener un escuadrón de tipo tanque, otro aéreo y otro de misiles. (paciencia)" }
    ],
    ctas: [
      { kind: "guide", guideKey: "heros", label: "Prioridad de héroes (guía)" }
    ]
  },

  {
    key: "placement",
    title: "Colocación de los héroes",
    items: [
      { text: "Héroes de defensa (símbolo de escudo) en los dos huecos de adelante." },
      { text: "Atrás, a cada lado, 2 de ataque (símbolo de explosión) y uno de apoyo (símbolo de +) en el medio." }
    ],
    ctas: [
      { kind: "modal", modalKey: "placement", label: "Ver ejemplo" }
    ]
  },
  {
    key: "same-type",
    title: "Escuadrones del mismo tipo",
    items: [
      { text: "Es conveniente tener 3 escuadrones diferentes: tanque, aeronave, misil." },
      { text: "Tener los 5 héroes del mismo tipo da un 20% de buff." },
      { text: "4 héroes del mismo tipo: 15%" },
      { text: "3 de un tipo y 2 de otro: 10%" },
      { text: "3 héroes del mismo tipo: 5%" }
    ]
  },
  {
    key: "equipment",
    title: "Armamento",
    items: [
      { text: "Sube armamento adecuado al rol de tus héroes. Aporta muchísimo poder efectivo." },
      {
        text: "Armamento recomendado:", sub: [
          "Héroes de ataque: Armamento de la izquierda (Cañón y Chip de datos)",
          "Héroes de defensa: Armamento de la derecha (Armadura y Radar)",
          "Héroes de apoyo: Armamento de la izquierda (Cañón y Chip de datos)"
        ]
      },
      { text: "Sube solo el armamento UR (dorado). El morado y azul olvídalos." }
    ],
    ctas: [
      { kind: "guide", guideKey: "equipment", label: "Más detalles" }
    ]
  },
  {
    key: "wall",
    title: "Quitar tropas de la muralla",
    items: [
      { text: "No tengas las tropas en la muralla, ya que si te ataca alguien de más nivel tendrás muchas más pérdidas." },
      { text: "Actívalas únicamente si ves que te ataca un nivel inferior al tuyo y en el evento de Asedio Zombie." }
    ],
    ctas: [
      { kind: "modal", modalKey: "wall", label: "Más detalles" }
    ]
  },
  {
    key: "heal",
    title: "Curar tropas",
    items: [
      { text: "Cura poniendo una cola pequeña (~25 min, ~50 tropas). Con la ayuda de aliados vuelve casi inmediata. Por eso es clave tocar 'Ayuda' siempre." }
    ]
  },
  {
    key: "ladder",
    title: "Entrenamiento de tropas",
    items: [
      { text: "Debes tener barracas de diferente nivel, una nivel máximo que te permita crear tropas de nivel máximo, y 3 barracas con niveles inferiores a modo de escalera. " },

      { text: "Por ejemplo, si eres nivel 24, tendrás tropas nivel 8, pues una barraca tiene que poder tener tropas de ese nivel, otra barraca nivel 7, otra nivel 6 y otra nivel 5. " },
      {
        text: "Una vez tengas así las barracas, podrás promocionar tropas en escalera (mucho más rápido y barato que crearlas desde cero).",
        sub: ["Primero debes crear tropas de un nivel inferior al mínimo, en este caso nivel 4.", "Después en una barraca podrás subirla del 4 al 5.", "Otra del 5 al 6.", "Otra del 6 al 7.", "Y la última del 7 al 8."]
      }
    ]
  },
  {
    key: "roles",
    title: "Cargos de la capital",
    items: [
      { text: "Usa los bonus para acelerar construcción, investigación y entrenamiento." },
    ],
    ctas: [
      { kind: "guide", guideKey: "roles", label: "Más detalles" }
    ]
  },
  {
    key: "mines",
    title: "Usa las minas para moverte rápido y atacar al enemigo",
    items: [
      { text: "Si estás lejos, no ataques directo." },
      { text: "Usa minas de recursos: envía un escuadrón a una mina cercana al objetivo; cuando pase cerca del rival, ordena el ataque a la base." },
      { text: "Llegarás más rápido y sin avisar al radar enemigo hasta el último momento." },
      { text: "También sirven para volver a la base más rápido. Si vienes de atacar, verás que tu escuadrón va muy lento por el mapa." }
    ]
  },
  {
    key: "reports",
    title: "Lee los reportes",
    items: [
      { text: "Averigua la cantidad de tropas que pierdes por ataque." },
      { text: "Después de atacar a un doom, un caminante o un enemigo deberías mirar el reporte en tu correo. Así podrás saber la cantidad de tropas que pierdes para ajustar el nivel del zombi y saber si compensan las pérdidas." },
    ],
    ctas: [
      { kind: "modal", modalKey: "reports", label: "Cómo leer los reportes" }
    ]
  },
  {
    key: "vip",
    title: "Pase VIP con diamantes",
    items: [
      { text: "Ahorra 10.000 diamantes para el VIP mensual." },
      { text: "En base, botón VIP (arriba izquierda) → 30 días por 10.000. Renuévalo antes de que acabe: los días se suman." },
      { text: "Da bonificaciones globales muy útiles (reducción de tiempo, más recursos, más daño...)." }
    ]
  },
  {
    key: "shield",
    title: "Poner escudo",
    items: [
      { text: "Activa el escudo el viernes." },
      { text: "Comprueba la duración del escudo y renueva antes de que expire." }
    ],
    ctas: [
      { kind: "guide", guideKey: "shield", label: "Ver guía de escudo" }
    ]
  },
  {
    key: "attack",
    title: "Atacar enemigo",
    items: [
      { text: "Antes de atacar o defender a un compañero, revisa el nivel del objetivo y su potencia. Evita pérdidas innecesarias." },
      { text: "Usa minas para acercarte sin activar el radar enemigo hasta el último momento." }
    ],
    ctas: [
      { kind: "guide", guideKey: "attack", label: "Ver guía para atacar" }
    ]
  },

];