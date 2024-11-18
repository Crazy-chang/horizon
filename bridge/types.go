package bridge

import "context"

type App struct {
	ctx context.Context
}

type Config struct {
	User    User    `yaml:"user" json:"user"`
	Setting Setting `yaml:"setting" json:"setting"`
}

type User struct {
	AccessToken  string `yaml:"accessToken" json:"accessToken"`
	RefreshToken string `yaml:"refreshToken" json:"refreshToken"`
}

type Setting struct {
	CheckUpdateOnStartup bool `yaml:"checkUpdateOnStartup" json:"checkUpdateOnStartup"`
	IsIpLocHidden        bool `yaml:"isIpLocHidden" json:"isIpLocHidden"`
}
