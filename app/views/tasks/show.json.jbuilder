json.description        @task.description
json.endpoint           @task.endpoint
json.id                 @task.slug
json.name               @task.name

json.challenges @task.challenges do |challenge|
  json.description      challenge.description
  json.endpoint         challenge.endpoint
  json.id               challenge.id
  json.name             challenge.name

  json.versions challenge.versions do |version|
    json.description    version.description
    json.id             version.id
    json.name           version.name

    json.metrics version.metrics do |metric|
      json.abbreviation metric.abbreviation
      json.description  metric.description
      json.href         metric.href
      json.name         metric.name
    end

    json.submissions version.submissions do |submission|
      json.description  submission.description
      json.name         submission.name
    end

    json.training_partition do
      json.checksum     version.training_partition.checksum
      json.description  version.training_partition.description
      json.href         version.training_partition.href
    end

    json.validation_partition do
      json.checksum     version.validation_partition.checksum
      json.description  version.validation_partition.description
      json.href         version.validation_partition.href
    end

    json.test_partition do
      json.checksum     version.test_partition.checksum
      json.description  version.test_partition.description
      json.href         version.test_partition.href
    end
  end
end
