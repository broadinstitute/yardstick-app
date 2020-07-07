# frozen_string_literal: true

require "rails_helper"

describe Metric, "#scores" do
  it "returns a metric’s scores" do
    metric = build(:metric)

    expect(metric.scores).to eq []
  end
end

describe Metric, "#version" do
  it "returns a metric’s version" do
    metric = build(:metric)

    expect(metric.version.name).to eq ""
  end
end
