# CopX
![logo](/image/coplogo.png)
#### [CopX](https://copx.herokuapp.com/#/) is an online marketplace catered mainly toward the sneaker community. It is a clone of StockX.com, a single-page, e-commerce website that allows users to browse through and shop sneakers. The app is built on a Ruby on Rails backend with a PostgresQL database. The frontend uses a combination of React and Redux, and uses Amazon AWS S3 for cloud based storage of images.

## Technologies
* Ruby on Rails
* React/ Redux
* PostgreSQL database
* AWS S3
* JBuilder
* ActiveStorage

## Features
* User authentication
* Sneaker index and show
* User Follow Sneakers
* User Select Sizes
* Checkout the Items and Show in User Order History

The app utilizes Ruby on Rails as a back-end where PostgreSQL is used to store data for the app. Using the JavaScript AJAX library, React is able to fetch the data and render it on the front-end.
### Splash Page
![logo](/image/splash.png)
### Login/SignUp
Users can create an account and log in. User authentication for this web application was made using the BCrypt gem and SecureRandom module.
![user-auth](/image/user-auth.png)
```
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
```
### Sneaker Index Page
![sneaker-index](/image/sneaker-index.png)
Customized the filter at backend to filter out different brands:
```
def index
  if params[:brand]
      @sneakers = Sneaker.where(brand: params[:brand])
  else
      @sneakers = Sneaker.all
  end
  render :index
end
```
### Sneaker Show Page
User can select sizes to checkout the sneaker and follow the this sneaker
![sneaker-show](/image/sneaker-show.png)
### User's Profile
Users can see their following sneakers and order history
![user-show](/image/user-show.png)
### Sneaker Search
User can search sneaksers by names
![search-page](/image/search-page.png)
```
def show
    @results = Sneaker.where("LOWER(name) LIKE ?", "%#{params[:id]}%")
    render :show
end
```

## Future Plans
* Sneaker Selling and bidding
