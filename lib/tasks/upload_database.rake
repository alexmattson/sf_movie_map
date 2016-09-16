desc "This task uploads locations"

task :upload_database => :environment do
  require 'csv'

  puts "Setting Database..."

  csv_text = File.read('db/locations.csv', :encoding => 'iso-8859-1')
  csv = CSV.parse(csv_text, :headers => true)
  csv.each do |row|
    Location.create!(row.to_h)
  end

  puts "done."
end
