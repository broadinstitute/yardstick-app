class Version < ApplicationRecord
  belongs_to :challenge
  belongs_to :training_partition,   class_name: "Partition"
  belongs_to :validation_partition, class_name: "Partition"
  belongs_to :test_partition,       class_name: "Partition"

  has_many :metrics
  has_many :submissions

  validates :description, presence: true
  validates :name,        presence: true
end
