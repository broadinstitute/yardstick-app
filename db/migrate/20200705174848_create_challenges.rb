class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |table|
      table.belongs_to :task,                     foreign_key: true, index: true, null: false
      table.string     :name,        default: "",                                 null: false
      table.text       :description, default: "",                                 null: false
      table.timestamps
    end
  end
end
