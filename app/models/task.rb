class Task < ApplicationRecord
  has_many :challenges

  validates :description, presence: true
  validates :name,        presence: true
  validates :slug,        presence: true
end
