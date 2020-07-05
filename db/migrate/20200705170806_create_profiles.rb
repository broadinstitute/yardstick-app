class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |table|
      table.belongs_to :user,                  foreign_key: true, index: true, null: false

      table.string     :location, default: "",                                 null: false
      table.string     :name,     default: "",                                 null: false
      table.string     :website,  default: "",                                 null: false

      table.timestamps
    end
  end
end
