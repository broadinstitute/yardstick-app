class Submission < ApplicationRecord
  belongs_to :profile
  belongs_to :version

  has_many :scores
end
