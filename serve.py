#!/usr/bin/env python3
import os, http.server, socketserver

os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = 4174

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True
# Solo localhost: el demo tiene datos de contacto sembrados y un admin sin
# autenticación; no debe quedar expuesto al resto de la red local.
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Véndelo Ya en http://localhost:{PORT}")
    httpd.serve_forever()
