class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :style, null: false
      t.string :ticker, null: false
      t.string :colorway, null: false
      t.string :retail_price, null: false
      t.text :description
      t.string :release_date
      t.timestamps
    end
    add_index :sneakers, :name, unique: true
    add_index :sneakers, :brand
    add_index :sneakers, :ticker, unique: true
    add_index :sneakers, :style
  end
end
