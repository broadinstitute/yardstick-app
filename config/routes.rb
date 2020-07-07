# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  resources :profiles, only: %i[create destroy show update]

  resources :tasks, only: %i[index show] do
    resources :challenges, only: %i[index show] do
      resources :submissions, only: %i[create destroy index show update]
    end
  end

  root "tasks#index"
end
