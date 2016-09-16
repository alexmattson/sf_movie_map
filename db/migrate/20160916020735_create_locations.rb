class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :Title
      t.string :Release_Year
      t.string :Location
      t.string :Fun_Facts
      t.string :Production_Company
      t.string :Distributor
      t.string :Director
      t.string :Writer
      t.string :Actor_1
      t.string :Actor_2
      t.string :Actor_3
      t.string :Latitude
      t.string :Longitude
      t.string :Accuracy_Score
      t.string :Accuracy_Type
      t.string :Number
      t.string :Street
      t.string :City
      t.string :State
      t.string :County
      t.string :Zip
      t.string :Country
      t.timestamps
    end
  end
end
