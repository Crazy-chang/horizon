package main

import (
	"embed"
	"github.com/ultrazg/horizon/services"
	"github.com/ultrazg/horizon/utils"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

func AppOptions(app *services.App) *options.App {
	dw, dh := utils.GetDisplaySize()

	return &options.App{
		Title:         "horizon",
		Width:         int(float32(dw) * 0.6),
		Height:        int(float32(dh) * 0.7),
		DisableResize: true,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		//BackgroundColour: &options.RGBA{R: 67, G: 67, B: 67, A: 1},
		//BackgroundColour: options.NewRGBA(255, 0, 0, 128),
		OnStartup: app.Start,
		Bind: []interface{}{
			app,
			app.Info,
		},
		Mac: &mac.Options{
			TitleBar:             mac.TitleBarHiddenInset(),
			Appearance:           mac.NSAppearanceNameDarkAqua,
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			About: &mac.AboutInfo{
				Title:   "horizon",
				Message: "© 2024 2bit",
				Icon:    icon,
			},
		},
	}
}
