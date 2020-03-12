json.extract! @listingitem, :id, :sneaker_id, :size, :price
json.sneakerName @listingitem.sneaker.name
if @listingitem.sneaker.photo.attached?
    json.photoUrl url_for(@listingitem.sneaker.photo)
else
    json.photoUrl ""
end