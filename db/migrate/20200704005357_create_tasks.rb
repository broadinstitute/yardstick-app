class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |table|
      table.string :name

      table.timestamps
    end
  end
end
