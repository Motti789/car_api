class Car {
    // remember objects
    static all = []

    // Get the elements
    static carContainer = document.getElementById("cars-container")
    static carForm = document.getElementById("car-form-container")
    static carImage = document.getElementsByClassName("img-cars")

    constructor({id, brand, model, exterior_color, interior_color, fuel_type, category_id}) {
        this.id = id
        this.brand = brand
        this.model = model
        this.exterior_color = exterior_color
        this.interior_color = interior_color
        this.fuel_type = fuel_type
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `car-${this.id}`
     
        this.element.addEventListener('click', this.handleClick)
        Car.all.push(this)
    }

  carHTML() {
      this.element.innerHTML  = `
      <div> 
      <h3>${this.brand}</h3>

      <p> Model: ${this.model}</p>
      <p> Exterior Color: ${this.exterior_color}</p>
      <p> Interior Color: ${this.interior_color}</p>
      <p> Fuel Type: ${this.fuel_type}</p>
      <p> ID: ${this.category_id}</p>
      </div> 
      <button id='delete-bttn'>Delete</button>
      <br>
      <br>
      `
     return this.element
    }


  slapOnDom() {
   Car.carContainer.appendChild(this.carHTML())
  }

  static renderForm() {
      Car.carForm.innerHTML = `
        <form id="new-car-form">
          <p><u>Add a new car here:</u>
          <br>
          <br>
         <label for="category">Car Category:</label>
         <select name="categories" id="categories">
         <option value="1">SUV</option>
         <option value="2">Electric</option>
         <option value="3">Van</option>
         </select>
         <br>
         
         </p>
         Brand: <input type="text"  id="brand" required> 
         Model: <input type="text" id="model" required>
         Exterior Color: <input type="text" id="exterior_color" required>
         Interior Color: <input type="text" id="interior_color" required>
         Fuel Type: <input type="text" id="fuel_type" required>
         <input type="submit" id="create">
       </form>  
       `
    }

    // Event handler for the delete button.
      handleClick = (event) => {
       if (event.target.innerText === 'Delete') {
           event.target.parentNode.remove()
           carService.deleteCar(this.id)
       }   
   }
}




      
      
      

      