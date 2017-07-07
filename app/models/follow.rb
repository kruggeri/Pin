# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  following_id :integer          not null
#  follower_id  :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Follow < ActiveRecord::Base
validates :follower_id, :following_id, presence: true

belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: "User"

belongs_to :following,
  primary_key: :id,
  foreign_key: :following_id,
  class_name: "User"

end
