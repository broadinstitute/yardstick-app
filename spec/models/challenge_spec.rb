require 'rails_helper'

describe Challenge, "#task" do
  it "returns the challenge’s task" do
    user = build(:challenge)

    expect(user.task.name).to eq ""
  end
end
