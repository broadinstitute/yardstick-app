# frozen_string_literal: true

class Version < ApplicationRecord
  belongs_to :challenge
  belongs_to :training_partition,   class_name: "Partition"
  belongs_to :validation_partition, class_name: "Partition"
  belongs_to :test_partition,       class_name: "Partition"

  has_many :metrics,     dependent: :destroy
  has_many :submissions, dependent: :destroy

  validates :description, presence: true
  validates :name,        presence: true, uniqueness: { scope: :challenge_id }

  validates_associated :metrics
  validates_associated :submissions
end
