json.id               @challenge.id
json.name             @challenge.name
json.endpoint         @challenge.endpoint

json.versions @challenge.versions do |version|
  json.id             version.id
  json.name           version.name
  json.endpoint       version.endpoint
end
