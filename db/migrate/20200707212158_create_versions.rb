# frozen_string_literal: true

class CreateVersions < ActiveRecord::Migration[6.0]
  def change
    create_table :versions, id: :uuid do |table|
      table.string     :name,        default: "", null: false
      table.text       :description, default: "", null: false
      table.timestamps
    end

    add_reference :versions,    :challenge,            foreign_key: true,                       type: :uuid
    add_reference :versions,    :training_partition,   foreign_key: { to_table: "partitions" }, type: :uuid
    add_reference :versions,    :validation_partition, foreign_key: { to_table: "partitions" }, type: :uuid
    add_reference :versions,    :test_partition,       foreign_key: { to_table: "partitions" }, type: :uuid
  end
end
