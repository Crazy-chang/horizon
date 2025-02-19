package main

import (
	"embed"
	"runtime"

	"github.com/ultrazg/horizon/bridge"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

func AppOptions(app *bridge.App) *options.App {
	dw, dh := bridge.GetDisplaySize()

	return &options.App{
		Title:         bridge.APP_NAME,
		Width:         int(float32(dw) * 0.7),
		Height:        int(float32(dh) * 0.7),
		DisableResize: true,
		AssetServer: &assetserver.Options{
			Assets:  assets,
			Handler: bridge.NewHttpRequest(),
		},
		//BackgroundColour: &options.RGBA{R: 67, G: 67, B: 67, A: 1},
		OnStartup: app.Start,
		Bind: []interface{}{
			app,
		},
		Frameless: runtime.GOOS == "windows",
		Windows: &windows.Options{
			WebviewIsTransparent:              true,
			WindowIsTranslucent:               true,
			BackdropType:                      windows.Acrylic,
			DisableWindowIcon:                 false,
			Theme:                             windows.Dark,
			DisableFramelessWindowDecorations: false,
		},
		Mac: &mac.Options{
			TitleBar:             mac.TitleBarHiddenInset(),
			Appearance:           mac.NSAppearanceNameDarkAqua,
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			About: &mac.AboutInfo{
				Title:   bridge.APP_NAME,
				Message: "© 2024 hexdr3am",
				Icon:    icon,
			},
		},
		Debug: options.Debug{
			OpenInspectorOnStartup: true,
		},
	}
}
