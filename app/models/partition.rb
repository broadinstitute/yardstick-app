class Partition < ApplicationRecord
  has_one :version

  validates :checksum,    presence: true
  validates :description, presence: true
  validates :href,        presence: true

  def endpoint
    File.join(version.endpoint, href)
  end
end
