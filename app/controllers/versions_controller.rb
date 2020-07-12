class VersionsController < ApplicationController
  before_action :set_challenge

  def index
    @challenges = @challenge.versions
  end

  def show
    @challenge = @challenge.versions.find_by(slug: params[:id])
  end

  private

  def challenge_parameters
    params.fetch(:challenge, {})
  end

  def set_challenge
    @challenge = Task.find_by(slug: params[:task_id]).challenges.find_by(slug: params[:challenge_id])
  end
end
