class Listingitem < ApplicationRecord
    validates :sneaker_id, :size, :price, presence: true

    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker
    
end
