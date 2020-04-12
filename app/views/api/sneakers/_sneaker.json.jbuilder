json.extract! sneaker, :id, :name, :brand, :style, :ticker, :description, :release_date, :colorway, :retail_price

if !!current_user
    json.followed_by_current_user !!sneaker.follows.find_by(user_id: current_user.id)
end

if sneaker.photo.attached?
    json.photoUrl url_for(sneaker.photo)
else
    json.photoUrl ""
end
