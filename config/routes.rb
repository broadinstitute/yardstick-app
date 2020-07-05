Rails.application.routes.draw do
  devise_for :users

  resources :tasks

  root "tasks#index"

  # get "/user" => "tasks#index", as: :user_root
end
