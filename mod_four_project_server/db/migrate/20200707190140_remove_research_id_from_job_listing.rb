class RemoveResearchIdFromJobListing < ActiveRecord::Migration[6.0]
  def change
    remove_column :job_listings, :research_id, :integer
  end
end
