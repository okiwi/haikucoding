#!/bin/bash
cd /sys/devices
SCREEN=$(find -name "*tpacpi::thinklight*")
cat ${SCREEN}/max_brightness > ${SCREEN}/brightness
