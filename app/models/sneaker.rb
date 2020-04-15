class Sneaker < ApplicationRecord
    validates :name, :brand, :style, :ticker, :colorway, :retail_price, presence: true
    
    has_one_attached :photo

    has_many :listingitems,
        foreign_key: :sneaker_id,
        class_name: :Listingitem 

    has_many :follows,
        primary_key: :id,
        foreign_key: :sneaker_id,
        class_name: :Follow

    has_many :purchased,
        primary_key: :id,
        foreign_key: :sneaker_id,
        class_name: :Purchaseditem

    has_many :following_users,
        through: :follows,
        source: :user
end
