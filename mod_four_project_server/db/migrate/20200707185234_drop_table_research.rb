class DropTableResearch < ActiveRecord::Migration[6.0]
  def change
    drop_table :researches
  end
end
