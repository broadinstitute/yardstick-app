class Challenge < ApplicationRecord
  belongs_to :task

  has_many :versions

  validates :description, presence: true
  validates :name,        presence: true
  validates :slug,        presence: true

  validates_associated :versions
end
