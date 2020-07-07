# frozen_string_literal: true

class CreateMetrics < ActiveRecord::Migration[6.0]
  def change
    create_table :metrics, id: :uuid do |table|
      table.string     :name,         default: "", null: false
      table.string     :abbreviation, default: "", null: false
      table.text       :description,  default: "", null: false
      table.string     :href,         default: "", null: false
      table.timestamps
    end

    add_reference :metrics, :version, foreign_key: true, type: :uuid
  end
end
