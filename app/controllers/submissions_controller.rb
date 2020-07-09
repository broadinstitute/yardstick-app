class SubmissionsController < ApplicationController
  before_action :set_submission, only: [:destroy, :show, :update]

  def create
    @submission = Submission.new(submission_parameters)

    if @submission.save
      render :show, status: :created, location: @submission
    else
      render json: @submission.errors, status: :unprocessable_entity
    end
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
    if @submission.update(submission_parameters)
      render :show, status: :ok, location: @submission
    else
      render json: @submission.errors, status: :unprocessable_entity
    end
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
