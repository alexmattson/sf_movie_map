# SF Movie Map

## Demo

1 - Download
2 - Install Dependencies (npm / gem)
3 - Run local server

## Technology Stack

| Area               | Software      |
| ---------------    |:-------------:|
| Front-end           | React / Redux |
| Backend            | Rails 5.0     |

### Why I chose Redux / Getting started with the Front-end

I am currently working on project to create a ![Redux CLI and framework](https://www.npmjs.com/package/eos-redux) so I jump at a chance to consistently be testing out my project in a real world environment.

Beyond that this project lends itself to a single page framework so a javascript front-end was an easy decision.

### Why I chose Rails / Getting started with the Back-end

Originally my idea was to go with no back end and allow a simple API call to provide the data for the session that would then me manipulated throughout. The problem arose when seeking to work with Google Maps API geocode limit of 2500 per month (clearly impossible for the structure I had in mind). So I pivoted to rails deployment for the backend allowing me download the data run it through a batch geocoding service online and then write a simple rake task to import.

```ruby

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

```

## Outside Code

### easyAutocomplete

A highly configurable jquery autocomplete plugin. Allowing me to really leverage the time I had on this project.
