FactoryBot.define do
  factory :metric do
    name { "" }
    description { "" }
    endpoint { "" }

    association :version
  end
end
