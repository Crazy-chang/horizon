package bridge

import (
	"context"
)

func NewApp() *App {
	return &App{}
}

func (a *App) Start(ctx context.Context) {
	a.ctx = ctx

	Init()
}
