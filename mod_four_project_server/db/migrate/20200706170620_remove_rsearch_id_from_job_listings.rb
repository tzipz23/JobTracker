class RemoveRsearchIdFromJobListings < ActiveRecord::Migration[6.0]
  def change
    remove_column :job_listings, :rsearch_id, :integer
  end
end
