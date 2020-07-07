# frozen_string_literal: true

class Challenge < ApplicationRecord
  belongs_to :task

  has_many :versions

  validates :description, presence: true
  validates :name,        presence: true, uniqueness: { scope: :task_id }
  validates :slug,        presence: true, uniqueness: { scope: :task_id }

  validates_associated :versions
end
