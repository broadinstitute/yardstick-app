# frozen_string_literal: true

class Profile < ApplicationRecord
  belongs_to :user

  has_many :submissions, dependent: :destroy

  validates :location, presence: true
  validates :name,     presence: true
  validates :website,  presence: true

  validates_associated :submissions
end
