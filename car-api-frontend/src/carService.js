

class CarService{
 
  constructor(endpoint){
   this.endpoint = endpoint
  }

  getCars(){
     fetch(`${this.endpoint}/cars`)
     .then(resp => resp.json())
     .then(cars => {
      debugger
    })

  }

}