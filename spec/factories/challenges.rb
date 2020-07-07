# frozen_string_literal: true

FactoryBot.define do
  factory :challenge do
    name { "Eukaryote structure" }
    slug { "eukaryote-structure" }

    association :task
  end
end
