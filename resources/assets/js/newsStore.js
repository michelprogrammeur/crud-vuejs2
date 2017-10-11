class NewsStore {

    constructor () {
        this.state = {
            news: []
        }
    }

    // mutations
    receiveNews (value) {
        this.state.news = value
    }

    // getters
    getNews () {
        return this.state.news
    }
    countNews () {
        return this.state.news.length
    }

}

export let news_store = new NewsStore()