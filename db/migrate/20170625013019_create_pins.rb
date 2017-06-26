class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.text :description
      t.text :url
      t.text :image_url, null: false
      t.text :user_id, null: false
      t.integer :board_id, null: false

      t.timestamps null: false
    end

    add_index :pins, :user_id
    add_index :pins, :board_id
  end
end
