# frozen_string_literal: true

class Submission < ApplicationRecord
  belongs_to :profile
  belongs_to :version

  has_many :scores, dependent: :destroy

  validates :description, presence: true
  validates :name,        presence: true

  validates_associated :scores
end
