wsgi_app = "personalsite.wsgi:application"
loglevel = "debug"
workers = 2
bind = "0.0.0.0:8000"
accesslog = errorlog = "/var/log/gunicorn/dev.log"
capture_output = True
daemon = True