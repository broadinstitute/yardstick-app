Rails.application.routes.draw do
  devise_for :users

  resources :challenges,  only: %i{index, show}
  resources :profiles,    only: %i{create, destroy, show, update}
  resources :submissions, only: %i{create, destroy, index, show, update}
  resources :tasks,       only: %i{index, show}

  get "/profiles" => "profiles#new", as: :user_root

  root "tasks#index"
end
