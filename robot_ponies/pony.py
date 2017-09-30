 # Import GPIO
import RPi.GPIO as GPIO

# Import sleep
from time import sleep

# Set the GPIO mode
GPIO.setmode(GPIO.BCM)

# Define GPIO pins
Motor1A = 27
Motor1B = 24
Motor1Enable = 5

# Set up defined GPIO pins
GPIO.setup(Motor1A,GPIO.OUT)
GPIO.setup(Motor1B,GPIO.OUT)
GPIO.setup(Motor1Enable,GPIO.OUT)
We then tell the code to turn certain pins on or off to make the motor move:
# Turn the motor on
GPIO.output(Motor1A,GPIO.HIGH) # GPIO high to send power to the + terminal
GPIO.output(Motor1B,GPIO.LOW) # GPIO low to ground the - terminal
GPIO.output(Motor1Enable,GPIO.HIGH) # GPIO high to enable this motor

# Leave the motor on for 3 seconds
sleep(3)

# Stop the motor by 'turning off' the enable GPIO pin
GPIO.output(Motor1Enable,GPIO.LOW)

# Always end this script by cleaning the GPIO
GPIO.cleanup()