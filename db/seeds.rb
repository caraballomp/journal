# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username:"stacey", password: "stacey")


Post.create(user_id: 1, date:"04-3-20", image_url: "https://images.pexels.com/photos/11301535/pexels-photo-11301535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", post_text: "Lower Antelope Canyon, just BEAUTIFUL")
Post.create(user_id: 1, date:"05-5-20", image_url: "https://images.pexels.com/photos/10854224/pexels-photo-10854224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", post_text: "Ocean no place like home Cali")
Post.create(user_id: 1, date:"07-8-21", image_url: "https://images.pexels.com/photos/8891729/pexels-photo-8891729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", post_text: "Reflection at Cuba")
Post.create(user_id: 1, date:"08-27-21", image_url: "https://images.pexels.com/photos/7446143/pexels-photo-7446143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", post_text: "It's my Birthday 28!!!!")
Post.create(user_id: 1, date:"10-4-21", image_url: "https://images.pexels.com/photos/8602985/pexels-photo-8602985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", post_text: "Fall vibez, Texas")
Post.create(user_id: 1, date:"12-17-21", image_url: "https://images.pexels.com/photos/704913/pexels-photo-704913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=20", post_text: "Classic Yellow Car in Spain")
Post.create(user_id: 1, date:"01-1-22", image_url: "https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", post_text: "Ringing in the NEW YEAR")


