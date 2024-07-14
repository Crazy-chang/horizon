package bridge

import (
	"context"
)

func NewApp() *App {
	return &App{
		//Info: NewAppInfo(),
	}
}

func (a *App) Start(ctx context.Context) {
	a.ctx = ctx
	//a.Info.Ctx = ctx

	Init()
}
