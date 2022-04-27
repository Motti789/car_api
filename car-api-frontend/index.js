
const base_url = "http://localhost:3000"
const carService = new CarService(base_url)

Car.carForm.addEventListener('submit', handleCarSubmit)
carService.getCars()
Car.renderForm()



const categoryService = new CategoryService(base_url)
// categoryService.getCategories()
Category.categoryForm.addEventListener('change', handleCategorySubmit)
Category.renderCategoryForm()



function handleCarSubmit(event){
    event.preventDefault()
    carService.createCar()
    event.target.reset()
}

 function handleCategorySubmit(event) {
      // We remove the car container elements from the dom
      
    Car.carContainer.innerHTML = ""

    let c = event.target.value 
    let parsed = parseInt(c, 10)
    let selectedCars = Car.all.filter(car => car.category_id === parsed)
    
      //  re-add the elements to the dom 
     for (const car of selectedCars) {
        debugger;
      car.slapOnDom()
      }
  }


