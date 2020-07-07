# frozen_string_literal: true

require "rails_helper"

describe Submission, "#profile" do
  it "returns a submission’s profile" do
    submission = build(:submission)

    expect(submission.profile.name).to eq ""
  end
end

describe Submission, "#score" do
  it "returns a submission’s scores" do
    submission = build(:submission)

    expect(submission.scores).to eq []
  end
end

describe Submission, "#version" do
  it "returns a submission’s version" do
    submission = build(:submission)

    expect(submission.version.name).to eq ""
  end
end
