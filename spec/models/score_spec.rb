# frozen_string_literal: true

require "rails_helper"

describe Score, "#metric" do
  it "returns a score’s metric" do
    score = build(:score)

    expect(score.metric.name).to eq "average precision"
  end
end

describe Score, "#submission" do
  it "returns a score’s submission" do
    score = build(:score)

    expect(score.submission.name).to eq ""
  end
end
