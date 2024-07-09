package utils

import "runtime"

func GetPlatform() string {
	if runtime.GOOS == "windows" {
		return "WINDOWS"
	} else if runtime.GOOS == "linux" {
		return "LINUX"
	} else if runtime.GOOS == "darwin" {
		return "MACOS"
	} else {
		return "UNKNOWN"
	}
}
