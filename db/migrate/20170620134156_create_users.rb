class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :firstname
      t.string :lastname
      t.string :email
      t.text :about
      t.string :location
      t.string :personal_site_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end

    add_index :users, :username, unique: true
  end
end
