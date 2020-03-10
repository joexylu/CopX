class Sneaker < ApplicationRecord
    validates :name, :brand, :style, :ticker, :colorway, :retail_price, presence: true
    
    has_one_attached :photo
end
