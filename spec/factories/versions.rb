FactoryBot.define do
  factory :version do
    association :challenge
    association :training,   factory: :partition
    association :validation, factory: :partition
    association :test,       factory: :partition
  end
end
