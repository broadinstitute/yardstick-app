class ChallengesController < ApplicationController
  before_action :set_task

  def index
    @challenges = @task.challenges
  end

  def show
    @challenge = @task.challenges.find_by(slug: params[:id])
  end

  private

  def challenge_parameters
    params.fetch(:challenge, {})
  end

  def set_task
    @task = Task.find_by(slug: params[:task_id])
  end
end
