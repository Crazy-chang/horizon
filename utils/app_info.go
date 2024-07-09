package utils

import (
	"context"
	"github.com/ultrazg/horizon/consts"
)

type AppInfo struct {
	Ctx context.Context
}

func NewAppInfo() *AppInfo {
	return &AppInfo{}
}

func (a *AppInfo) ShowVersion() string {
	return consts.Version()
}
