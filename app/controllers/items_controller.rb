class ItemsController < ApplicationController

	respond_to :html, :json
	def index
		respond_to do |f|
			f.html
			f.json do
				file = JSON.parse(File.read('data/items.json'))
				if params[:id].present?
					item = file.select { |item| item["id"] == params[:id].to_i}.first
					render json: item
				else
					@items = Item.all
					render json: @items.as_json
				end
			end
		end
	end

	def create
		item = Item.new(item_params)
		if item.save
			render json: { status: 200, item: item }
		else
			render json: { status: 500 }
		end
	end

	def show
		@item = Item.find_by(id: params[:id])
		respond_with(@item)
	end

	private

	def item_params
		params.require(:item).permit!
	end
	# def data
	# 	file = JSON.parse(File.read('data/items.json'))
	# 	if params[:id].present?
	# 		item = file.select { |item| item["id"] == params[:id].to_i}.first
	# 		render json: item
	# 	else
	# 		render json: file
	# 	end
	# end
end
