class User < ApplicationRecord
  devise :database_authenticatable
  devise :recoverable
  devise :registerable
  devise :rememberable
  devise :validatable
end
