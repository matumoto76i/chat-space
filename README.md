# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|string|null: false|
|password|string|null:false|

### Association
- has_many :groups
- has_many :groups_users
- has_many :messeges, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|

### Association
- has_many :groups_users
- has_many :messeges, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|position|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|groups_id|integer|null: false, foreign_key: true|
|users_id|null: false, foreign_key: true|

### Association
- belongs_to :group,through: :groups_users
- belongs_to :user,through: :groups_users