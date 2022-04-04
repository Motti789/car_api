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
        <h3> Category: ${this.name}</h3>
        </div>
        `
        return this.element
    }

    slapOnDom() {
        Category.categoryContainer.appendChild(this.categoryHTML())
    }

    static renderCategoryForm() {
        Category.categoryForm.innerHTML += `
          <form id="category-form">
          <label for="category">Category:</label>
          <select name="category" id="category">
          <option value="1">SUV</option>
          <option value="2">Van</option>
          <option value="3">Electric</option>
          <option value="4">Minivan</option>
          </select>
          <form>  
          `
      }
}