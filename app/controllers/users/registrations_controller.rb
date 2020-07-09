# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  def create
    build_resource sign_up_params

    resource.save

    if resource.errors.empty?
      render json: resource
    else
      errors = [
          {
              code: "100",
              detail: resource.errors,
              status: "400",
              title: "Bad Request",
          }
      ]

      render json: { errors: errors }, status: :bad_request
    end
  end
end
