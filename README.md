# About

Check out the website at [**brianis.me**](https://brianis.me).  

This repository contains the source code for personal website, which 
currently operates as a portfolio of my major projects.

The website is built with the Python web framework **Django**. The application
(WSGI) server, **Gunicorn** acts as the bridge between the Django app
and the web server, **Nginx**.

These three services run in Docker containers and are coordinated 
via **Docker Compose**. The containers are deployed on **AWS** through
**Amazon EC2** (Elastic Compute Cloud).

Deployment to the EC2 instance is completely automated through a
**GitHub Actions** workflow.

The **REST API** allows both internal and external requests and can serve
the details for all available projects in JSON format.

The domain name is provided by Namecheap for free, courtesy of the 
GitHub Student Developer Pack. Thanks GitHub!
