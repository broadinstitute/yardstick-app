# frozen_string_literal: true

require "rails_helper"

describe Challenge, "#task" do
  it "returns a challenge’s task" do
    challenge = build(:challenge)

    expect(challenge.task.name).to eq ""
  end
end

describe Challenge, "#versions" do
  it "returns a challenge’s versions" do
    challenge = build(:challenge)

    expect(challenge.versions).to eq []
  end
end
