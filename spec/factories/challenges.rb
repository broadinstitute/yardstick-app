FactoryBot.define do
  factory :challenge do
    name { "Eukaryote structure" }
    slug { "eukaryote-structure" }

    association :task
  end
end
