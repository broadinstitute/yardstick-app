class CreateSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :submissions, id: :uuid do |table|
      table.string     :name,        default: "", null: false
      table.text       :description, default: "", null: false
      table.timestamps
      table.references :user,    foreign_key: true, type: :uuid
      table.references :version, foreign_key: true, type: :uuid
    end
  end
end
