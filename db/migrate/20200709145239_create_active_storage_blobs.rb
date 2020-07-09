class CreateActiveStorageBlobs < ActiveRecord::Migration[6.0]
  def change
    create_table :active_storage_blobs do |table|
      table.string   :key,        null: false
      table.string   :filename,   null: false
      table.string   :content_type
      table.text     :metadata
      table.bigint   :byte_size,  null: false
      table.string   :checksum,   null: false
      table.datetime :created_at, null: false

      table.index [ :key ], unique: true
    end
  end
end
