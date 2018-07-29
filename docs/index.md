
## What is BME280
BME280 is a sensor to measure temperature, pressure, and himidity, which is mainly for monitoring an ordinal envronment.
micro:bit itself also has a temperature sensor. Howerver, it is for monitoring the temperture of CPU to prevent form overheating, which will report you a hihger temperature than the envrionment when you run some tasks on the CPU. On the other hand, BME280 will report you pretty presice mesurement result, since the each of the unit has its own data to calibrate mesurement result.  
You can refer the following ling for more information.  
https://www.bosch-sensortec.com/bst/products/all_products/bme280  

## Set up
### What you must have
- micro:bit
- BME280 i2c board

### What you may nice to have
- a breakout board for micor:bit
- a bleadboard
- bleadboard jumpers

### How to connect BME280 I2C board to your micro:bit
micro:bit has two terminals to supply power to BME280 I2C board, which are called "+3v3" and "GND", also it has another two terminals to communicate data between your micro:bit and BME280, which called "SCL" and "SDA".  
You can visit the following link to refer where the terminals are on your micro:bit.  
http://microbit.org/guide/hardware/pins/  
  
On the other hand, your BME280 device will be vary, so I cannot describe here what pin should be connected to your what pin of your BME280 device. However most of a device should have the following connections, if you have a difficulty to connect your device, try asking the people around you, don't hesiteate.

1. "+3v3" -> "VDD" (This is to supply +3V power to your BME280 from micro:bit)
2. "GND" -> "GND" (This is to supply +3V power to your BME280 from micro:bit)
3. "SDA" -> "SDI" (This is an I2C data connection.)
4. "SCL" -> "SCK" (This is an I2C clock connection.)

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
