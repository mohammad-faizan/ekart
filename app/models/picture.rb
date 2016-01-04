class Picture

	include Mongoid::Document
	include Mongoid::Paperclip

	has_mongoid_attached_file :picture,
	styles: {
		small: ['180x180', :jpg],
		medium: ['250x250', :jpg],
		large: ['600x600', :jpg]
	},
	path: 'attachment/:id/:style.:extention'
	embedded_in :item
end