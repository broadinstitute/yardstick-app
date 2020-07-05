require 'rails_helper'

describe Submission, "#profile" do
  it "returns a submission’s profile" do
    submission = build(:submission)

    expect(submission.profile).to eq []
  end
end

describe Submission, "#score" do
  it "returns a submission’s scores" do
    submission = build(:submission)

    expect(submission.scores).to eq ""
  end
end

describe Submission, "#version" do
  it "returns a submission’s version" do
    submission = build(:submission)

    expect(submission.version).to eq ""
  end
end
