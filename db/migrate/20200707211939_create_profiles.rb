# frozen_string_literal: true

class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles, id: :uuid do |table|
      table.string     :name,     default: "", null: false
      table.string     :location, default: "", null: false
      table.string     :website,  default: "", null: false
      table.timestamps
    end

    add_reference :profiles, :user, foreign_key: true, type: :uuid
  end
end
