<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="slide-down") Se da la bienvenida a este componente formativo, en el cual se capacitará en evaluación del proceso de pruebas de software. Para comenzar, se debe visualizar con atención, el siguiente recurso:
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")    
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/u0P8mQJRZlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
