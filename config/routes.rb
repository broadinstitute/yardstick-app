Rails.application.routes.draw do
  controllers = {
      registrations: "users/registrations",
      sessions: 'users/sessions',
  }

  devise_for :users, controllers: controllers

  resources :tasks, only: [:index, :show] do
    resources :challenges, only: [:index, :show] do
      resources :submissions, only: [:create, :destroy, :index, :show, :update]
    end
  end

  root "home#index"
end
