# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Sneaker.destroy_all
Listingitem.destroy_all

joe = User.create(username: "Joe Lu", email: "joelu@123.com", password: "123456")

size_chart = [ 4.0, 5.0, 6.0, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 13.0, 14.0 ]

size_chart_yeezy = [ 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 13.0, 14.0, 15.0, 16.0 ]

jordan_1s = [
    {
        name: "Air Jordan 1 Retro High Travis Scott",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-TS",
        colorway: "SAIL/BLACK-DARK MOCHA-UNIVERSIT",
        release_date: "05/11/2019",
        retail_price: "$175",
        description: "Grab a pack of coffee beans to match the Jordan 1 Retro High Travis Scott. This AJ1 comes with a brown upper plus white accents, black Nike Swoosh, sail midsole, and a brown sole. These sneakers released in May 2019 and retailed for $175."
    },

    {
        name: "Air Jordan 1 Retro High Pine Green Black",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-PNGRN",
        colorway: "BLACK/PINE GREEN-WHITE-GYM RED",
        release_date: "05/11/2019",
        retail_price: "$170",
        description: "Jordan Brand added new colors to a classic silhouette with the Jordan 1 Retro High Pine Green Black, now available on StockX. This colorway draws inspiration from the Jordan 1 Retro High Pine Green from 2019, only this time the entire upper features black and pine green hues. This Jordan 1 High is comprised of a black tumbled leather upper with green leather overlays. A Gym Red embroidered tongue tag, sail midsole, and pine green outsole completes this design. These sneakers released in February of 2020 and retailed for $170."
    },
    {
        name: "Air Jordan 1 Retro High Shadow (2018)",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-SHDW18",
        colorway: "BLACK/MEDIUM GREY-WHITE",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "Despite the name, the Air Jordan 1 Shadows are a pair that will put any fit of yours firmly in the spotlight. This very rare OG colorway has now hit shelves only three times, making these a must-own for any AJ1 collector. The shoe features a black and grey leather upper with original “Nike Air” branding on the tongue tag and insoles, along with a white midsole and black outsole. Dropping in April of 2018, they were released in mens and gradeschool sizes."
    },
    {
        name: "Air Jordan 1 Retro High Shattered Backboard 3.0",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-SBB3",
        colorway: "BLACK/PALE VANILLA-STARFISH",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "Jordan Brand adds to its Shattered Backboard lineage with the Jordan 1 Retro High Shattered Backboard 3.0, now available on StockX. This colorway was inspired by the orange and black jersey that Michael wore when he shattered a backboard in an Italian exhibition game in 1986. This newest installment in the SBB series differs from the previous three in material. The design is comprised of a black and orange crinkled patent leather upper to represent the shattered glass. A yellowed vanilla mid and outsold complete the design. These sneakers released in October of 2019 and retailed for $160."
    },
    {
        name: "Air Jordan 1 Retro High Turbo Green",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-TG",
        colorway: "TURBO GREEN/SAIL-WHITE-LIGHT SM",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "Shift your sneaker collection to another gear and cop the Jordan 1 Retro High Turbo Green. This AJ 1 sports a white upper with green accents, green Nike “Swoosh”, white midsole, and green sole. These sneakers released in February 2019 and retailed for $160. Looking for the right sneakers to burn rubber in?"
    },
    {
        name: "Air Jordan 1 Retro High Spider-Man Origin Story",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-CC",
        colorway: "GYM RED/BLACK-WHITE-PHOTO BLUE",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "If Spider-Man was a sneaker head, he probably would be rocking the Jordan 1 Retro High Spider-Man Origin Story. This AJ1 comes with a white upper plus red accents, black Nike “Swoosh”, white midsole, and translucent sole. These sneakers released in December 2018 and retailed for $160."
    },
    {
        name: "Air Jordan 1 Mid SE Fearless Edison Chen CLOT",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1MS-FLEC",
        colorway: "WHITE/BLACK-RED",
        release_date: "05/11/2019",
        retail_price: "$130",
        description: "This Jordan 1 Mid SE is composed of white woven nylon upper with a fadeaway Swoosh that represents the hidden details revealed under the shoe’s upper by natural wear or customization. A Chinese token-inspired lace embellishment and black detailing completes the design. These sneakers released in December of 2019 and retailed for $130."
    },
    {
        name: "Air Jordan 1 Retro High Defiant White Black Gym Red",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-DWBGR",
        colorway: "BLACK/UNIVERSITY GOLD-WHITE",
        release_date: "05/11/2019",
        retail_price: "$175"
    }
]

jordan_1s.map!{ |sneaker| Sneaker.create!(sneaker) }




yeezy_350 = [
    {
        name: "adidas Yeezy Boost 350 V2 Earth",
        brand: "adidas Yeezy",
        style: "adidas Yeezy Boost 350",
        ticker: "YB350V2-RTH",
        colorway: "EARTH/EARTH/EARTH",
        release_date: "05/11/2019",
        retail_price: "$220",
        description: "This 350 V2 strays from newer releases by bringing back a heel tab that is present in early 350 silhouettes. This model was released as a regional exclusive specific to the Americas. This Yeezy 350 V2 Earth is composed of a mud Primeknit upper with a translucent outer side stripe. A mud colored Boost cushioned sole and mud interior completes the design."
    },
    {
        name: "adidas Yeezy Boost 350 V2 Tail Light",
        brand: "adidas Yeezy",
        style: "adidas Yeezy Boost 350",
        ticker: "YZB350V2-TG",
        colorway: "TAIL LIGHT/TAIL LIGHT/TAIL LIGHT",
        release_date: "05/11/2019",
        retail_price: "$220",
        description: "This 350 V2 strays from newer releases by bringing back the heel tab that was present in early 350 silhouettes. This model was released as a regional exclusive specific to Europe and Russia."
    },
    {
        name: "adidas Yeezy Boost 350 V2 Zebra",
        brand: "adidas Yeezy",
        style: "adidas Yeezy Boost 350",
        ticker: "YZY350V2-ZEBRA",
        colorway: "WHITE/CORE BLACK/RED",
        release_date: "05/11/2019",
        retail_price: "$220",
        description: "Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of NBA All-Star Weekend, these Yeezy's are nicknamed the Zebras, and come in a classic white, black and red color scheme. Sporting a white-based Primeknit upper with black accents giving off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become one of the most popular colorways."
    },
    {
        name: "adidas Yeezy Boost 350 V2 Semi Frozen Yellow",
        brand: "adidas Yeezy",
        style: "adidas Yeezy Boost 350",
        ticker: "AD-YB350VSFY",
        colorway: "SEMI FROZEN YELLOW/RAW STEEL",
        release_date: "05/11/2019",
        retail_price: "$220",
        description: "This colorway steps outside of the comfort zone of previous 350 Yeezy sneaker releases, which have remained subtle and mostly neutral primary colors and bright accents. The official colorway of the 'Frozen Yellow Yeezys' is actually Semi Frozen Yellow, Raw Steel and Red and features both of adidas pinnacle technologies, Boost cushioning and Primeknit sock-like upper. The hype for the yellow colored Yeezys was pushed to the roof before launch as Kanye West appeared with Kid Cudi and Takashi Murakami as 'Ye and Cudi toured the iconic artist's studio on a trip to Tokyo. "
    },
    {
        name: "adidas Yeezy Boost 350 V2 Static (Non-Reflective)",
        brand: "adidas Yeezy",
        style: "adidas Yeezy Boost 350",
        ticker: "YZY350V2-STATIC",
        colorway: "STATIC/STATIC/STATIC",
        release_date: "05/11/2019",
        retail_price: "$220",
        description: "Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. This Yeezy 350 V2 comes with a grey and white upper and a white sole. These sneakers released in December 2018 and retailed for $220. "
    }
]

yeezy_350.map!{ |sneaker| Sneaker.create!(sneaker) }




Sneaker.all.each do |sneaker|
    case sneaker[:ticker]
    when "YB350V2-RTH"
        size_chart_yeezy.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(250..300) })
        end
    when "YZB350V2-TG"
        size_chart_yeezy.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(300..400) })
        end

    when "YZY350V2-ZEBRA"
        size_chart_yeezy.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(400..600) })
        end

    when "AD-YB350VSFY"
        size_chart_yeezy.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(300..1000) })
        end

    when "YZY350V2-STATIC"
        size_chart_yeezy.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(300..400) })
        end

    when "AJ1H-TS"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(1100..1800) })
        end
    
    when "AJ1H-PNGRN"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(180..300) })
        end

    when "AJ1H-SHDW18"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(250..500) })
        end

    when "AJ1H-SBB3"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(210..350) })
        end

    when "AJ1H-TG"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(300..600) })
        end

    when "AJ1H-CC"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(400..700) })
        end

    when "AJ1MS-FLEC"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(399..650) })
        end

    when "AJ1H-DWBGR"
        size_chart.each do |size|
            Listingitem.create({ sneaker_id: sneaker[:id], size: size, price: rand(100..200) })
        end
    end
end

# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://active-storage-copx-dev.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')

Sneaker.all.each do |sneaker|
    ticker = sneaker[:ticker]
    photo = open("https://copx-seeds.s3-us-west-1.amazonaws.com/#{ticker}.jpg")
    sneaker.photo.attach(
      io: photo, 
      filename: "#{ticker}.jpg"
    )
end
