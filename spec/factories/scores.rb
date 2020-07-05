FactoryBot.define do
  factory :score do
    association :metric
    association :submission
  end
end
