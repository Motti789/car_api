class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :brand
      t.string :model
      t.string :exterior_color
      t.string :interior_color
      t.string :fuel_type
      t.integer :category_id
     

      t.timestamps
    end
  end
end
