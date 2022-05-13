class PostSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :post_text, :date, :user_id
end
