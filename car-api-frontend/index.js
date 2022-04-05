
const base_url = "http://localhost:3000"
const carService = new CarService(base_url)

Car.carForm.addEventListener('submit', handleCarSubmit)
 carService.getCars()
Car.renderForm()


const categoryService = new CategoryService(base_url)
// categoryService.getCategories()
Category.categoryForm.addEventListener('submit', handleCategorySubmit)
Category.renderCategoryForm()



function handleCarSubmit(){
    event.preventDefault()
    carService.createCar()
    event.target.reset()
}

function handleCategorySubmit() {
    
}


