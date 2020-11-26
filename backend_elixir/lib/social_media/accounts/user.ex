defmodule SocialMedia.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :age, :integer
    field :email, :string, size: 50, null: false
    field :name, :string, null: false
    field :password, :string, null: false

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password, :age])
    |> validate_required([:name, :email, :password, :age])
    |> unique_constraint(:email)
  end
end
