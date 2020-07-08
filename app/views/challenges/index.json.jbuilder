json.array! @challenges do |challenge|
  json.id               challenge.id
  json.name             challenge.name
  json.description      challenge.description

  json.versions challenge.versions do |version|
    json.id             version.id
    json.name           version.name
    json.description    version.description

    json.metrics version.metrics do |metric|
      json.name         metric.name
      json.href         metric.href
      json.abbreviation metric.abbreviation
      json.description  metric.description
    end

    json.submissions version.submissions do |submission|
      json.name         submission.name
      json.description  submission.description
    end

    json.training_partition do
      json.href         version.training_partition.href
      json.checksum     version.training_partition.checksum
      json.description  version.training_partition.description
    end

    json.validation_partition do
      json.href         version.validation_partition.href
      json.checksum     version.validation_partition.checksum
      json.description  version.validation_partition.description
    end

    json.test_partition do
      json.href         version.test_partition.href
      json.checksum     version.test_partition.checksum
      json.description  version.test_partition.description
    end
  end
end
