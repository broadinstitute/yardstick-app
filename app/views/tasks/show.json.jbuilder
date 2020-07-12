json.endpoint           @task.endpoint
json.id                 @task.id
json.name               @task.name

json.challenges @task.challenges do |challenge|
  json.endpoint         challenge.endpoint
  json.id               challenge.id
  json.name             challenge.name

  json.versions challenge.versions do |version|
    json.endpoint       version.endpoint
    json.id             version.id
    json.name           version.name
  end
end
