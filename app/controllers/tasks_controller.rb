class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find_by(id: params[:id])
  end

  private

  def task_parameters
    params.fetch(:task, {})
  end
end
