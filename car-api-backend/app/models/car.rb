class Car < ApplicationRecord
    belongs_to :category

    validates :brand, :model, :exterior_color, :interior_color, :fuel_type, presence: true
end

