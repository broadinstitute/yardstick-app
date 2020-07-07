class Submission < ApplicationRecord
  belongs_to :profile
  belongs_to :version

  has_many :scores

  validates :description, presence: true
  validates :name,        presence: true

  validates_associated :scores
end
