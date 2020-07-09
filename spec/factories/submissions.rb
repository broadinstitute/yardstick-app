FactoryBot.define do
  factory :submission do
    association :user
    association :version
  end
end
