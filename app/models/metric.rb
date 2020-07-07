# frozen_string_literal: true

class Metric < ApplicationRecord
  belongs_to :version

  has_many :scores, dependent: :destroy

  validates :abbreviation, presence: true
  validates :description,  presence: true
  validates :href,         presence: true
  validates :name,         presence: true, uniqueness: { scope: :version_id }

  validates_associated :scores
end
