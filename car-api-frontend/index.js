const base_url = "http://localhost:3000"
const carService = new CarService(base_url)

Car.carForm.addEventListener('submit', handleCarSubmit)
carService.getCars()
Car.renderForm()



const categoryService = new CategoryService(base_url)
Category.categoryForm.addEventListener('change', handleCategoryChange)
Category.renderCategoryForm()


function handleCarSubmit(event){
    event.preventDefault()
    carService.createCar()
    event.target.reset()
}

function filteredCars (event) {
  // We remove the car container elements from the dom
  Car.carContainer.innerHTML = ""
  let c = event.target.value 
  let parsed = parseInt(c, 10)
  let selectedCars = Car.all.filter(car => car.category_id === parsed)
  
   //  re-add the elements to the dom 
   for (const car of selectedCars) {
    car.slapOnDom()
  }

}

  function handleCategoryChange(event) {
   filteredCars(event);
  
  // Display all of the cars if the user wants to go back.
  if (event.target.value === '0') {
   let selectedCars = Car.all
   for (const cars of selectedCars) {
    cars.slapOnDom()
  }
  }
}


// Live Coding Challenge
button = document.getElementById("user-comments-submit")

button.addEventListener('click', handleButtonSubmit)

function handleButtonSubmit(event) {
  userInput = document.getElementById("user-comments-input").value
  event.preventDefault()
  Category.categoryContainer.innerHTML +=userInput
}

  
  




  
