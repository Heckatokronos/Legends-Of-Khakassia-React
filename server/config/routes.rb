Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :products
    end
  end

  # root path or /api/v1/products
  root "api/v1/products#index"
  get '/new', to: "api/v1/products#new"

  resources :products
end
