class Version < ApplicationRecord
  belongs_to :challenge
  belongs_to :training,   class_name: "Partition"
  belongs_to :validation, class_name: "Partition"
  belongs_to :test,       class_name: "Partition"

  has_many :metrics
  has_many :submissions
end
