package main

import (
	"github.com/ultrazg/horizon/services"
	"github.com/wailsapp/wails/v2"
)

func main() {
	err := wails.Run(AppOptions(services.NewApp()))
	if err != nil {
		println("Error:", err.Error())
	}
}
