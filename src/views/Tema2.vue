<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Gestión de la información     
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g-1.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g-1__img.br-img-g-ml(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img16.jpg')})`}"
          )
          .bloque-texto-g-1__texto.p-4
            p La información es el conjunto de datos usados por una organización que, procesados y en contexto adecuado, representan valor e insumo. Estos datos proveen conceptos y saberes sobre una materia, fenómeno o ente determinado.<br>

            p En informática los datos se conciben como un conjunto de datos organizados, bien estructurados y procesados que operan como mensajes, instrucciones, operaciones u otro tipo de actividad que tenga lugar en un ordenador.<br> 

            p.mb-0 Se pueden conocer otros aspectos clave de la gestión de la información, en el recurso que se muestra a continuación:  
    .row.justify-content-end.align-items-center.row-t2-top-1
      .col-lg-6.p-0
        img.img-w.img-a.me-0(src='@/assets/ilustraciones/img17.svg', alt='') 
    .row.justify-content-center.align-items-center
      .col-lg-12.p-0
        .bg-img-1.mt-5.p-5.padding-color-purp(data-aos="zoom-in")
          h4.title-color-purp.padding-title.pt-5(data-aos="fade-down") Gestión de la información 
          .row.justify-content-between.align-items-stretch
            .col-lg-4.col-sm-12.px-5.mt-5(data-aos="fade-down")
              img.img-t.img-a(src='@/assets/ilustraciones/img19.svg', alt='')
              p.bg-color-white.p-4.pt-5.p-m-top Con la información se pueden solucionar problemas, determinar alternativas, tomar decisiones, entre otras. La información es considerada la base del conocimiento. 

            .col-lg-4.col-sm-12.px-5.mt-5(data-aos="fade-down")
              img.img-t.img-a(src='@/assets/ilustraciones/img20.svg', alt='')
              p.bg-color-white.p-4.pt-5.p-m-top Una de las consecuencias más importantes de la información es poder modificar el estado de conocimiento de un ser, como individuo, o de un sistema.

            .col-lg-4.col-sm-12.px-5.mt-5(data-aos="fade-down")
              img.img-t.img-a(src='@/assets/ilustraciones/img21.svg', alt='')
              p.bg-color-white.p-4.pt-5.p-m-top El nuevo conocimiento logrado, influirá en las acciones, actitudes y decisiones que se tomen en una organización.

          .row.justify-content-center.align-items-stretch.pb-5
            .col-lg-4.col-sm-12.px-5.mt-5(data-aos="fade-down")
              img.img-t.img-a(src='@/assets/ilustraciones/img22.svg', alt='')
              p.bg-color-white.p-4.pt-5.p-m-top Para las organizaciones es de gran valor, poder tener una gestión adecuada de la información, dado que ello permite, posteriormente, tener acceso a sus bases de conocimientos.

            .col-lg-4.col-sm-12.px-5.mt-5(data-aos="fade-down")
              img.img-t.img-a(src='@/assets/ilustraciones/img23.svg', alt='')
              p.bg-color-white.p-4.pt-5.p-m-top Con el conocimiento logrado, se podrá:<br>solventar problemas, determinar acciones, tomar decisiones, establecer planes de mejora, establecer estrategias, entre otros. 
              
    separador(data-aos="slide-left")

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Concepto de gestión de la información  
    p(data-aos="slide-down").mb-5 La información es un bien muy importante en las organizaciones; permite responder a las necesidades, tomar decisiones, gestionar y orientar procesos o grupos de interés.
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12   
        .row.justify-content-start.align-items-end.mt-5           
          .col-lg-7.p-t2-color-1.p-3.pe-5(data-aos="slide-down")
            p(data-aos="slide-down").pe-5 En este ámbito, es necesario fomentar la capacidad de análisis de las personas que definen las políticas, estrategias, evaluaciones, control y mecanismos de trazabilidad, contando con las herramientas necesarias con las funcionalidades de seguimiento, análisis, presentación y publicación de la información, según los ciclos de vida de esta y teniendo en cuenta los diversos públicos y audiencias.<br>Se deben tener en cuenta los elementos que se enuncian a continuación, se trata de aspectos de suma importancia en los procesos de gestión de la información en las organizaciones:

        .row.justify-content-end.align-items-start
          .col-lg-6.row-top-1-t2.d-none.d-lg-block  
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10(data-aos="fade-left")  
        LineaTiempoD.color-primario
          .row.justify-content-center.align-items-center(numero="1" titulo="Características de la gestión")
            .col-lg-7
              p La gestión de la información debe tener en cuenta las siguientes características:
              .row.justify-content-center.align-items-center.mt-4
                .col-lg-11           
                  .list
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Única fuente.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Calidad.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Definida como un bien público.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Acceso en tiempo real.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Acceso como servicio.               
            .col-lg-5
              img.img-t.img-a.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img25.svg', alt='') 


          .row.justify-content-center.align-items-center(numero="2" titulo="Procesos de toma de decisiones")
            .col-lg-7
              p La información debe cumplir con las siguientes características para apoyar el proceso de decisión:
              .row.justify-content-center.align-items-center.mt-4
                .col-lg-11           
                  .list
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Utilidad.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Pertinencia.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Oportunidad.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Completitud.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Confiabilidad.
            .col-lg-5
              img.img-t.img-a.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img26.svg', alt='') 

          .row.justify-content-center.align-items-center(numero="3" titulo="Ciclo de vida de la información")
            .col-lg-7
              p La estrategia de la información se basa en el ciclo de vida de la información, la cual desarrolla los siguientes procesos:
              .row.justify-content-center.align-items-center.mt-4
                .col-lg-11           
                  .list
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Definición de la información.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Recolección de la información.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Validación de la información. 
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Consolidación para el análisis.
                  .list.mt-3
                    .list__item
                        .list__item__icon
                            img(src="@/assets/ilustraciones/v4.svg", alt="")
                    .list__txt 
                        span Publicación.
            .col-lg-5
              img.img-t.img-a.yoyo(data-aos="zoom-in")(src='@/assets/ilustraciones/img27.svg', alt='') 

          .row.justify-content-center.align-items-center(numero="4" titulo="Características de la gestión")
            .col-lg-12
              p Como resultado de la gestión de la información se pueden destacar los mecanismos de uso y accesos disponibles, información de calidad, generación de valor por medio de los datos, apoyo a la toma de decisiones, instrumentos de análisis de la información, y fuentes de datos e información para agentes especializados.
              
    separador(data-aos="slide-left")

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Técnicas de gestión de la información

    .row.justify-content-center.align-items-start       
      .col-lg-7(data-aos="fade-right")
        p El proceso de recolección de información, en una organización, suele llegar a ser complejo, más si son entidades que cuentan con muchos trabajadores y sedes, por lo que se requiere en muchas ocasiones de gran capacidad funcional.

        p De esta gestión depende el correcto funcionamiento de las áreas, las cuales pueden ser de abastecimiento de producción y manejo de inventarios, entre otros. 

        p Las siguientes, son técnicas que permiten mejorar la capacidad de gestión de datos e información:    
      .col-lg-5(data-aos="fade-left")  
        img.img-t.img-a(src='@/assets/ilustraciones/img29.svg', alt='') 

    .bg-img-2.mt-5.p-5
      SlyderA.slider-bg.p-5.br-radius.d-none.d-lg-block
        .row.justify-content-center.align-items-center
          .col-5
            h5 Utilizar tecnología en la nube
            p Para una gestión de datos fiable y eficaz se requiere que esté centralizada, que todos los accesos estén direccionados a la misma fuente de datos; esto ofrece flexibilidad, rapidez y seguridad. Las plataformas o repositorios en la nube, dan respuesta asertiva a una mejor gestión de la información, dado que al estar siempre en internet y en línea, se podrá acceder desde cualquier parte y desde cualquier dispositivo. Además, estas herramientas cuentan con procesos y mecanismos de seguridad para proteger la información y la confidencialidad.     
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img31.png', alt='') 

        .row.justify-content-center.align-items-center
          .col-5
            h5 Documentar
            p Para una adecuada gestión de información hay que comenzar, siempre, por la documentación. Así, el personal encargado de la recolección de la data tendrá acceso a la información requerida, en el momento pertinente, ya que la documentación permite dar lineamientos de contexto que facilitan la búsqueda de la misma.     
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img32.png', alt='')     

        .row.justify-content-center.align-items-center
          .col-5
            h5 Recolección de datos en tiempo real
            p En la era digital se cuenta con herramientas de fácil acceso a la información en tiempo real y, casi, de forma inmediata. Ello facilita a las organizaciones, tomar decisiones o acciones de forma rápida, esto va de la mano con tecnologías que están en la nube y software especializado, significa que se tendrá el control operacional y capacidad de diseño de alto rendimiento.    
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img33.png', alt='') 

        .row.justify-content-center.align-items-center
          .col-5
            h5 Evitar saturación
            p Una característica clave es poder categorizar y generar una jerarquía de la data; si bien es requerido y casi indispensable tener herramientas de software y herramientas en la nube para su gestión, no sería útil si está en desorden, para ello es importante mantenerlas ordenadas y así  poder tomar decisiones acertadas. La saturación se evita con una buena gestión de la jerarquización y clasificación. 
    
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img34.png', alt='') 

        .row.justify-content-center.align-items-center
          .col-5
            h5 Trabajo en equipo
            p La sincronización de la información depende, en buena medida, del trabajo en equipo y en el aprovechamiento de los artefactos y herramientas usadas para su gestión. Entre los equipos de trabajo debe existir una coordinación que favorezca tomar decisiones que influencian los métodos y modelos operativos de la organización, para la recolección y gestión de los datos.    
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img35.png', alt='') 

        .row.justify-content-center.align-items-center
          .col-5
            h5 Generación de checklist
            p En ocasiones, el personal de diferentes áreas en las organizaciones cuentan con suficiente información sobre el negocio, pero esta data es desaprovechada ya que no hay lineamientos claros para convertirla en información y convertir, a su vez, esta información en líneas de acción. Importa contar con una herramienta que permita tener un checklist con el cual se consideren los elementos necesarios y las acciones para la recolección de información.   
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img36.png', alt='') 

        .row.justify-content-center.align-items-center
          .col-5
            h5 Evaluar la gestión de datos
            p La evaluación y el análisis son siempre técnicas de mejora continua; permiten identificar acciones generadoras de resultados positivos y las que debieran ser intervenidas para optimizar. La evaluación ha de ser periódica: revisando si hay aprovechamiento justo de la información que maneja la entidad. No importa si se cuenta con una gran infraestructura tecnológica ya que, por sí sola, esta no hace nada, la intervención humana siempre será fundamental.     
          .col-5    
            img.img-t.img-a(src='@/assets/ilustraciones/img37.png', alt='')                                                        

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Utilizar tecnología en la nube
          p Para una gestión de datos fiable y eficaz se requiere que esté centralizada, que todos los accesos estén direccionados a la misma fuente de datos; esto ofrece flexibilidad, rapidez y seguridad. Las plataformas o repositorios en la nube, dan respuesta asertiva a una mejor gestión de la información, dado que al estar siempre en internet y en línea, se podrá acceder desde cualquier parte y desde cualquier dispositivo. Además, estas herramientas cuentan con procesos y mecanismos de seguridad para proteger la información y la confidencialidad.     
        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img31.png', alt='') 

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Documentar
          p Para una adecuada gestión de información hay que comenzar, siempre, por la documentación. Así, el personal encargado de la recolección de la data tendrá acceso a la información requerida, en el momento pertinente, ya que la documentación permite dar lineamientos de contexto que facilitan la búsqueda de la misma.     
        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img32.png', alt='')     

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Recolección de datos en tiempo real
          p En la era digital se cuenta con herramientas de fácil acceso a la información en tiempo real y, casi, de forma inmediata. Ello facilita a las organizaciones, tomar decisiones o acciones de forma rápida, esto va de la mano con tecnologías que están en la nube y software especializado, significa que se tendrá el control operacional y capacidad de diseño de alto rendimiento.    
        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img33.png', alt='') 

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Evitar saturación
          p Una característica clave es poder categorizar y generar una jerarquía de la data; si bien es requerido y casi indispensable tener herramientas de software y herramientas en la nube para su gestión, no sería útil si está en desorden, para ello es importante mantenerlas ordenadas y así  poder tomar decisiones acertadas. La saturación se evita con una buena gestión de la jerarquización y clasificación. 

        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img34.png', alt='') 

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Trabajo en equipo
          p La sincronización de la información depende, en buena medida, del trabajo en equipo y en el aprovechamiento de los artefactos y herramientas usadas para su gestión. Entre los equipos de trabajo debe existir una coordinación que favorezca tomar decisiones que influencian los métodos y modelos operativos de la organización, para la recolección y gestión de los datos.    
        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img35.png', alt='') 

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Generación de checklist
          p En ocasiones, el personal de diferentes áreas en las organizaciones cuentan con suficiente información sobre el negocio, pero esta data es desaprovechada ya que no hay lineamientos claros para convertirla en información y convertir, a su vez, esta información en líneas de acción. Importa contar con una herramienta que permita tener un checklist con el cual se consideren los elementos necesarios y las acciones para la recolección de información.   
        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img36.png', alt='') 

      .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.br-color-2
        .col-lg-6
          h5 Evaluar la gestión de datos
          p La evaluación y el análisis son siempre técnicas de mejora continua; permiten identificar acciones generadoras de resultados positivos y las que debieran ser intervenidas para optimizar. La evaluación ha de ser periódica: revisando si hay aprovechamiento justo de la información que maneja la entidad. No importa si se cuenta con una gran infraestructura tecnológica ya que, por sí sola, esta no hace nada, la intervención humana siempre será fundamental.     
        .col-lg-6    
          img.img-t.img-a(src='@/assets/ilustraciones/img37.png', alt='')                                      
              
    separador(data-aos="slide-left")

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Normativas de gestión de la información
    .row.justify-content-center.align-items-center
      .col-lg-4(data-aos="fade-left")
        img.img-t.img-a(src='@/assets/ilustraciones/img38.png', alt='')
      .col-lg-6
        p(data-aos="slide-down") El mercado de la gestión de la información es altamente competitivo, cambiante y dinámico, por lo cual es indispensable para las empresas fortalecer los procesos y las capacidades de los empleados en temas de satisfacción al cliente, seguridad de la información, gestión de riesgos entre otros. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p(data-aos="slide-down") Algunas de las normas vigentes que regulan los procesos de gestión de la información, para las organizaciones, son las siguientes:

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")    
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
              
    separador(data-aos="slide-left")

    #t_2_4.titulo-segundo.color-acento-contenido.pb-5(data-aos="zoom-in-left")
      h2 2.4  Herramientas para la gestión de la información 

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10.mt-5
        .row.justify-content-end.align-items-center
          .col-lg-7.p-t2-color-2.p-5(data-aos="slide-down")
            p(data-aos="slide-down").ps-5.mb-0 En el proceso de gestión de la información, las herramientas tecnológicas tienen un papel fundamental, ya que ellas permiten almacenar, ordenar, gestionar, seguir, evaluar y establecer una base de conocimientos para procesos, que en su ejecución se traduce a prácticas que permiten optimizar tiempo, realizar evaluaciones y mejoras, aumentando la productividad y la utilidad en las organizaciones.

        .row.justify-content-start.align-items-center.mt-1
          .col-lg-5.row-top-2-t1.d-none.d-lg-block.p-0  
            img.img-t.me-0.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img39.svg', alt='')              
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/ilustraciones/img40.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  p.mb-0 Conozca más sobre opciones tecnológicas que favorecen la gestión de la información en las organizaciones. Estudie el Anexo_1_HerramientasTecnológicasParaGestionInformacion.<br>Procure llevar registro de las más destacadas, en su libreta personal de apuntes. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
              
    separador(data-aos="slide-left")

    #t_2_5.titulo-segundo.color-acento-contenido.pb-5(data-aos="zoom-in-left")
      h2 2.5  Copias de seguridad
    .row.justify-content-center.align-items-center        
      .col-lg-10      
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img.br-img-g(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img41.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El proceso de recolección de información, en una organización, suele llegar a ser complejo, más si son entidades que cuentan con muchos trabajadores y sedes, por lo que se requiere en muchas ocasiones de gran capacidad funcional.<br><br>
            p De esta gestión depende el correcto funcionamiento de las áreas, las cuales pueden ser de abastecimiento de producción y manejo de inventarios, entre otros.<br><br>
            p Las siguientes, son técnicas que permiten mejorar la capacidad de gestión de datos e información:              

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12.d-none.d-lg-block  
        ImagenInfografica1.color-secundario.mt-5(data-aos="slide-left")
          template(v-slot:imagen)
            figure
              img(src='@/assets/ilustraciones/img43.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="1.1%" y="85%" numero="")
            .h5.title-color-purp Resguardo de la información
            img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img44.svg', alt='')               

          .tarjeta.color-acento-botones.p-3(x="18.0%" y="4.5%" numero="")
            .h5.title-color-purp Vida útil de la información
            img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img45.svg', alt='')                 

          .tarjeta.color-acento-botones.p-3(x="35.9%" y="85%" numero="")
            .h5.title-color-purp Respaldos imprescindibles
            img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img46.svg', alt='')                

          .tarjeta.color-acento-botones.p-3(x="53.3%" y="4.5%" numero="")
            .h5.title-color-purp Criterios de clasificación
            img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img47.svg', alt='')               

          .tarjeta.color-acento-botones.p-3(x="68.5%" y="86.6%" numero="")
            .h5.title-color-purp Periodo y tipos de copias
            img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img48.svg', alt='')                

          .tarjeta.color-acento-botones.p-3(x="85.6%" y="4.5%" numero="")
            .h5.title-color-purp Inspección de las herramientas
            img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img49.svg', alt='')

    .info-movil.p-3.d-block.d-lg-none
      .row.justify-content-center.align-items-center           
        .col-lg-12.mt-5
          .h5.title-color-purp Resguardo de la información
          img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img44.svg', alt='')
      .row.justify-content-center.align-items-center           
        .col-lg-12.mt-5
          .h5.title-color-purp Vida útil de la información
          img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img45.svg', alt='')
      .row.justify-content-center.align-items-center           
        .col-lg-12.mt-5
          .h5.title-color-purp Respaldos imprescindibles
          img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img46.svg', alt='')
      .row.justify-content-center.align-items-center           
        .col-lg-12.mt-5
          .h5.title-color-purp Criterios de clasificación
          img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img47.svg', alt='')
      .row.justify-content-center.align-items-center           
        .col-lg-12.mt-5
          .h5.title-color-purp Periodo y tipos de copias
          img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img48.svg', alt='')
      .row.justify-content-center.align-items-center           
        .col-lg-12.mt-5
          .h5.title-color-purp Inspección de las herramientas
          img.img-a.img-t.mt-4(src='@/assets/ilustraciones/img49.svg', alt='')

    p.my-5(data-aos="slide-down") El soporte seleccionado para almacenar la copia de respaldo dependerá en gran medida de la información generada y del presupuesto asignado, entre las cuales tenemos las siguientes opciones:
    
    .row.justify-content-center.align-items-center(data-aos="slide-left")           
      .col-lg-10
        .hr
        .row.justify-content-center.align-items-center.mt-3.t2-card.p-3.mx-1           
          .col-lg-2
            img.img-a.img-t(src='@/assets/ilustraciones/img50.svg', alt='')
          .col-lg-10
            h4 Cintas magnéticas DAT/DDS o LTO
            p.mb-0 Permiten almacenar grandes volúmenes de datos a bajo costo por lo cual a pesar de que ya se cuenta con nuevas tecnologías estas son muy usadas. 

    .row.justify-content-center.align-items-center.my-3(data-aos="slide-right")           
      .col-lg-10
        .hr
        .row.justify-content-center.align-items-center.my-3.t2-card.p-3.mx-1           
          .col-lg-2
            img.img-a.img-t(src='@/assets/ilustraciones/img51.svg', alt='')
          .col-lg-10
            h4 La nube
            p.mb-0 Consiste en guardar la información en servidores de terceros, por lo que una de las mayores preocupaciones es la seguridad de la información. 
      
    .row.justify-content-center.align-items-center.my-3(data-aos="slide-left")           
      .col-lg-10
        .hr
        .row.justify-content-center.align-items-center.my-3.t2-card.p-3.mx-1           
          .col-lg-2
            img.img-a.img-t(src='@/assets/ilustraciones/img52.svg', alt='')
          .col-lg-10
            h4 Discos ópticos
            p.mb-0 Los <i>blu-rays</i> como dispositivos de almacenamiento han comenzado a tomar fuerza dentro de las empresas que no necesitan gran capacidad de almacenamiento, ni hacer copias frecuentemente, y una de sus características es que los datos no pueden ser modificados después de haber sido escritos. 

    .row.justify-content-center.align-items-center.my-3(data-aos="slide-right")           
      .col-lg-10
        .hr
        .row.justify-content-center.align-items-center.my-3.t2-card.p-3.mx-1           
          .col-lg-2
            img.img-a.img-t(src='@/assets/ilustraciones/img53.svg', alt='')
          .col-lg-10
            h4 Soluciones mixtas
            p Este tipo de soluciones proponen distintos modelos, entre las cuales se puede destacar:
            .row.justify-content-center.align-items-center.mt-3          
              .col-lg-11           
                .list
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span D2D2T, la cual se genera la copia en disco de almacenamiento y luego se pasará a un sistema de cinta, por lo cual el disco queda libre y se puede reutilizar.

                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span D2D2C, este modelo es similar al anterior pero la segunda copia de liberación se realiza hacia un respaldo en cloud. 

                .list.mt-3
                  .list__item
                      .list__item__icon
                          img(src="@/assets/ilustraciones/v4.svg", alt="")
                  .list__txt 
                      span C2C, es un modelo de nube a nube, por lo cual si el sistema ya está desplegado en un servicio nube se puede traspasar a un respaldo en el mismo proveedor u otro
        .hr                      

</template>

<script>
import ImagenInfografica1 from '../components/ImagenInfografica1.vue'
export default {
  name: 'Tema2',
  components: {
    ImagenInfografica1,
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

<style lang="sass"></style>
