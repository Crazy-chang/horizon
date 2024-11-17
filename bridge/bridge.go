package bridge

import (
	"context"
	"fmt"
	"github.com/ultrazg/xyz/service"
)

func NewApp() *App {
	return &App{}
}

func (a *App) Start(ctx context.Context) {
	a.ctx = ctx

	err := service.Start()
	if err != nil {
		fmt.Println(err.Error())
	}
}

func (a *App) ReadConfig() Config {
	config := ReadConfig()

	fmt.Println("***************************************************************")
	fmt.Println(config.User.AccessToken)

	return config
}
