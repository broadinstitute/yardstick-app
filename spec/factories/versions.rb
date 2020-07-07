# frozen_string_literal: true

FactoryBot.define do
  factory :version do
    association :challenge
    association :training_partition,   factory: :partition
    association :validation_partition, factory: :partition
    association :test_partition,       factory: :partition
  end
end
