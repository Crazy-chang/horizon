package services

import (
	"context"
	"fmt"
	"github.com/ultrazg/horizon/configs"
	"github.com/ultrazg/horizon/utils"
)

type App struct {
	ctx  context.Context
	Info *utils.AppInfo
}

func NewApp() *App {
	return &App{
		Info: utils.NewAppInfo(),
	}
}

func (a *App) Start(ctx context.Context) {
	a.ctx = ctx
	a.Info.Ctx = ctx

	configs.Init()

	fmt.Println("*********************", configs.C.App.AccessToken)
}
