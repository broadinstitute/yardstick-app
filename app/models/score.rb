class Score < ApplicationRecord
  belongs_to :metric
  belongs_to :submission

  validates :value, presence: true
end
