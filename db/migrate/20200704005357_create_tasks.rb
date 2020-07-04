class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |table|
      table.string :name, null: false

      table.timestamps
    end
  end
end
