class Challenge < ApplicationRecord
  belongs_to :task

  has_many :versions
end
