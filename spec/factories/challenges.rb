FactoryBot.define do
  factory :challenge do
    name { "Eukaryote components" }

    association :task
  end
end
