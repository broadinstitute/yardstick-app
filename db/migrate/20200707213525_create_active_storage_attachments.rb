# frozen_string_literal: true

class CreateActiveStorageAttachments < ActiveRecord::Migration[6.0]
  def change
    create_table :active_storage_attachments do |table|
      table.string     :name,     null: false
      table.references :record,   null: false, polymorphic: true, index: false
      table.references :blob,     null: false
      table.datetime :created_at, null: false
      table.index %i[record_type record_id name blob_id], name: "index_active_storage_attachments_uniqueness", unique: true
      table.foreign_key :active_storage_blobs, column: :blob_id
    end
  end
end
