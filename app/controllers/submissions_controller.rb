class SubmissionsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy, :update]
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
    @submissions = current_user.submissions
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

  def set_submission
    @submission = current_user.submissions.find(params[:id])
  end

  def submission_parameters
    params.fetch(:submission, {})
  end
end
