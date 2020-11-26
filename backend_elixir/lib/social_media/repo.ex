defmodule SocialMedia.Repo do
  use Ecto.Repo,
    otp_app: :social_media,
    adapter: Ecto.Adapters.Postgres
end
