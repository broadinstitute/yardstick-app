# frozen_string_literal: true

FactoryBot.define do
  factory :score do
    association :metric
    association :submission
  end
end
