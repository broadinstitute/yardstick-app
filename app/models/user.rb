class User < ApplicationRecord
  devise :database_authenticatable
  devise :jwt_authenticatable,      jwt_revocation_strategy: RevokedToken
  devise :recoverable
  devise :registerable
  devise :rememberable
  devise :validatable

  has_many :submissions

  validates :email,              presence: true
  validates :encrypted_password, presence: true
  validates :username,           presence: true

  validates_associated :submissions
end
