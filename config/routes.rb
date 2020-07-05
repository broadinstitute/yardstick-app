Rails.application.routes.draw do
  resources :submissions
  resources :scores
  resources :challenges
  devise_for :users

  get "/profiles" => "profiles#new", as: :user_root

  resources :profiles
  resources :tasks

  root "tasks#index"
end
