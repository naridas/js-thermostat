require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions
  set :public_folder, proc{ File.join(root)}

  # post '/temperature' do
  #   session[:temperature] = params[:temperature]
  # end
  #
  # get '/temperature' do
  #   headers 'Access-Control-Allow-Origin' => '*'
  #   session[:temperature] || 20
  # end


  post '/temperature' do
    response.set_cookie 'temperature',
      {:value=> params[:temperature], :max_age => "2592000"}
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    request.cookies['temperature']
  end

  post '/city' do
    response.set_cookie 'city',
      {:value=> params[:city], :max_age => "2592000"}
  end

  get '/city' do
    headers 'Access-Control-Allow-Origin' => '*'
    request.cookies['city']
  end

  get '/' do
    File.read('index.html')
  end

  run! if app_file == $0
end
