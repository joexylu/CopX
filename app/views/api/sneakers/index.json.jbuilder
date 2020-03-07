@sneakers.each do |sneaker|
    json.set! sneaker.id do
        json.partial! 'api/sneakers/sneaker', sneaker: sneaker
    end
end