# == Schema Information
#
# Table name: pinnings
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

# TODO: not currently using pinning, but would want to use it to pin 1
# 'pin' to many boards
class Pinning < ActiveRecord::Base
  validates :board_id, :pin_id, presence: true
  validates_uniqueness_of :board_id, scope: :pin_id

  belongs_to :board
  belongs_to :pin
end
