package bridge

import "context"

type App struct {
	ctx context.Context
}

type Config struct {
	User User `yaml:"user" json:"user"`
}

type User struct {
	AccessToken  string `yaml:"access_token" json:"access_token"`
	RefreshToken string `yaml:"refresh_token" json:"refresh_token"`
}
