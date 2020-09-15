class CreateJobListings < ActiveRecord::Migration[6.0]
  def change
    create_table :job_listings do |t|
      t.integer :rsearch_id
      t.integer :job_salary
      t.string :job_title
      t.string :company
      t.string :city
      t.string :state
      t.text :snippet
      t.string :job_url
      t.decimal :latitude, { precision: 10, scale: 6}
      t.decimal :longitude, { precision: 10, scale: 6} 

      t.timestamps
    end
  end
end
