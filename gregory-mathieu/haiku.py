#!/usr/bin/python
import os

root, dirs, files = [x for x in os.walk("/sys/devices") if 'tpacpi::thinklight' in x[0]][0]
with open(os.path.join(root, "max_brightness"), "r") as max_brightness:
    with open(os.path.join(root, "brightness"), "w") as brightness:
        brightness.write(max_brightness.read())
