export default {
  global: {
    componenteFormativo: 'Evaluación de la prueba de <i>software</i>',
    descripcionCurso:
      'A través del estudio de este componente, el aprendiz estará en capacidad de evaluar el proceso de pruebas de <i>software</i> sobre el producto, con lo cual tendrá la oportunidad de establecer el porcentaje de pruebas exitosas y fallidas, establecer un plan de <i>refactoring</i> y conocer los procesos de gestión del conocimiento y herramientas para el respaldo de la información.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de informes, desarrollo y ejecución de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis de resultados e incidencias detectadas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Redacción del reporte de incidencias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Informe de resultados de pruebas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Plan de mejora continua y <i>refactoring</i>',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de gestión de la información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de gestión de la información',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normativas de gestión de la información',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Herramientas para la gestión de la información',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Copias de seguridad',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bustamante, J. (2011). Sistema de informes para pruebas de software. IUE ',
      link: 'http://bibliotecadigital.iue.edu.co/xmlui/handle/20.500.12717/153',
    },
    {
      referencia:
        'Clemente, P., & Gómez, A. (2014). Aplicación de un proceso de mejora continua en una asignatura de Desarrollo de Software Dirigido por Modelos. Universidad Politécnica de Cataluña. ',
      link: 'http://hdl.handle.net/2099/15497',
    },
    {
      referencia:
        'La Oficina de Proyectos de Informática (2016). La falla más frecuente en los sistemas de seguimiento de incidentes de software. ',
      link:
        'http://www.pmoinformatica.com/2016/07/falla-sistema-seguimiento-incidentes.html ',
    },
    {
      referencia:
        'Mera, J. (2016). Análisis del proceso de pruebas de calidad de software. Universidad Cooperativa de Colombia. Ingeniería Solidaria, 12(20), 163-176. https://doi.org/10.16925/in.v12i20.1482',
    },
  ],
  glosario: [
    {
      termino: 'Defecto',
      significado:
        'problema encontrado en un sistema que causa que este falle cuando desempeña funciones requeridas.',
    },
    {
      termino: 'Incidencia',
      significado:
        'suceso que se produce durante una actividad y puede causar, una disminución de calidad de este.',
    },
    {
      termino: '<i>Refactoring</i>',
      significado:
        'es un proceso sistemático que hace que se mejore el código, que sea más fácil de reparar y modificar sin crear nuevas funcionalidades.',
    },
  ],
  complementario: [
    {
      texto:
        'Función Pública. (2019). Guía para gestionar incidencias y requerimientos del Sistema – SUIT. ',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/documents/34645357/34703090/guia-incidencias-requerimientos-suit.docx.pdf/a3de93c5-8ee7-486d-860e-9eafe89faaf4?t=1602108398168',
    },
    {
      texto:
        'Mera, J. (2016). Análisis del proceso de pruebas de calidad de software. Universidad Cooperativa de Colombia. Ingeniería Solidaria, 12(20), 163-176. ',
      tipo: 'Articulo',
      link:
        'https://www.researchgate.net/publication/313267627_Analisis_del_proceso_de_pruebas_de_calidad_de_software',
    },
    {
      texto:
        'Uribe, C. (2020). Desarrollo de aplicaciones web y pruebas de software. Portal de revistas académicas UTP. ',
      tipo: 'Página web',
      link:
        'https://medium.com/@XFelipeM/refactorizaci%C3%B3n-de-c%C3%B3digo-like-a-champion-1-a9c9c95d704f',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ervin Andrade',
        cargo: 'Experto temático',
        centro: 'SENA - Regional Cauca CTPI',
      },
      {
        nombre: 'Gustavo Rodriguez',
        cargo: 'Experto temático',
        centro: 'SENA - Colombo Alemán',
      },
      {
        nombre: 'Peter Pinchao',
        cargo: 'Experto temático',
        centro: 'SENA - Regional Cauca CTPI',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Tolima - Centro agropecuario La Granja',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
