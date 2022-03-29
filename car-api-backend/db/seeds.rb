# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

suv = Category.create(name: "SUV")
electric = Category.create(name: "Electric")
van = Category.create(name: "Van")

car1 = Car.create(brand: "Nissan", model: "SV", exterior_color: "Silver", interior_color: "Black", fuel_type: "gas", category_id: 1)
car2 = Car.create(brand: "Tesla", model: "S", exterior_color: "Red", interior_color: "White", fuel_type: "Non", category_id: 2)
car3 = Car.create(brand: "Honda", model: "Odyssey", exterior_color: "Green", interior_color: "Black", fuel_type: "gas", category_id: 3)

