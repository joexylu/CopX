# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Sneaker.destroy_all


joe = User.create(username: "Joe Lu", email: "joelu@123.com", password: "123456")




jordan_1s = [
    {
        name: "Jordan 1 Retro High Travis Scott",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-TS",
        colorway: "SAIL/BLACK-DARK MOCHA-UNIVERSIT",
        release_date: "05/11/2019",
        retail_price: "$175",
        description: "Grab a pack of coffee beans to match the Jordan 1 Retro High Travis Scott. This AJ1 comes with a brown upper plus white accents, black Nike Swoosh, sail midsole, and a brown sole. These sneakers released in May 2019 and retailed for $175."
    },

    {
        name: "Jordan 1 Retro High Pine Green Black",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-PNGRN",
        colorway: "BLACK/PINE GREEN-WHITE-GYM RED",
        release_date: "02/11/2020",
        retail_price: "$170",
        description: "Jordan Brand added new colors to a classic silhouette with the Jordan 1 Retro High Pine Green Black, now available on StockX. This colorway draws inspiration from the Jordan 1 Retro High Pine Green from 2019, only this time the entire upper features black and pine green hues. This Jordan 1 High is comprised of a black tumbled leather upper with green leather overlays. A Gym Red embroidered tongue tag, sail midsole, and pine green outsole completes this design. These sneakers released in February of 2020 and retailed for $170."
    },
    {
        name: "Jordan 1 Retro High Shadow (2018)",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-SHDW18",
        colorway: "BLACK/MEDIUM GREY-WHITE",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "Despite the name, the Air Jordan 1 Shadows are a pair that will put any fit of yours firmly in the spotlight. This very rare OG colorway has now hit shelves only three times, making these a must-own for any AJ1 collector. The shoe features a black and grey leather upper with original “Nike Air” branding on the tongue tag and insoles, along with a white midsole and black outsole. Dropping in April of 2018, they were released in mens and gradeschool sizes."
    },
    {
        name: "Jordan 1 Retro High Shattered Backboard 3.0",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-SBB3",
        colorway: "BLACK/PALE VANILLA-STARFISH",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "Jordan Brand adds to its Shattered Backboard lineage with the Jordan 1 Retro High Shattered Backboard 3.0, now available on StockX. This colorway was inspired by the orange and black jersey that Michael wore when he shattered a backboard in an Italian exhibition game in 1986. This newest installment in the SBB series differs from the previous three in material. The design is comprised of a black and orange crinkled patent leather upper to represent the shattered glass. A yellowed vanilla mid and outsold complete the design. These sneakers released in October of 2019 and retailed for $160."
    },
    {
        name: "Jordan 1 Retro High Turbo Green",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-TG",
        colorway: "TURBO GREEN/SAIL-WHITE-LIGHT SM",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "Shift your sneaker collection to another gear and cop the Jordan 1 Retro High Turbo Green. This AJ 1 sports a white upper with green accents, green Nike “Swoosh”, white midsole, and green sole. These sneakers released in February 2019 and retailed for $160. Looking for the right sneakers to burn rubber in?"
    },
    {
        name: "Jordan 1 Retro High Spider-Man Origin Story",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-CC",
        colorway: "GYM RED/BLACK-WHITE-PHOTO BLUE",
        release_date: "05/11/2019",
        retail_price: "$160",
        description: "If Spider-Man was a sneaker head, he probably would be rocking the Jordan 1 Retro High Spider-Man Origin Story. This AJ1 comes with a white upper plus red accents, black Nike “Swoosh”, white midsole, and translucent sole. These sneakers released in December 2018 and retailed for $160."
    },
    {
        name: "Jordan 1 Mid SE Fearless Edison Chen CLOT",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1MS-FLEC",
        colorway: "WHITE/BLACK-RED",
        release_date: "12/07/2019",
        retail_price: "$130",
        description: "This Jordan 1 Mid SE is composed of white woven nylon upper with a fadeaway Swoosh that represents the hidden details revealed under the shoe’s upper by natural wear or customization. A Chinese token-inspired lace embellishment and black detailing completes the design. These sneakers released in December of 2019 and retailed for $130."
    },
    {
        name: "Jordan 1 Retro High Defiant White Black Gym Red",
        brand: "Air Jordan",
        style: "Air Jordan 1",
        ticker: "AJ1H-DWBGR",
        colorway: "BLACK/UNIVERSITY GOLD-WHITE",
        release_date: "05/11/2019",
        retail_price: "$175"
    }
]

jordan_1s.map!{ |sneaker| Sneaker.create!(sneaker) }