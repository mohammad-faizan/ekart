class ItemsController < ApplicationController

	respond_to :json
	def index
	end

	def data
		file = File.read('data/items.json')
		if params[:item_id].present?
			hash_data = JSON.parse(file)
			item = hash_data[params[:item_id]]
			render json: item
		else
			render json: file
		end
	end
end
