# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable
  devise :recoverable
  devise :registerable
  devise :rememberable
  devise :validatable

  has_one :profile, dependent: :destroy

  validates :email,              presence: true
  validates :encrypted_password, presence: true
  validates :username,           presence: true

  validates_associated :profile
end
