json.extract! user, :id, :email, :username
# json.followed_sneakers user.following_sneakers
json.following_sneakers(user.following_sneakers) do |followed_sneakers|
    json.extract! followed_sneakers, :id, :name, :brand, :style, :ticker, :description, :release_date, :colorway, :retail_price
    if !!current_user
        json.followed_by_current_user !!followed_sneakers.follows.find_by(user_id: current_user.id)
    end
    if followed_sneakers.photo.attached?
        json.photoUrl url_for(followed_sneakers.photo)
    else
        json.photoUrl ""
    end
end
