class Car {
    // remember objects
    static all = []
    static carContainer = document.getElementById("cars-container")
    static carForm = document.getElementById("form-container")

    constructor({id, brand, model, exterior_color, interior_color, fuel_type, category_id}) {
        this.brand = brand
        this.model = model
        this.exterior_color = exterior_color
        this.interior_color = interior_color
        this.fuel_type = fuel_type
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `car-${this.id}`
     
     
        Car.all.push(this)

  }

  contactHTML() {
      this.element.innerHTML += `
      <div> 
      <h3>${this.brand}</h3>

      <p>${this.model}</p>
      <p>${this.exterior_color}</p>
      <p>${this.interior_color}</p>
      <p>${this.fuel_type}</p>
      <p>${this.category_id}</p>
      </div> `

      return this.element
  }

  slapOnDom() {
   Car.carContainer.appendChild(this.contactHTML())

  }

  static renderForm() {
      Car.carForm.innerHTML += `
        <form id="new-car-form">
        Brand: <input type="text" id="brand">
        Model: <input type="text" id="model">
        Exterior Color: <input type="text" id="exterior_color">
        Interior Color: <input type="text" id="interior_color">
        Fuel Type: <input type="text" id="fuel_type">
        <input type="submit" id="create">
      <form>  `
  }

}


      
      
      

      