# == Schema Information
#
# Table name: pins
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text
#  url                :text
#  image_url          :text             not null
#  user_id            :text             not null
#  board_id           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Pin < ActiveRecord::Base
  validates :title, :image_url, :user, :board, presence: true

  has_attached_file :image, default_url: "default_pin.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "User"

  has_many :pinnings,
  primary_key: :id,
  foreign_key: :pin_id,
  class_name: "Pinning",
  dependent: :destroy

  has_many :boards,
  through: :pinnings

end
