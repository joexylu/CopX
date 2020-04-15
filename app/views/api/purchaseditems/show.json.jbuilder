json.extract! @purchaseditem, :id, :user_id, :sneaker_id, :size, :price, :order_number, :created_at
json.sneakerName @purchaseditem.sneaker.name
if @purchaseditem.sneaker.photo.attached?
    json.photoUrl url_for(@purchaseditem.sneaker.photo)
else
    json.photoUrl ""
end