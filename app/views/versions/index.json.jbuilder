json.array! @versions do |version|
  json.id               version.id
  json.name             version.name
  json.endpoint         version.endpoint
end
