class SubmissionsController < ApplicationController
  before_action :set_submission, only: [:show, :update, :destroy]

  def index
    @submissions = Submission.all
  end

  def show
  end

  def create
    @submission = Submission.new(submission_parameters)

    respond_to do |format|
      if @submission.save
        format.json do
          render :show, status: :created, location: @submission
        end
      else
        format.json do
          render json: @submission.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def update
    respond_to do |format|
      if @submission.update(submission_parameters)
        format.json do
          render :show, status: :ok, location: @submission
        end
      else
        format.json do
          render json: @submission.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    @submission.destroy

    respond_to do |format|
      format.json do
        head :no_content
      end
    end
  end

  private
    def set_submission
      @submission = Submission.find(params[:id])
    end

    def submission_parameters
      params.fetch(:submission, {})
    end
end
