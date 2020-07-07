# frozen_string_literal: true

require "rails_helper"

describe Task, "#challenges" do
  it "returns a task’s challenges" do
    task = build(:task)

    expect(task.challenges).to eq []
  end
end
