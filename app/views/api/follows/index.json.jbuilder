json.following_sneakers(@followingitems) do |followingitem|
    json.extract! followingitem, :id, :name, :brand, :style, :ticker, :description, :release_date, :colorway, :retail_price
    if !!current_user
        json.followed_by_current_user !!followingitem.follows.find_by(user_id: current_user.id)
    end
    if followingitem.photo.attached?
        json.photoUrl url_for(followingitem.photo)
    else
        json.photoUrl ""
    end
end