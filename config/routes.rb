Rails.application.routes.draw do
  devise_for :users, controllers: {
      registrations: "users/registrations",
      sessions: 'users/sessions',
  }

  resources :tasks do
    resources :challenges
  end

  resources :users do
    resources :submissions
  end

  root "home#index"
end
