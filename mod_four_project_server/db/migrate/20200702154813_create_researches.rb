class CreateResearches < ActiveRecord::Migration[6.0]
  def change
    create_table :researches do |t|
      t.integer :user_id
      t.string :job_title
      t.string :city
      t.string :created_in
      t.string :query
      t.integer :total_results

      t.timestamps
    end
  end
end
