# frozen_string_literal: true

class CreateActiveStorageBlobs < ActiveRecord::Migration[6.0]
  def change
    create_table :active_storage_blobs do |table|
      table.bigint   :byte_size,                 null: false
      table.datetime :created_at,                null: false
      table.string   :checksum,                  null: false
      table.string   :content_type
      table.string   :filename,                  null: false
      table.string   :key,          index: true, null: false, unique: true
      table.text     :metadata
    end
  end
end
