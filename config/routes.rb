Rails.application.routes.draw do
  devise_for :users, controllers: {
      registrations: "users/registrations",
      sessions: 'users/sessions',
  }

  resources :tasks do
    resources :challenges do
      resources :versions
    end
  end

  resources :submissions
  resources :users

  root "home#index"
end
