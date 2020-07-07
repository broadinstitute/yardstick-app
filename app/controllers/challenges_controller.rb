class ChallengesController < ApplicationController
  def index
    @challenges = Challenge.all
  end

  def show
    @challenge = Challenge.find(params[:id])

    @versions = @challenge.versions
    
    @metrics = @challenge.versions.map { |version| version.metrics }
  end

  private
    def challenge_parameters
      params.fetch(:challenge, {})
    end
end
