class Task < ApplicationRecord
  has_many :challenges
  has_many :metrics
end
