# json.extract! @user, :id, :email
json.partial! "api/users/user", user: @user
