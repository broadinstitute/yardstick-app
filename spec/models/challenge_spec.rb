require 'rails_helper'

describe Challenge, "#task" do
  it "returns a challenge’s task" do
    user = build(:challenge)

    expect(user.task.name).to eq ""
  end
end

describe Challenge, "#versions" do
  it "returns a challenge’s versions" do
    user = build(:challenge)

    expect(user.versions).to eq []
  end
end
