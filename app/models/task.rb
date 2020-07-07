# frozen_string_literal: true

class Task < ApplicationRecord
  has_many :challenges, dependent: :destroy

  validates :description, presence: true
  validates :name,        presence: true, uniqueness: true
  validates :slug,        presence: true, uniqueness: true

  validates_associated :challenges
end
