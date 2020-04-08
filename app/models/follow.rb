class Follow < ApplicationRecord

    validates :user_id, :sneaker_id, presence:true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :sneaker,
        primary_key: :id,
        foreign_key: :sneaker_id,
        class_name: :Sneaker
        
end
