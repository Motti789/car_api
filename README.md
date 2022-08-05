## car_api
Flatiron School Javascript Project - car_api is built with a Javascript frontend and a Rails API backend. car_api is a app which can be used to:

 - Show customers an inventory of all available cars.
 - Filter out cars based off the category.
 - Add a new car to the list of available cars

 ## Demo
 [Car API](https://www.youtube.com/watch?v=m8pMAlpeWGc)

## Getting Started

Fork and clone this repository to your local machine.

In your terminal, **make sure that you are in the backend directory** and install all the dependencies by executing the below command: $bundle install

Next, run the following commands in the terminal to set up the local database:


rails db:create
<br>
rails db:migrate
<br>
rails db:seed


Then execute "rails s" to start up the local server on localhost:3000.

Next, **make sure to navigate to the frontend directory**. You can type npm install to install all package dependencies.  

Once all the dependencies are installed, open the index.html file either from the terminal with open index.html or from your Finder or Explorer.

License:
---
The system is available as open source under the terms of the [MIT License](LICENSE.MD).