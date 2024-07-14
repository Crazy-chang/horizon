package bridge

import "fmt"

var (
	major byte = 0
	minor byte = 0
	patch byte = 1
)

func (a *App) Version() string {
	return fmt.Sprintf("%v.%v.%v", major, minor, patch)
}
