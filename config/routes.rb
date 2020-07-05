Rails.application.routes.draw do
  devise_for :users

  get "/profiles" => "profiles#new", as: :user_root

  resources :profiles
  resources :tasks

  root "tasks#index"
end
