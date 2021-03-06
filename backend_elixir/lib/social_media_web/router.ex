defmodule SocialMediaWeb.Router do
  use SocialMediaWeb, :router

  pipeline :api do
    plug CORSPlug, origin: "*", methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
    plug :accepts, ["json"]
  end

  scope "/api", SocialMediaWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: SocialMediaWeb.Telemetry
    end
  end
end
