require 'rails_helper'

describe User, "#profile" do
  it "returns a user’s profile" do
    user = build(:user)

    expect(user.profile).to eq []
  end
end
