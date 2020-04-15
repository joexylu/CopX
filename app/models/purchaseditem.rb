class Purchaseditem < ApplicationRecord
    validates :sneaker_id, :size, :price, :order_number, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :sneaker,
        primary_key: :id,
        foreign_key: :sneaker_id,
        class_name: :Sneaker

end
