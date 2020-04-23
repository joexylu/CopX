Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]

    resource :session, only: [:create, :destroy]

    resources :sneakers, only: [:show, :index] do
      resources :listingitems, only: [:index]
    end
    # get "/sneakers/brands", to: "anime#brands"

    resources :listingitems, only: [:show, :destroy]

    resources :follows, only: [:index, :create]
    delete '/follows', to: 'follows#destroy'

    resources :purchaseditems, only: [:index, :show, :create]

    resources :search, only: [:show]
  end

  root to: 'static_pages#root'
end
