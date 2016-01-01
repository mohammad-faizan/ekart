Rails.application.routes.draw do

  root 'items#index'

  match 'data(/:id)', to: 'items#data'

end
