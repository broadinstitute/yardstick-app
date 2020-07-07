# frozen_string_literal: true

class CreateSubmissions < ActiveRecord::Migration[6.0]
  def change
    create_table :submissions, id: :uuid do |table|
      table.string     :name,        default: "", null: false
      table.text       :description, default: "", null: false
      table.timestamps
    end

    add_reference :submissions, :profile,              foreign_key: true,                       type: :uuid
    add_reference :submissions, :version,              foreign_key: true,                       type: :uuid
  end
end
