class Score < ApplicationRecord
  belongs_to :metric
  belongs_to :submission
end
