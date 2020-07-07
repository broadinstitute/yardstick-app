# frozen_string_literal: true

class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges, id: :uuid do |table|
      table.reference :task, foreign_key: true, type: :uuid
      table.string :name, default: "", null: false
      table.string :slug, default: "", null: false
      table.text :description, default: "", null: false
      table.timestamps
    end
  end
end
