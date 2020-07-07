# frozen_string_literal: true

require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Yardstick
  class Application < Rails::Application
    config.load_defaults 6.0

    config.google_cloud.use_debugger = false
    config.google_cloud.use_error_reporting = false
    config.google_cloud.use_logging = false
    config.google_cloud.use_trace = false

    config.react.server_renderer_extensions = %w[ts tsx]
  end
end
