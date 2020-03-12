class CreateListingitems < ActiveRecord::Migration[5.2]
  def change
    create_table :listingitems do |t|
      t.integer :sneaker_id, null: false
      t.float :size, null: false
      t.integer :price, null: false
      t.timestamps
    end
    add_index :listingitems, :sneaker_id
  end
end
