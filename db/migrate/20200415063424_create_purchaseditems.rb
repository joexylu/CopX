class CreatePurchaseditems < ActiveRecord::Migration[5.2]
  def change
    create_table :purchaseditems do |t|
      t.integer :user_id, null: false
      t.integer :sneaker_id, null: false
      t.float :size, null: false
      t.integer :price, null: false
      t.string :order_number, null: false
      t.timestamps
    end
    add_index :purchaseditems, :sneaker_id
    add_index :purchaseditems, :user_id
  end
end
