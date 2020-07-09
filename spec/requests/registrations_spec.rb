require 'rails_helper'

RSpec.describe "POST /users", type: :request do
  let(:params) do
    {
        user: {
            email:    "allen.goodman@icloud.com",
            location: "Somerville, MA",
            name:     "Allen Goodman",
            password: "password",
            username: "0x00B1",
            website:  "https://www.broadinstitute.org",
        }
    }
  end

  context 'when user.json is unauthenticated' do
    before do
      post "/users", params: params
    end

    it "returns 200" do
      expect(response.status).to eq 200
    end

    it "returns a serialized user record" do
      expect(response).to match_json_schema("user")
    end
  end

  context 'when user exists' do
    before do
      create(:user)

      post "/users", params: params
    end

    it 'returns bad request status' do
      expect(response.status).to eq 400
    end

    it 'returns validation errors' do
      expect(JSON.parse(response.body)['errors'].first['title']).to eq('Bad Request')
    end
  end
end
