class Sneaker < ApplicationRecord
    validates :name, :brand, :style, :ticker, :release_date, :colorway, :retail_price, presence: true
    
    has_one_attached :photo
end
