json.description    @version.description
json.id             @version.id
json.name           @version.name
json.endpoint       @version.endpoint

json.metrics @version.metrics do |metric|
  json.name         metric.name
  json.href         metric.href
  json.abbreviation metric.abbreviation
  json.description  metric.description
end

json.submissions @version.submissions do |submission|
  json.description  submission.description
  json.id           submission.id
  json.name         submission.name
end

json.training_partition do
  json.checksum     @version.training_partition.checksum
  json.description  @version.training_partition.description
  json.endpoint     @version.training_partition.endpoint
  json.id           @version.training_partition.id
end

json.validation_partition do
  json.checksum     @version.validation_partition.checksum
  json.description  @version.validation_partition.description
  json.endpoint     @version.validation_partition.endpoint
  json.id           @version.validation_partition.id
end

json.test_partition do
  json.checksum     @version.test_partition.checksum
  json.description  @version.test_partition.description
  json.endpoint     @version.test_partition.endpoint
  json.id           @version.test_partition.id
end
