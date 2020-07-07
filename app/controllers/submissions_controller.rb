# frozen_string_literal: true

class SubmissionsController < ApplicationController
  before_action :set_submission, only: %i[destroy show update]

  def create
    @submission = Submission.new(submission_parameters)

    respond_to do |format|
      format.json do
        render json: @submission.errors, status: :unprocessable_entity
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

  def index
    @submissions = Submission.all
  end

  def show; end

  def update
    respond_to do |format|
      format.json do
        render json: @submission.errors, status: :unprocessable_entity
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
