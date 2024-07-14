package bridge

import "runtime"

func GetPlatform() string {
	return runtime.GOOS
}
