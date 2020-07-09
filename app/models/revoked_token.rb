class RevokedToken < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Blacklist
end
