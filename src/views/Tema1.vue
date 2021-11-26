<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Tipos de informes, desarrollo y ejecución de pruebas
    .row.justify-content-start.align-items-start.mt-5           
      .col-lg-7.p-t1-color-1.p-3.pe-5(data-aos="slide-down")
        p(data-aos="slide-down").pe-5 Los informes son documentos que tienen como objetivo comunicar una serie de información recolectada previamente; esta información, por lo general, es usada como insumo para realizar análisis, estadísticas, establecer conclusiones, entre otros.<br>La información establecida en los informes es usada para resolver un determinado problema o un proceso que está en mejora continua. La forma de escribir un informe es en prosa informativa. También se encuentran recomendaciones y el análisis del autor para dar lineamientos de solución a determinado problema. 

    .row.justify-content-center.align-items-center.row-top-t1
      .col-lg-6.mt-5.pt-5    
        p(data-aos="slide-down").mt-5.pt-5 Los informes dependiendo de su función en páginas y su extensión, o en relación con su contenido o, incluso su redacción, suelen clasificarse de la manera en que se muestra a continuación:              
      .col-lg-6
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img1.png', alt='')

    TabsC.color-acento-botones.mt-5(data-aos="fade-down")
      .py-3.py-md-4.bg-img-3(titulo="Por sus páginas y extensión")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img2.svg', alt='')

          .col-lg-6.bg-card-tabs.p-5
            h5.mb-4 Por sus páginas y extensión
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span #[b Ejecutivo]: no excede las 10 páginas, a la vez que se sustenta la información recolectada.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span #[b Informes largos:] exceden las 10 páginas.

      .py-3.py-md-4.bg-img-3(titulo="Con base en su contenido")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img3.svg', alt='')

          .col-lg-6.bg-card-tabs.p-5
            h5.mb-4 Con base en su contenido
            .list
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Divulgativo: cualquier persona lo puede leer, es para el público en general.
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Científico: maneja un lenguaje especializado, especifica información científica como resultado de una investigación .
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Técnico: mantiene el nivel del tipo científico pero está enfocado en organizaciones de nivel privado o público, con un objetivo específico. 
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Mixto: es usado para exponer información para el público en general como instituciones. 


      .py-3.py-md-4.bg-img-3(titulo="De acuerdo a los tipos de redacción")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img4.svg', alt='')

          .col-lg-6.bg-card-tabs.p-5
            h5.mb-4 De acuerdo a los tipos de redacción
            .list
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Analíticos: su objetivos es exponer análisis y la ratificación de acciones determinadas. 
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Expositivos: contiene datos e información que desean ser expuestos al público. 
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="")
              .list__txt 
                  span Persuasivos: su narrativa busca incentivar unas bases para que el destinatario se convenza de lo expuesto. 


      .py-3.py-md-4.bg-img-3(titulo="Otras clasificaciones")
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-t.img-a.my-3.yoyo(src='@/assets/ilustraciones/img5.svg', alt='')

          .col-lg-6.bg-card-tabs.p-5
            h5.mb-4 Otras clasificaciones
            p Existen otros tipos de informes como los de trabajo, de investigación, financieros, académicos, de pruebas, de incidencias, entre otros.   

    separador(data-aos="slide-left")

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Análisis de resultados e incidencias detectadas
    p(data-aos="slide-down") Una vez ejecutadas las pruebas, se deben analizar los resultados y los fallos detectados, teniendo en cuenta el reporte de defectos, directrices para detectarlos y el informe de resultados de pruebas.

    p(data-aos="slide-down") Para ello, es muy importante aplicar las siguientes acciones:

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="flip-down").mt-5
      .bloque-texto-g__img.br-img-g(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        .list
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Analizar el impacto del defecto.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Investigar el problema, en qué condiciones se produce este fallo.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Analizar la severidad, si es alta o baja.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span.ms-2 Variar los pasos realizados, se pueden ejecutar en orden diferente para observar si existe alguna variante en el resultado esperado.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span.ms-2 Variar opciones de configuración, si estamos probando una aplicación web podemos probar con diferentes navegadores.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span.ms-2 Determinar condiciones específicas bajo las cuales se reproduce el defecto, si se están probando entradas de datos entonces probar con diferentes datos, es decir se va a tener más información sobre cómo se reproduce el defecto, si en los campos numéricos se prueba números positivos y negativos.

    .tarjeta--container.row.mt-5
      .col-md.tarjeta.color-secundario.p-5.text-white(data-aos="slide-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.yoyo(src='@/assets/ilustraciones/img7.svg', alt=' ')          
        h4.text-center Incidencias detectadas
        p La gestión de incidencias es un elemento central e importante en el proceso de calidad de software puesto que es en este punto donde se tienen en cuenta los errores (Bugs). Por lo tanto, el propósito de las incidencias detectadas es, precisamente, generar su corrección, de tal manera que sea mínimamente probable que el error se repita.

      .col-md.tarjeta.color-acento-botones.bg-color-1.p-5(data-aos="slide-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.yoyo(src='@/assets/ilustraciones/img8.svg', alt=' ')          
        h4.text-center Ciclo de vida de incidencias
        p Un sistema de gestión de incidentes debe manejar los errores de software teniendo en cuenta el siguiente proceso:

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")
      .col-lg-10.t-1-row-color-1.p-5.pt-4.row-radius-1  
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Ciclo de vida de una incidencia de <i>software</i>
        img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img9.svg', alt=' ')
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10.p-0        
        figcaption Nota. La Oficina de Proyectos de Informática (2016).           

    p(data-aos="slide-down").mt-5 El proceso de manejo de errores de software, para proyectos de software en fase de desarrollo (no en ambiente de producción), presenta la siguiente secuencia: 
    .row.justify-content-center.align-items-center.mt-5(data-aos="slide-right")
      .col-lg-10.p-5.t1-col-color-1    
        .list
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span #[b Nuevo:] durante las pruebas de <i>software</i>, los errores de <i>software</i> deben ser identificados y registrados por el <i>tester</i> de <i>Software</i> siendo ese instante donde se reporta el error.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span #[b Abierto:] el equipo de desarrollo adquiere el incidente y empieza a analizarlo.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span #[b Asignado:] el incidente es asignado al desarrollador.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span El incidente se clasifica como rechazado, si no aplica.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Si el incidente aplica y es de bajo impacto o existe alguna acción que limite la corrección prioritaria puede entra a diferido.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Cuando el incidente es corregido, este es retornado al equipo de <i>testers</i> de <i>software</i>, nos obstante si el <i>tester</i> verifica que no ha sido corregido, puede clasificarlo como reabierto.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Se clasifica como verificado si la prueba es positiva.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Se clasificarse como cerrado, posterior a una verificación por parte del equipo de <i>testing</i>.

    separador(data-aos="slide-left")

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Redacción del reporte de incidencias

    img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img10.jpg', alt='')
    p(data-aos="slide-down").mt-5 El propósito del informe de incidentes es documentar cada incidente, por lo tanto, se debe seguir un procedimiento para gestionar, de forma sistémica y ordenada, las incidencias de producto halladas a lo largo de la ejecución de los casos de prueba.

    p(data-aos="slide-down") A continuación, se muestran las actividades que tiene este procedimiento:

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")    
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador(data-aos="slide-left")

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Informe de resultados de pruebas

    p(data-aos="slide-down") El informe de resultados de pruebas presenta y ordena un análisis sintético de los resultados de las pruebas y las medidas principales de prueba para la evaluación y verificación, por lo tanto, este documento es responsabilidad del gerente de pruebas. 

    p(data-aos="slide-down") Este informe debe contener los siguientes puntos:
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-5(data-aos="fade-right")
        img.img-t.img-a.my-3(data-aos="zoom-in")(src='@/assets/ilustraciones/img11.svg', alt='')

      .col-lg-7(data-aos="fade-left")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Alcance de las pruebas, es decir, lo que es necesario incluir y no incluir.    
        ol.lista-ol--cuadro.mb-0
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Resumen de pruebas:
        .row.justify-content-center.align-items-center          
          .col-lg-11           
            .list
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v3.svg", alt="")
              .list__txt 
                  span Casos de prueba planificados.
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v3.svg", alt="")
              .list__txt 
                  span Casos de prueba ejecutados.
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v3.svg", alt="")
              .list__txt 
                  span Casos de prueba exitosos.
            .list
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v3.svg", alt="")
              .list__txt 
                  span Casos de prueba fallidos.
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v3.svg", alt="")
              .list__txt 
                  span Casos de prueba bloqueados.
                    
        ol.lista-ol--cuadro.mt-2
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Listado de defectos detectados. 
                    
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Conclusiones. 

    separador(data-aos="slide-left")

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Plan de mejora continua y #[b refactoring] 
    p(data-aos="slide-down") El plan de mejora continua contribuye a asegurar y estabilizar los procesos que se llevan a cabo para aumentar y optimizar la calidad de un producto, a través de la mejora constante del mismo. Por lo tanto, su ejecución continua propende a mejorar, de manera incremental, la eficiencia y calidad de tareas y procesos.

    p(data-aos="slide-down") La mejora continua contribuye en el desarrollo de software cuando se implementan pruebas de <i>software</i>, como procedimiento importante, al utilizar metodologías que utilizan ámbitos y herramientas varias.

    p(data-aos="slide-down") Algunos de esas metodologías, ámbitos y herramientas son:
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12.d-none.d-lg-block  
        ImagenInfografica.color-acento-botones.mt-5(data-aos="slide-left")
          template(v-slot:imagen)
            figure
              img(src='@/assets/ilustraciones/img12.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="5.3%" y="31%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/1.svg', alt='')   
            .h5.mb-4 Metodologías en las pruebas de software:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Automatización de despliegues e integración continua: Jenkins, Bamboo.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Ejecución automática de pruebas y construcción de proyectos: Maven, Gradle.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Código fuente y control de versiones: Git, Mercurial.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Automatización de pruebas: Selenium, SonarQube, Junit.

          .tarjeta.color-acento-botones.p-3(x="14.5%" y="7.3%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/2.svg', alt='')   
            .h5.mb-4 Cambios que garantizan la calidad del código fuente:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Codificar mediante Unit Tests TDD.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Mediante BDD ampliar TDD (Desarrollo guiado por el comportamiento).
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Implementación de pruebas de aceptación de aceptación en el plan de QA.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Utilizar sistemas “poka-yoke” para que alerte de posibles errores.  

          .tarjeta.color-acento-botones.p-3(x="29.9%" y="14.5%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/3.svg', alt='')   
            .h5.mb-4 Beneficios que aporta la implementación de mejora continua en los procesos de desarrollo de software:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Mejora de los procesos de calidad.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Mejora de la calidad del producto.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Mejoramiento en términos de calidad del equipo.


          .tarjeta.color-acento-botones.p-3(x="44%" y="32.5%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/4.svg', alt='')   
            .h5.mb-4 Proceso que debe seguir un plan de mejora:
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/img13.svg', alt='')  

          .tarjeta.color-acento-botones.p-3(x="59.2%" y="36.9%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/5.svg', alt='')   
            .h5.mb-4 Análisis de las causas que provocan el problema en el tiempo:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Identificar los procesos y el área a mejorar.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Análisis del impacto que tiene el proceso en el área para alcanzar los objetivos definidos.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Describir los efectos negativos y las causas de las incidencias y problemas identificados.


          .tarjeta.color-acento-botones.p-3(x="65.6%" y="11.9%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/6.svg', alt='')   
            .h5.mb-4 Propuesta y planificación del plan:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Precisar los resultados y objetivos del análisis realizado en el primer punto.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Analizar las posibles soluciones.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Elaborar acciones para la solución.


          .tarjeta.color-acento-botones.p-3(x="76.2%" y="26.9%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/7.svg', alt='')   
            .h5.mb-4 Implementación y seguimiento:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span El encargado de realizar las acciones debe informar sobre el plan.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Ejecutar las actividades programadas con los involucrados.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Comprobar que se dé cumplimiento al plan de acuerdo con lo proyectado.


          .tarjeta.color-acento-botones.p-3(x="91.8%" y="32.6%" numero="")
            img.img-a.img-t.my-3(src='@/assets/ilustraciones/8.svg', alt='')   
            .h5.mb-4 Evaluación:
            .row.justify-content-center.align-items-center.mb-4          
              .col-lg-12           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Verificar que se dé cumplimiento al plan de mejora continua, de acuerdo con la planificación.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span Diseñar un plan de evaluación, posteriormente ejecutarlo.
                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span En la evaluación se realiza un informe expresando las ventajas y desventajas de los resultados obtenidos del plan de mejora.
    .info-movil.p-3.d-block.d-lg-none
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/1.svg', alt='')
        .col-10
          .h5 Metodologías en las pruebas de software:
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Automatización de despliegues e integración continua: Jenkins, Bamboo.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Ejecución automática de pruebas y construcción de proyectos: Maven, Gradle.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Código fuente y control de versiones: Git, Mercurial.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Automatización de pruebas: Selenium, SonarQube, Junit.

    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/2.svg', alt='')
        .col-10
          .h5 Cambios que garantizan la calidad del código fuente:
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Codificar mediante Unit Tests TDD.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Mediante BDD ampliar TDD (Desarrollo guiado por el comportamiento).
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Implementación de pruebas de aceptación de aceptación en el plan de QA.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Utilizar sistemas “poka-yoke” para que alerte de posibles errores.  

    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/3.svg', alt='')
        .col-10
          .h5 Beneficios que aporta la implementación de mejora continua en los procesos de desarrollo de software: 
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Mejora de los procesos de calidad.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Mejora de la calidad del producto.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Mejoramiento en términos de calidad del equipo.

    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/4.svg', alt='')
        .col-10
          .h5 Proceso que debe seguir un plan de mejora:
        img.img-a.img-t(src='@/assets/ilustraciones/img13.svg', alt='')  

    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/5.svg', alt='')
        .col-10
          .h5 Análisis de las causas que provocan el problema en el tiempo: 
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Identificar los procesos y el área a mejorar.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Análisis del impacto que tiene el proceso en el área para alcanzar los objetivos definidos.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Describir los efectos negativos y las causas de las incidencias y problemas identificados.


    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/6.svg', alt='')
        .col-10
          .h5 Propuesta y planificación del plan:
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Precisar los resultados y objetivos del análisis realizado en el primer punto.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Analizar las posibles soluciones.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Elaborar acciones para la solución.          

    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/7.svg', alt='')
        .col-10
          .h5 Implementación y seguimiento: 
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span El encargado de realizar las acciones debe informar sobre el plan.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Ejecutar las actividades programadas con los involucrados.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Comprobar que se dé cumplimiento al plan de acuerdo con lo proyectado.          

    .info-movil.p-3.d-block.d-lg-none.mt-4
      .row.justify-content-center.align-items-center.mb-4          
        .col-auto
          img.img-a.img-t.mb-3(src='@/assets/ilustraciones/8.svg', alt='')
        .col-10
          .h5 Evaluación:                                                        
      .row.justify-content-center.align-items-center.mb-4          
        .col-lg-12           
          .list
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Verificar que se dé cumplimiento al plan de mejora continua, de acuerdo con la planificación.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span Diseñar un plan de evaluación, posteriormente ejecutarlo.
          .list.mt-3
            .list__item
                .list__item__icon
                    img(src="@/assets/ilustraciones/v4.svg", alt="")
            .list__txt 
                span En la evaluación se realiza un informe expresando las ventajas y desventajas de los resultados obtenidos del plan de mejora.
    .row.justify-content-start.align-items-center.mt-5
      .col-lg-4
        p.color-1-t1.mb-0.p-3.ps-4(data-aos="slide-right") #[b Refactoring] (refactorización)

    .row.justify-content-start.align-items-end.mt-5           
      .col-lg-7.p-t1-color-1.p-3.pe-5(data-aos="slide-down")
        p(data-aos="slide-down").pe-5 Al procedimiento de modificar el código de un desarrollo para mejorar la facilidad de comprensión del código y cambiar su diseño y estructura interna sin alterar ni incorporar funcionalidades, se le llama <i>refactoring</i>; en términos generales, es una técnica para mejorar la calidad del <i>software</i>.<br> La refactorización es una actividad sistemática de incorporación de mejoras en el código, introduciendo una modificación simple para luego realizar la prueba respectiva, en consecuencia, se reduce la posibilidad de que en el código se encuentren errores (<i>Bugs</i>).<br> Se debe explorar el siguiente recurso y reconocer los aspectos más importantes relativos a refactorización:

    .row.justify-content-end.align-items-start
      .col-lg-6.row-top-2-t1.d-none.d-lg-block  
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img14.png', alt='')  

    TabsA.color-acento-contenido.mt-5(data-aos="flip-down")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Proceso de refactorización")
        h5 Proceso de refactorización
        p Empieza con una parte de código existente, limpiando el código para poder reducir el costo de las modificaciones y es una forma de poderse enfrentar a lo que se denomina el diseño evolutivo, es decir a medida que el tiempo avanza lo que se realiza es un mejoramiento y una reorganización en el diseño del código cada vez que se debe reescribir.

      .tarjeta.color-acento-botones--borde.p-4(titulo="¿Por qué refactorizar?")
        h5 ¿Por qué refactorizar?
        .list.mt-4
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Optimizar el diseño del software.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Permitir que el código sea más fácil de comprender.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Permitir que sea más fácil de hallar fallos
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Hacer que la actividad de programar sea más rápida.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Refactorizar cuando se necesite arreglar un fallo.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Realizar refactorización sistemáticamente. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Refactorizar cuando se encuentre código sospechoso, código duplicado, clases y métodos muy extensos.

      .tarjeta.color-acento-botones--borde.p-4(titulo="Cuándo refactorizar")
        h5 Cuándo refactorizar
        .list.mt-4
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Se adiciona una nueva funcionalidad.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Se depura el código para buscar fallos.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Se verifica el código.  

      .tarjeta.color-acento-botones--borde.p-4(titulo="Cuándo no refactorizar")
        h5 Cuándo no refactorizar
        .list.mt-4
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Cuando el código original contiene múltiples fallos o su diseño es imperfecto, puesto que sería mejor reescribir de nuevo.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v4.svg", alt="")
          .list__txt 
              span Cuando los plazos de entrega estén al límite de su cumplimiento. 

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-4
        p.color-1-t1.mb-0.p-3.ps-4(data-aos="slide-right") Refactorización y metodología ágil
        
    p(data-aos="slide-down").mt-5 La refactorización tiene amplia relación con las metodologías ágiles donde, en algunas, su producto fundamental es el código y están diseñadas, básicamente, para poder soportar los cambios que recibe el código.

    p(data-aos="slide-down") Algunas prácticas clave, de algunas metodologías ágiles, son:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        img.img-t.img-a.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img15.svg', alt='') 
      .col-lg-4.p-5.t1-col-color-1(data-aos="zoom-in-left")    
        .list
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Desarrollo iterativo.
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Código <i>Self Testing.</i>
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span <i>Refactoring.</i>
        .list.mt-3
          .list__item
              .list__item__icon
                  img(src="@/assets/ilustraciones/v2.svg", alt="")
          .list__txt 
              span Programación por parejas.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/icono-pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  p.mb-0 Para profundizar en las acciones por desarrollar en la reestructuración de un código de programa, explore el Anexo 2. Refactorizando código fuente. Procure llevar registro de los aspectos más importantes en su libreta personal de apuntes. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Actividad_refactorizando_codigo_fuente.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.img-infografica__card
  width: 700px !important
.img-infografica__item__dot::before
  width: 200% !important
  height: 200% !important
  opacity: 0 !important
.img-infografica__item__dot::after
  width: 200% !important
  height: 200% !important
</style>
