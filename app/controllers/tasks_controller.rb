class TasksController < ApplicationController
  def index
    @tasks = Task.all

    render json: @tasks, status: :ok
  end

  def show
    @task = Task.find(params[:id])
  end

  private

  def task_parameters
    params.fetch(:task, {})
  end
end
