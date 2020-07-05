class CreateYardstickTableIndicies < ActiveRecord::Migration[6.0]
  def change
    add_index :users, :email
    add_index :users, :reset_password_token
    add_index :users, :username
  end
end
