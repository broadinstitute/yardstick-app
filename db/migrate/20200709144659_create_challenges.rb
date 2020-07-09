class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges, id: :uuid do |table|
      table.string     :name,        default: "", null: false
      table.string     :slug,        default: "", null: false
      table.text       :description, default: "", null: false
      table.references :task, foreign_key: true, type: :uuid
      table.timestamps
    end
  end
end
