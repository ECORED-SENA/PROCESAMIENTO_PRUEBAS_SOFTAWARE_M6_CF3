<template lang="pug">
.banner-principal
  
  .container.degrade.tarjeta
    
    .row.banner-principal__row(
      :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
    )
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          img(:src="globalData.imagenBannerPrincipal")
          .imagen_flotante_banner: img(src="@/assets/curso/flotante-1-1.svg")
          .imagen_flotante_2: img(src="@/assets/curso/flotante-2.svg")
          .imagen_flotante_1: img(src="@/assets/curso/flotante-1.svg")            
          .imagen_flotante_3: img(src="@/assets/curso/flotante-3.svg")
          .imagen_flotante_4: img(src="@/assets/curso/flotante-4.svg")
          .imagen_flotante_5: img(src="@/assets/curso/flotante-5.svg") 
          .imagen_flotante_6: img(src="@/assets/curso/flotante-6.svg")
          .imagen_flotante_7: img(src="@/assets/curso/flotante-7.svg")
          .imagen_flotante_8: img(src="@/assets/curso/flotante-8.svg")
          .imagen_flotante_10: img(src="@/assets/curso/flotante-10.svg")            
          .imagen_flotante_9: img(src="@/assets/curso/flotante-9.svg")
          
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">

.banner-principal__row
  background-size: cover
  background-position: center

.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important

.contenedor-imagenes
  position: relative

.imagen_flotante
  &_banner
    animation: float1 5s ease-in-out infinite
    position: absolute
    top: -5%
    left: -20%
    width: 80%
  &_1
    animation: float3 15s ease-in-out infinite
    position: absolute
    top: 40%
    left: 16%
    width: 30px
  &_2
    animation: float2 6s ease-in-out infinite
    position: absolute
    top: 32%
    left: 15%
    width: 80px
  &_3
    animation: float3 10s ease-in-out infinite
    position: absolute
    top: 31%
    left: 12%
    width: 30px
  &_4
    animation: float3 9s ease-in-out infinite
    position: absolute
    top: 14%
    left: 19%
    width: 30px
  &_5
    animation: float4 9s ease-in-out infinite
    position: absolute
    top: 16%
    left: 20%
    width: 80px
  &_6
    animation: float3 10s ease-in-out infinite
    position: absolute
    top: 6%
    left: 33%
    width: 30px
  &_7
    animation: float2 5s ease-in-out infinite
    position: absolute
    top: 15%
    left: 28%
    width: 80px
  &_8
    animation: float3 8s ease-in-out infinite
    position: absolute
    top: 6%
    left: 46%
    width: 30px
  &_9
    animation: float3 10s ease-in-out infinite
    position: absolute
    top: 13%
    left: 58%
    width: 30px
  &_10
    animation: float4 7s ease-in-out infinite
    position: absolute
    top: 15%
    left: 50%
    width: 80px

@keyframes float1
	0%
    scale: (1.05)
	50%
		scale: (1.0)
	100%
		scale: (1.05)

@keyframes float2
  0%
    opacity: 0
  50%
    opacity: 1
  100%
    opacity: 0

@keyframes float3
  0%
    transform: translate(1px, 1px) rotate(-1deg)
  10%
    transform: translate(-1px, -2px) rotate(0deg)
  20%
    transform: translate(-3px, 0px) rotate(1deg)
  30%
    transform: translate(3px, 0px) rotate(-1deg)
  40%
    transform: translate(1px, -2px) rotate(0deg)
  50%
    transform: translate(-1px, 1px) rotate(-1deg)
  60%
    transform: translate(1px, -2px) rotate(0deg)
  70%
    transform: translate(-3px, 0px) rotate(-1deg)
  80%
    transform: translate(3px, 0px) rotate(0deg)
  90%
    transform: translate(1px, -2px) rotate(-1deg)
  100%
    transform: translate(1px, 1px) rotate(0deg)

@keyframes float4
  0%
    opacity: 1
  50%
    opacity: 0
  100%
    opacity: 1
</style>
