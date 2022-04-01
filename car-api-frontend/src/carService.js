

class CarService{
 
  constructor(endpoint){
   this.endpoint = endpoint
  }

  getCars(){
     fetch(`${this.endpoint}/cars`)
     .then(resp => resp.json())
     .then(cars => {
      for (const car of cars) {
        const c = new Car(car)
        c.slapOnDom()
      }
    })

  }

  createCar(){
  
  const car = {
    brand: document.getElementById('brand').value,
    model: document.getElementById('model').value,
    exterior_color: document.getElementById('exterior_color').value,
    interior_color: document.getElementById('interior_color').value,
    fuel_type: document.getElementById('fuel_type').value,
    category_id: parseInt(document.querySelector('#categories').value)
    

  }
  
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  } 
  
  fetch(`${this.endpoint}/cars`, configObj)
     .then(resp => resp.json())
     .then(car => { 
       const c = new Car(car)
       c.slapOnDom()
     })

  }

  deleteCar(id){
      fetch(`${this.endpoint}/cars/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(setTimeout(() => {
        window.location.reload()}, .1000))
  }

}