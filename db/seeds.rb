# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)
# Setup initial user so we can get in
user = User.create! :name => 'Brennan Dunn', :email => 'me@brennandunn.com', :password => 'tvz/R51aolc=', :password_confirmation => 'tvz/R51aolc='
user.confirmed_at = user.confirmation_sent_at
user.save
Role.create! :name => 'Admin'
Role.create! :name => 'Member'

user1 = User.find_by_email('me@brennandunn.com')
user1.role_ids = [1,2]
user1.save
