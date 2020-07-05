FactoryBot.define do
  factory :submission do
    association :profile
    association :version
  end
end
