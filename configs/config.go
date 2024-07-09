package configs

import (
	"fmt"
	"github.com/spf13/viper"
	"github.com/ultrazg/horizon/types"
	"log"
	"os"
	"path/filepath"
)

var C types.Config

func Init() {
	wd, err := os.Getwd()
	if err != nil {
		fmt.Printf("Error getting current directory: %s\n", err)
		return
	}

	viper.AddConfigPath(filepath.Join(wd))
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")

	err = viper.ReadInConfig()
	if err != nil {
		log.Fatalf("[Error] - 找不到配置文件，%s", err)
	}

	err = viper.Unmarshal(&C)
	if err != nil {
		log.Fatalf("[Error] - 配置文件读取错误，%s", err)
	}
}
