class User < ApplicationRecord
    validates :email, presence: true, uniqueness:true
    validates :password_digest, :session_token, presence:true
    validates :password, length:{minimum: 6}, allow_nil: true

    before_validation :ensure_session_token

    has_many :following,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Follow

    has_many :purchaseditems,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Purchaseditem

    has_many :following_sneakers,
        through: :following,
        source: :sneaker

    attr_reader :password

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
end
