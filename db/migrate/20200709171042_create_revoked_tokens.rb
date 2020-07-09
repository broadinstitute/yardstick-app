class CreateRevokedTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :revoked_tokens do |table|
      table.string :jti, index: true, null: false
    end
  end
end
