FactoryBot.define do
  factory :metric do
    name { "average precision" }

    association :version
  end
end
