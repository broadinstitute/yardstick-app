require 'rails_helper'

RSpec.describe "/challenges", type: :request do
  # Challenge. As you add validations to Challenge, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      Challenge.create! valid_attributes
      get challenges_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      challenge = Challenge.create! valid_attributes
      get challenge_url(challenge)
      expect(response).to be_successful
    end
  end
end
