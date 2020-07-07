class CreateYardstickTables < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: :uuid do |table|
      table.string     :username,               default: "", null: false, unique: true
      table.string     :email,                  default: "", null: false, unique: true
      table.string     :encrypted_password,     default: "", null: false, unique: true
      table.string     :reset_password_token,                             unique: true
      table.datetime   :remember_created_at
      table.datetime   :reset_password_sent_at
      table.timestamps                                       null: false
    end

    create_table :profiles, id: :uuid do |table|
      table.string     :name,                   default: "", null: false
      table.string     :location,               default: "", null: false
      table.string     :website,                default: "", null: false
      table.timestamps
    end

    create_table :tasks, id: :uuid do |table|
      table.string     :name,                   default: "", null: false
      table.string     :slug,                   default: "", null: false
      table.text       :description,            default: "", null: false
      table.timestamps
    end

    create_table :challenges, id: :uuid do |table|
      table.string     :name,                   default: "", null: false
      table.string     :slug,                   default: "", null: false
      table.text       :description,            default: "", null: false
      table.timestamps
    end

    create_table :versions, id: :uuid do |table|
      table.string     :name,                   default: "", null: false
      table.text       :description,            default: "", null: false
      table.timestamps
    end

    create_table :partitions, id: :uuid do |table|
      table.text       :description,            default: "", null: false
      table.string     :endpoint,               default: "", null: false
      table.timestamps
    end

    create_table :metrics, id: :uuid do |table|
      table.string     :name,                   default: "", null: false
      table.string     :abbreviation,           default: "", null: false
      table.text       :description,            default: "", null: false
      table.string     :endpoint,               default: "", null: false
      table.timestamps
    end

    create_table :submissions, id: :uuid do |table|
      table.string     :name,                   default: "", null: false
      table.text       :description,            default: "", null: false
      table.timestamps
    end

    create_table :scores, id: :uuid do |table|
      table.decimal     :value,                              null: false
      table.timestamps
    end
  end
end
