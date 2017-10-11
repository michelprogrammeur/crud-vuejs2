<template>
    <div class="home-main-container">
        <div class="slider-container">
            <swiper :options="swiperOption">
                <swiper-slide><img src="http://lorempixel.com/1920/500/technics/1" alt="technics 1"/></swiper-slide>
                <swiper-slide><img src="http://lorempixel.com/1920/500/technics/2" alt="technics 2"/></swiper-slide>
                <swiper-slide><img src="http://lorempixel.com/1920/500/technics/3" alt="technics 3"/></swiper-slide>
                <swiper-slide><img src="http://lorempixel.com/1920/500/technics/4" alt="technics 4"/></swiper-slide>
                <swiper-slide><img src="http://lorempixel.com/1920/500/technics/5" alt="technics 5"/></swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>

        <div class="home-content">
            <div class="wrapper">
                <h1 class="home-content-title">Bienvenue.</h1>
                <p class="home-content-text">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: { swiper, swiperSlide },
        name: 'slider' + this.id,
        data() {
            return {
                pictures: [],
                swiperOption: {
                    notNextTick: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    pagination: '.swiper-pagination',
                    paginationType: 'progress',
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 3200,
                    autoplayDisableOnInteraction: false,
                    slidesPerView: 1,
                    loop: true
                }
            }
        }
    }
</script>


<style>
    .home-main-container {
        width: 100%;
    }
    .slider-container {
        width: 100%;
    }
    .home-content {
        margin-top: 40px;
        width: 100%;
        background-color: #fff;
        padding: 20px 0;
        box-shadow: 0 3px 6px rgba(0,0,0,0.07);
    }
    .wrapper {
        width: 80%;
        margin: 0 auto;
    }
    .home-content-title {
        font-family: Raleway, Arial, sans-serif;
        font-size: 2.8rem;
        margin: 0;
        padding: 20px;
        color: #2e3436;
    }
    .home-content-text {
        padding: 0 20px;
        font-size: 1.3rem;
        color: #758287;
    }
</style>