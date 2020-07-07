# frozen_string_literal: true

require "rails_helper"

describe Profile, "#submissions" do
  it "returns a profile’s submissions" do
    profile = build(:profile)

    expect(profile.submissions).to eq []
  end
end

describe Profile, "#user" do
  it "returns a profile’s user" do
    profile = build(:profile)

    expect(profile.user).to eq nil
  end
end
