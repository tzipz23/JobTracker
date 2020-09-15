class AddUserIdToJobListing < ActiveRecord::Migration[6.0]
  def change
    add_column :job_listings, :user_id, :integer
  end
end
