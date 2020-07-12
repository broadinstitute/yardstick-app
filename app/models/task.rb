class Task < ApplicationRecord
  has_many :challenges

  validates :description, presence: true
  validates :name,        presence: true, uniqueness: true
  validates :slug,        presence: true, uniqueness: true

  validates_associated :challenges

  def endpoint
    File.join("/", ["tasks", slug])
  end
end
