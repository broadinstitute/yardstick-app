class CreatePartitions < ActiveRecord::Migration[6.0]
  def change
    create_table :partitions, id: :uuid do |table|
      table.string     :checksum,    default: "", null: false
      table.string     :href,        default: "", null: false
      table.text       :description, default: "", null: false
      table.timestamps
    end
  end
end
