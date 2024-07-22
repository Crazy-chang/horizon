package bridge

import (
	"context"
	"github.com/ultrazg/xyz/server"
)

func NewApp() *App {
	return &App{}
}

func (a *App) Start(ctx context.Context) {
	a.ctx = ctx

	//Init()
	server.Start()
}
