

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

}