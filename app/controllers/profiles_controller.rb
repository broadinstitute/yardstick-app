class ProfilesController < ApplicationController
  before_action :set_profile, only: [:destroy, :show, :update]

  def create
    @profile = Profile.new(profile_parameters)

    if @profile.save
      render :show, status: :created, location: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @profile.destroy

    head :no_content
  end
  
  def update
    if @profile.update(profile_parameters)
      render :show, status: :ok, location: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
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
