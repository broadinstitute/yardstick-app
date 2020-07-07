class Profile < ApplicationRecord
  belongs_to :user

  has_many :submissions

  validates :location, presence: true
  validates :name,     presence: true
  validates :website,  presence: true
end
