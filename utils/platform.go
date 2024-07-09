package utils

import "runtime"

func GetPlatform() string {
	if runtime.GOOS == "windows" {
		return "windows"
	} else if runtime.GOOS == "linux" {
		return "linux"
	} else if runtime.GOOS == "darwin" {
		return "darwin"
	} else {
		return "unknown"
	}
}
