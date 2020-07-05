class Submission < ApplicationRecord
  belongs_to :version
  belongs_to :profile

  has_many :scores
end
