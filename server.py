#!/usr/bin/env python3
"""
Servidor HTTP para Landing Pages Hermes Lab
Porta: 8092
"""
import http.server
import socketserver
import os

PORT = 8092
DIRECTORY = "/home/vitor/landing-pages"

os.chdir(DIRECTORY)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def log_message(self, format, *args):
        pass  # Silenciar logs

with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Servidor rodando em http://127.0.0.1:{PORT}")
    httpd.serve_forever()
