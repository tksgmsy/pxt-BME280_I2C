
BME280_I2C.Init(BME280_I2C_ADDRESS.e_0x76)
basic.forever(() => {
    basic.showNumber(BME280_I2C.Temperature())
})
