class VersionsController < ApplicationController
  before_action :set_challenge

  def index
    @versions = @challenge.versions
  end

  def show
    @version = @challenge.versions.find_by(slug: params[:id])
  end

  private

  def challenge_parameters
    params.fetch(:challenge, {})
  end

  def set_challenge
    task = Task.find_by(slug: params[:task_id])

    @challenge = task.challenges.find_by(slug: params[:challenge_id])
  end
end
