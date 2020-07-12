class CreateVersions < ActiveRecord::Migration[6.0]
  def change
    create_table :versions, id: :uuid do |table|
      table.references :challenge,            foreign_key: true,                       type: :uuid
      table.references :test_partition,       foreign_key: { to_table: "partitions" }, type: :uuid
      table.references :training_partition,   foreign_key: { to_table: "partitions" }, type: :uuid
      table.references :validation_partition, foreign_key: { to_table: "partitions" }, type: :uuid

      table.string     :name,        default: "", null: false
      table.string     :slug,        default: "", null: false
      table.text       :description, default: "", null: false

      table.timestamps
    end
  end
end
