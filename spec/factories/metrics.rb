# frozen_string_literal: true

FactoryBot.define do
  factory :metric do
    name { "average precision" }

    association :version
  end
end
