# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username:"stacey", password: "stacey")


Post.create(user_id: 1, date:"02-3-22", image_url: "https://ca-times.brightspotcdn.com/dims4/default/fbc1795/2147483647/strip/true/crop/4200x2800+0+0/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd0%2F8b%2Fb0ad94b14159b0b5fc87941f2b9d%2Fla-photos-1staff-906892-la-tr-joshua-tree-national-parks-west-5-ajs.jpg", post_text: "Joshua Tree was beautiful and breath taking. I will need to go there again")
Post.create(user_id: 1, date:"02-3-22", image_url: "https://www.sheknows.com/wp-content/uploads/2019/07/pregnancy-dreams-decoded-meaning.jpg", post_text: "This day was cool")
Post.create(user_id: 1, date:"02-3-22", image_url: "sss", post_text: "This day was super")


