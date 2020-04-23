json.array! @results.each do |sneaker|
    json.extract! sneaker, :id, :name, :brand, :style, :ticker

    if !!current_user
        json.followed_by_current_user !!sneaker.follows.find_by(user_id: current_user.id)
    end

    if sneaker.photo.attached?
        json.photoUrl url_for(sneaker.photo)
    else
        json.photoUrl ""
    end
end