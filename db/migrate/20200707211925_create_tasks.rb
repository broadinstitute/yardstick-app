# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks, id: :uuid do |table|
      table.string     :name,        default: "", null: false
      table.string     :slug,        default: "", null: false
      table.text       :description, default: "", null: false
      table.timestamps
    end
  end
end
