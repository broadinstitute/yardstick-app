class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |table|
      table.datetime :remember_created_at
      table.datetime :reset_password_sent_at

      table.string   :email,                  default: "", index: true, null: false, unique: true
      table.string   :encrypted_password,     default: "",              null: false, unique: true
      table.string   :location
      table.string   :name,                   default: "",              null: false
      table.string   :reset_password_token,                index: true,              unique: true
      table.string   :username,               default: "",              null: false, unique: true
      table.string   :website

      table.timestamps                                                  null: false
    end
  end
end
