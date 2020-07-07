# frozen_string_literal: true

require "rails_helper"

describe Version, "#challenge" do
  it "returns a version’s challenge" do
    version = build(:version)

    expect(version.challenge.name).to eq "Eukaryote structure"
  end
end

describe Version, "#metrics" do
  it "returns a version’s metrics" do
    version = build(:version)

    expect(version.metrics).to eq []
  end
end

describe Version, "#submissions" do
  it "returns a version’s submissions" do
    version = build(:version)

    expect(version.submissions).to eq []
  end
end

describe Version, "#test_partition" do
  it "returns a version’s test partition" do
    version = build(:version)

    expect(version.test_partition.description).to eq ""
  end
end

describe Version, "#training_partition" do
  it "returns a version’s training partition" do
    version = build(:version)

    expect(version.training_partition.description).to eq ""
  end
end

describe Version, "#validation_partition" do
  it "returns a version’s validation partition" do
    version = build(:version)

    expect(version.validation_partition.description).to eq ""
  end
end
