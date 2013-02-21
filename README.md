level-noc
=========

Requirements: node.js, libzmq, python-zmq

1. Run level_basestation/level/python/zmq_fft_sink.py. By default it's hooked up to a CW signal combined with Gaussian noise. This pushes the data out to the node server

2. Run the node broadcaster: node broadcaster.js

3. Open a browser to 127.0.0.1:8080