# frozen_string_literal: true

class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores, id: :uuid do |table|
      table.decimal :value, null: false
      table.timestamps
    end

    add_reference :scores, :metric, foreign_key: true, type: :uuid
    add_reference :scores, :submission, foreign_key: true, type: :uuid
  end
end
