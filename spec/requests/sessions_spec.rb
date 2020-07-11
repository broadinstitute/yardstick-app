require 'rails_helper'

RSpec.describe "POST /users/sign_in", type: :request do
  context "correct parameters" do
    before do
      user = create(:user)

      user = {
          email:    user.email,
          password: "password"
      }

      post "/users/sign_in", params: { user: user }
    end

    it "returns HTTP *200 OK* success status" do
      expect(response).to have_http_status(200)
    end

    it "returns HTTP *Authorization* request header" do
      expect(response.headers["Authorization"]).to be_present
    end

    it "returns JSON web token" do
      token = response.headers["Authorization"].split(" ").last

      decoded_token = JWT.decode(token, ENV["DEVISE_JWT_SECRET_KEY"], true)

      expect(decoded_token.first["sub"]).to be_present
    end
  end

  context "incorrect parameters" do
    before do
      post "/users/sign_in"
    end

    it "returns HTTP *401 Unauthorized* error status" do
      expect(response.status).to eq 401
    end

    it "returns an error message" do
      expect(response.body).to eq "You need to sign in or sign up before continuing."
    end
  end
end

RSpec.describe "DELETE /users/sign_out", type: :request do
  it "returns HTTP *204 No Content* success status" do
    delete "/users/sign_out"

    expect(response).to have_http_status(204)
  end
end
