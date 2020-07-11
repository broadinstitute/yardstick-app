class Task < ApplicationRecord
  has_many :challenges

  validates :description, presence: true
  validates :name,        presence: true, uniqueness: true

  validates_associated :challenges

  def endpoint
    File.join("/tasks", name.parameterize)
  end
end
