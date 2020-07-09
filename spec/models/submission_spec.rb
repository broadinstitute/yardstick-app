require 'rails_helper'

describe Submission, "#score" do
  it "returns a submission’s scores" do
    submission = build(:submission)

    expect(submission.scores).to eq []
  end
end

describe Submission, "#user.json" do
  it "returns a submission’s user.json" do
    submission = build(:submission)

    expect(submission.user.name).to eq ""
  end
end

describe Submission, "#version" do
  it "returns a submission’s version" do
    submission = build(:submission)

    expect(submission.version.name).to eq ""
  end
end
