class ProfilesController < ApplicationController
  before_action :set_profile, only: %i{destroy show update}

  def create
    @profile = Profile.new(profile_parameters)

    respond_to do |format|
      if @profile.save
        format.json do
          render :show, status: :created, location: @profile
        end
      else
        format.json do
          render json: @profile.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    @profile.destroy

    respond_to do |format|
      format.json do
        head :no_content
      end
    end
  end
  
  def update
    respond_to do |format|
      if @profile.update(profile_parameters)
        format.json do
          render :show, status: :ok, location: @profile
        end
      else
        format.json do
          render json: @profile.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def show
  end

  private
    def set_profile
      @profile = Profile.find(params[:id])
    end

    def profile_parameters
      params.fetch(:profile, {})
    end
end
