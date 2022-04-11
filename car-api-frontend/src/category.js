class Category  {

    static all = []
    static categoryContainer = document.getElementById("categories-container")
    static categoryForm = document.getElementById("category-form-container")
    

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
          <u><label for="category">Category:</u></label>
          <select name="category" id="category">
          <option value="" disabled selected>Select your option</option>
          <option value="1" >SUV</option>
          <option value="2">Electric</option>
          <option value="3">Van</option>
          
          </select>
          </form>  
          `
        }
}
 
