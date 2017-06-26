class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :boards, :user_id
  end
end
