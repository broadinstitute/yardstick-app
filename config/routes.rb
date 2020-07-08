Rails.application.routes.draw do
  devise_for :users

  resources :profiles, only: [:create, :destroy, :show, :update]

  resources :tasks, only: [:index, :show] do
    resources :challenges, only: [:index, :show] do
      resources :submissions, only: [:create, :destroy, :index, :show, :update]
    end
  end

  root "tasks#index"
end
