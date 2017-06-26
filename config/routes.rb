Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :boards, only: [:show, :create, :update, :destroy]
    resources :pinnings, only: [:create, :destroy]
  end


end
