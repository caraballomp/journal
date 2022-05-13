class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :image_url
      t.string :post_text
      t.string :date
      t.references :user

      t.timestamps
    end
  end
end
