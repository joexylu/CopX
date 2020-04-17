json.extract! user, :id, :email, :username

# json.following_sneakers(user.following_sneakers) do |followed_sneakers|
#     json.extract! followed_sneakers, :id, :name, :brand, :style, :ticker, :description, :release_date, :colorway, :retail_price
#     if !!current_user
#         json.followed_by_current_user !!followed_sneakers.follows.find_by(user_id: current_user.id)
#     end
#     if followed_sneakers.photo.attached?
#         json.photoUrl url_for(followed_sneakers.photo)
#     else
#         json.photoUrl ""
#     end
# end

# json.purchased_sneakers(user.purchaseditems) do |purchaseditem|
#     json.extract! purchaseditem, :id, :user_id, :sneaker_id, :size, :price, :order_number
#     json.sneakerName purchaseditem.sneaker.name
#     if purchaseditem.sneaker.photo.attached?
#         json.photoUrl url_for(purchaseditem.sneaker.photo)
#     else
#         json.photoUrl ""
#     end
# end