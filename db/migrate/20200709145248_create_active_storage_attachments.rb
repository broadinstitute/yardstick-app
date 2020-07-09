class CreateActiveStorageAttachments < ActiveRecord::Migration[6.0]
  def change
    create_table :active_storage_attachments do |table|
      table.datetime :created_at, null: false
      table.foreign_key :active_storage_blobs, column: :blob_id
      table.index [ :record_type, :record_id, :name, :blob_id ], name: "index_active_storage_attachments_uniqueness", unique: true
      table.string     :name,     null: false
      table.references :blob, null: false
      table.references :record, null: false, index: false, polymorphic: true
    end
  end
end
