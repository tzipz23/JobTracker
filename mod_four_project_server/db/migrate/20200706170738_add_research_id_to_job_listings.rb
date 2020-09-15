class AddResearchIdToJobListings < ActiveRecord::Migration[6.0]
  def change
    add_column :job_listings, :research_id, :integer
  end
end
