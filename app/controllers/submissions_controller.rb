class SubmissionsController < ApplicationController
  before_action :set_submission, only: [:destroy, :show, :update]

  def create
    @submission = Submission.new(submission_parameters)

    render json: @submission.errors, status: :unprocessable_entity
  end

  def destroy
    @submission.destroy

    head :no_content
  end

  def index
    @submissions = @challenge.submissions
  end

  def show
  end

  def update
    render json: @submission.errors, status: :unprocessable_entity
  end

  private

  def set_challenge
    @challenge = Challenge.find(params[:challenge_id])
  end

  def set_submission
    @submission = Submission.find(params[:id])
  end

  def submission_parameters
    params.fetch(:submission, {})
  end
end
