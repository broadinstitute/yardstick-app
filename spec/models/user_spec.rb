# frozen_string_literal: true

require "rails_helper"

describe User, "#profile" do
  it "returns a user’s profile" do
    user = build(:user)

    expect(user.profile.name).to eq ""
  end
end
