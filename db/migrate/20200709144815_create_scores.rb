class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores, id: :uuid do |table|
      table.decimal     :value, null: false

      table.references :metric,     foreign_key: true, type: :uuid
      table.references :submission, foreign_key: true, type: :uuid

      table.timestamps
    end
  end
end
