class Metric < ApplicationRecord
  belongs_to :version

  has_many :scores
end
