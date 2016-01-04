class Item

	include Mongoid::Document
	
	field :name, type: String
	field :category, type: String
	field :description, type: String
	field :image, type: String
	field :availability, type: Boolean

	embeds_many :pictures

end