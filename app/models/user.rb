# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  firstname           :string
#  lastname            :string
#  email               :string
#  about               :text
#  location            :string
#  personal_site_url   :string
#  password_digest     :string           not null
#  session_token       :string           not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, default_url: "default_avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :boards
  has_many :pins

  has_many :follower_users,
    foreign_key: :following_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :following_users,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :followers,
    through: :follower_users,
    source: :follower

  has_many :followings,
    through: :following_users,
    source: :following

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password= (password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
