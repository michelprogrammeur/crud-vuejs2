<template>
   <div>
      <h3 class="section-title">Tableau de bord</h3>
      <div class="info-container">
         <ul>
            <li>
               <div class="info-card">
                  <div class="info-card-count">
                     {{ countNews }}
                  </div>
                  <span class="info-card-title">Actualités</span>
               </div>
            </li>
            <li>
               <div class="info-card">
                  <div class="info-card-count">
                     {{ countCats }}
                  </div>
                  <span class="info-card-title">Catégories</span>
               </div>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
   import { categories_store } from '../../categoriesStore'
   import { news_store } from '../../newsStore'

   export default {
       data () {
           return {
               newsStore: news_store.state,
               CategoriesStore: categories_store.state
           }
       },
       computed: {
           countNews () {
               return news_store.countNews()
           },
           countCats () {
               return categories_store.state.categories.length
           }
       },
       methods: {
            fetchNews () {
                this.$http.get('api/posts').then((res) => {
                    if (res.status === 200) {
                        news_store.receiveNews(res.data)
                    }
                }, (res) => {
                     console.log(res.errors)
                })
            },
            fetchCats() {
                this.$http.get('api/categories').then((res) => {
                    if (res.status === 200) {
                        categories_store.receiveCategories(res.data)
                    }
                }, (res) => {

                })
            }

       },
       created () {
           this.fetchNews()
           this.fetchCats()
       }
   }
</script>

<style>

   .info-container {
      padding: 0;
      width: 100%;
   }
   .info-container ul{
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }
   .info-container ul li {
      width: 50%;
      list-style-type: none;
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }
   .info-card {
      width: 100%;
      background-color: #3e83eb;
      border-radius: 3px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.07);
      overflow: hidden;
   }
   .info-card-count {
      vertical-align: top;
      display: inline-block;
      width: 80px;
      height: 80px;
      color: #fff;
      line-height: 73px;
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
      background-color: #3774e0;
   }
   .info-card-title{
      vertical-align: top;
      display: inline-block;
      height: 80px;
      color: #fff;
      padding: 0 20px;
      line-height: 80px;
      font-size: 1.8rem;
      text-align: center;
   }
   @media screen and (max-width: 960px) {
      .info-container ul li{
         width: 100%;
         padding: 10px 20px;
      }
   }
</style>