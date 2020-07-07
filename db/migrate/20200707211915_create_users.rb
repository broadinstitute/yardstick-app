# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |table|
      table.string     :username,               default: '', null: false, unique: true
      table.string     :email,                  default: '', null: false, unique: true
      table.string     :encrypted_password,     default: '', null: false, unique: true
      table.string     :reset_password_token,                             unique: true
      table.datetime   :remember_created_at
      table.datetime   :reset_password_sent_at
      table.timestamps null: false
    end

    add_index :users, :email
    add_index :users, :reset_password_token
    add_index :users, :username
  end
end
