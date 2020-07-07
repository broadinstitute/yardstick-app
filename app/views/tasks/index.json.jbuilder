# frozen_string_literal: true

json.array! @tasks do |task|
  json.id          task.id
  json.name        task.name
  json.description task.description

  # json.author do
  #   json.first_name task.author.first_name
  #   json.last_name task.author.last_name
  # end
end
