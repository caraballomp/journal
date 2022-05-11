class PostSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :post_text, :user_id
end
