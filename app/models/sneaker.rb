class Sneaker < ApplicationRecord
    validates :name, :brand, :style, :ticker, :colorway, :retail_price, presence: true
    
    has_one_attached :photo

    has_many :listingitems,
        foreign_key: :sneaker_id,
        class_name: :Listingitem
end
