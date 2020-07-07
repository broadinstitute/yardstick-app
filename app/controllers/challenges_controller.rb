# frozen_string_literal: true

class ChallengesController < ApplicationController
  before_action :set_challenge, [:show]

  def index
    @challenges = Challenge.all
  end

  def show
  end

  private

  def challenge_parameters
    params.fetch(:challenge, {})
  end

  def set_challenge
    @challenge = Challenge.find params[:id]
  end
end
