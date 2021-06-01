Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # put all api routes in here
  namespace :api do
    # resources :facts
    
    get '/facts', to: 'facts#index'
    post '/facts', to: 'facts#create'
    
    get '/facts/:id', to: 'facts#show'
    put '/facts/:id', to: 'facts#update'
    patch '/facts/:id', to: 'facts#update'
    delete '/facts/:id', to: 'facts#destroy'
  end
end
