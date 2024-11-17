package bridge

import (
	"fmt"
	"github.com/spf13/viper"
	"log"
)

const (
	configFileName = "config"
	configFilePath = "."
)

func initConfig() {
	viper.SetConfigName(configFileName)
	viper.AddConfigPath(configFilePath)
	viper.SetConfigType("yaml")

	viper.SetDefault("user.access_token", "")
	viper.SetDefault("user.refresh_token", "")

	// 检查配置文件是否存在
	configFile := fmt.Sprintf("%s/%s.yaml", configFilePath, configFileName)
	if IsExist(configFile) {
		log.Println("配置文件已存在:", configFile)
	} else {
		if err := viper.SafeWriteConfigAs(configFile); err != nil {
			log.Printf("创建配置文件失败: %v", err)
		}
		log.Println("配置文件已创建:", configFile)
	}
}

func ReadConfig() Config {
	initConfig()

	viper.SetConfigName(configFileName)
	viper.AddConfigPath(configFilePath)
	viper.SetConfigType("yaml")

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("读取配置文件失败: %v", err)
	}

	var c Config

	if err := viper.Unmarshal(&c); err != nil {
		log.Fatalf("解析配置文件失败: %v", err)
	}

	return c
}
