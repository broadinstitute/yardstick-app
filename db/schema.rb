# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_09_171042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "blob_id", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.string "name", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.bigint "byte_size", null: false
    t.datetime "created_at", null: false
    t.string "checksum", null: false
    t.string "content_type"
    t.string "filename", null: false
    t.string "key", null: false
    t.text "metadata"
    t.index ["key"], name: "index_active_storage_blobs_on_key"
  end

  create_table "challenges", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "task_id"
    t.string "name", default: "", null: false
    t.string "slug", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["task_id"], name: "index_challenges_on_task_id"
  end

  create_table "metrics", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "version_id"
    t.string "abbreviation", default: "", null: false
    t.string "href", default: "", null: false
    t.string "name", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["version_id"], name: "index_metrics_on_version_id"
  end

  create_table "partitions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "checksum", default: "", null: false
    t.string "href", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "revoked_tokens", force: :cascade do |t|
    t.string "jti", null: false
    t.index ["jti"], name: "index_revoked_tokens_on_jti"
  end

  create_table "scores", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.decimal "value", null: false
    t.uuid "metric_id"
    t.uuid "submission_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["metric_id"], name: "index_scores_on_metric_id"
    t.index ["submission_id"], name: "index_scores_on_submission_id"
  end

  create_table "submissions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.uuid "version_id"
    t.string "name", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_submissions_on_user_id"
    t.index ["version_id"], name: "index_submissions_on_version_id"
  end

  create_table "tasks", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "slug", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "remember_created_at"
    t.datetime "reset_password_sent_at"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "location", default: "", null: false
    t.string "name", default: "", null: false
    t.string "reset_password_token"
    t.string "username", default: "", null: false
    t.string "website", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token"
    t.index ["username"], name: "index_users_on_username"
  end

  create_table "versions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "challenge_id"
    t.uuid "test_partition_id"
    t.uuid "training_partition_id"
    t.uuid "validation_partition_id"
    t.string "name", default: "", null: false
    t.string "slug", default: "", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["challenge_id"], name: "index_versions_on_challenge_id"
    t.index ["test_partition_id"], name: "index_versions_on_test_partition_id"
    t.index ["training_partition_id"], name: "index_versions_on_training_partition_id"
    t.index ["validation_partition_id"], name: "index_versions_on_validation_partition_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "challenges", "tasks"
  add_foreign_key "metrics", "versions"
  add_foreign_key "scores", "metrics"
  add_foreign_key "scores", "submissions"
  add_foreign_key "submissions", "users"
  add_foreign_key "submissions", "versions"
  add_foreign_key "versions", "challenges"
  add_foreign_key "versions", "partitions", column: "test_partition_id"
  add_foreign_key "versions", "partitions", column: "training_partition_id"
  add_foreign_key "versions", "partitions", column: "validation_partition_id"
end
