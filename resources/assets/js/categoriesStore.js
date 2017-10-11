class CategoriesStore {

    constructor () {
        this.state = {
            categories: [],
            category: {},
            categoryID: Number
        }
    }

    // mutations
    receiveCategories (value) {
        this.state.categories = value
    }
    setCategoryID (value) {
        this.state.categoryID = value
    }
    setCategory (value) {
        this.state.category = value
    }

    // getters
    getCategories () {
        return this.state.categories
    }
    countCategories () {
        return this.state.categories.length
    }
}

export let categories_store = new CategoriesStore()