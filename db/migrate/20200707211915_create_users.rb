# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |table|
      table.string     :username,               default: "", index: true, null: false, unique: true
      table.string     :email,                  default: "", index: true, null: false, unique: true
      table.string     :encrypted_password,     default: "",              null: false, unique: true
      table.string     :reset_password_token,                index: true,              unique: true
      table.datetime   :remember_created_at
      table.datetime   :reset_password_sent_at
      table.timestamps                                                   null: false
    end
  end
end
