class CategoryService {

  
 
    constructor(endpoint){
     this.endpoint = endpoint
    }
  
    getCategories(){
       fetch(`${this.endpoint}/categories`)
       .then(resp => resp.json())
       .then(categories => {
        for (const category of categories) {
          const c = new Category(category)
          c.slapOnDom()
        }
      })

    }
      
      // createCategory(){
      //    const category = {
      //    name: document.getElementById('name').value
      //   }
      
      // const configObj = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(category)
      // } 
    
      // fetch(`${this.endpoint}/categories`, configObj)
      //    .then(resp => resp.json())
      //    .then(category => {
      //      const c = new Category(category)
      //      c.slapOnDom()
      //    })
    
      //   }

 
     


}