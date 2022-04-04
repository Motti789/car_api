
const base_url = "http://localhost:3000"
const carService = new CarService(base_url)

Car.carForm.addEventListener('submit', handleSubmit)
carService.getCars()
Car.renderForm()

const categoryService = new CategoryService(base_url)
 categoryService.getCategories()
 Category.renderCategoryForm()



function handleSubmit(){
    event.preventDefault()
    carService.createCar()
    event.target.reset()
}
