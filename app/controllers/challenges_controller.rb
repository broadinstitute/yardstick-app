class ChallengesController < ApplicationController
  def index
    @challenges = Challenge.all
  end

  def show
    @challenge = Challenge.find params[:id]

    @versions = @challenge.versions.select :id, :name

    @metrics = @challenge.versions.map do |version|
      version.metrics.select :id, :name, :abbreviation
    end
  end

  private

  def challenge_parameters
    params.fetch(:challenge, {})
  end
end
