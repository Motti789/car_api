class Category {

    static all = []
    static categoryContainer = document.getElementById("categories-container")
    static categoryForm = document.getElementById("form-container") 

    constructor({id, name}) {
        this.id = id
        this.name = name

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`
        Category.all.push(this)
    }

    categoryHTML() {
        this.element.innerHTML += `
        <div>
        <h3> Catgory: ${this.name}</h3>
        </div>
        `
        return this.element
    }

    slapOnDom() {
        Category.categoryContainer.appendChild(this.categoryHTML())
    }
    
    static renderForm() {
        Category.categoryForm.innerHTML += `
          <form id="new-category-form">
          Name: <input type="text" id="name">
          <input type="submit" id="create">
        <form>  
        `
    }
}