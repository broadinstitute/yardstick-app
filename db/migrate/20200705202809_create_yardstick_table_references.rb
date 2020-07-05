class CreateYardstickTableReferences < ActiveRecord::Migration[6.0]
  def change
    add_reference :challenges,  :task,       foreign_key: true,                       type: :uuid

    add_reference :metrics,     :version,    foreign_key: true,                       type: :uuid
    add_reference :metrics,     :training,   foreign_key: { to_table: "partitions" }, type: :uuid
    add_reference :metrics,     :validation, foreign_key: { to_table: "partitions" }, type: :uuid
    add_reference :metrics,     :test,       foreign_key: { to_table: "partitions" }, type: :uuid

    add_reference :profiles,    :user,       foreign_key: true,                       type: :uuid

    add_reference :scores,      :metric,     foreign_key: true,                       type: :uuid
    add_reference :scores,      :submission, foreign_key: true,                       type: :uuid

    add_reference :submissions, :profile,    foreign_key: true,                       type: :uuid
    add_reference :submissions, :version,    foreign_key: true,                       type: :uuid

    add_reference :versions,    :challenge,  foreign_key: true,                       type: :uuid
  end
end
