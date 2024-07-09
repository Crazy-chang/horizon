package types

type Config struct {
	App struct {
		AccessToken  string `yaml:"AccessToken"`
		RefreshToken string `yaml:"RefreshToken"`
	} `yaml:"App"`
}
