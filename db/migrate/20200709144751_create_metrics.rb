class CreateMetrics < ActiveRecord::Migration[6.0]
  def change
    create_table :metrics, id: :uuid do |table|
      table.references :version, foreign_key: true, type: :uuid

      table.string     :abbreviation, default: "", null: false
      table.string     :href,         default: "", null: false
      table.string     :name,         default: "", null: false

      table.text       :description,  default: "", null: false

      table.timestamps
    end
  end
end
