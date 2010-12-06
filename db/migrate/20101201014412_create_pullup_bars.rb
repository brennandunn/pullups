class CreatePullupBars < ActiveRecord::Migration
  def self.up
    create_table :pullup_bars do |t|
      t.float :latitude
      t.float :longitude
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :pullup_bars
  end
end
