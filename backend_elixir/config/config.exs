# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :social_media,
  ecto_repos: [SocialMedia.Repo]

# Configures the endpoint
config :social_media, SocialMediaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "78pxijVBW95l5nIcEgWOHJVXh/wl1wuioZJhhpMCm3LwegNhlfQwMh7/T0mGeAr3",
  render_errors: [view: SocialMediaWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: SocialMedia.PubSub,
  live_view: [signing_salt: "eJT+5K3L"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
