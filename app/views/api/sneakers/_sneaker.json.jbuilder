json.extract! sneaker, :id, :name, :brand, :style, :ticker, :description, :release_date, :colorway, :retail_price
if sneaker.photo.attached?
    json.photoUrl url_for(sneaker.photo)
else
    json.photoUrl ""
end