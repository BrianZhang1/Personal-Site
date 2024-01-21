# The Journey

Hey there, I'm Brian!
When I first made this portfolio, I was just a hobby programmer with some projects
I wanted to show off to my friends.
(Am I still just a hobby dev? Probably. But I'd like to think I've grown across the past
couple of years.)
This portfolio started off as a simple page which pointed to a couple of my projects,
hosted on a free Python web app hosting site called Python Anywhere.

Later, I realized I wanted to take things to the next level. I wanted to build something
that wasn't just a small fling, but instead something I could call *real*. I didn't know it at
first, but by real, I meant *scaleable*, because the main differentiator between
a side project and a (practical) product is its ability to scale to meet the growing demands
of an increasing pool of users.

So, I started off with the foundation: **infrastructure**. Hosting the servers with a cloud provider,
such as **Amazon Web Services (AWS)**, meant a flexible pay-as-I-go model with low upfront costs and
little commitment.

Next, I shifted from a monolithic architecture to a **service-based architecture**, allowing components
to be maintained, developed, and scaled individually. This also meant migrating to using containers
with Docker and **container-orchestration** with **Docker Compose**, unlocking the ability to
**scale horizontally**.

Finally, I optimized the development pipeline with **build and deployment automation** using
**GitHub Actions**. When teams get larger than a handful of developers, creating a consistent,
efficient CI/CD pipeline for repetitive tasks helps reduce errors and save lots of time.

Is any of this practical at all for my use case? No, duh! This is just a small portfolio and will
never have to handle more than a few requests every hour. 
But getting hands-on experience with these tools gives me the confidence to tackle real world problems
with confidence when I inevitably start exploring the big world and face these kinds of engineering
obstacles. And I'm doing everything I can to get out there and start seeing the world ASAP!



## About (extras)

Check out the website at [**brianis.me**](https://brianis.me).  

This repository contains the source code for personal website, which 
currently operates as a portfolio of my major projects.

The website is built with the Python web framework **Django**. The application
(WSGI) server, **Gunicorn** acts as the bridge between the Django app
and the web server, **Nginx**.

These services run in Docker containers and are coordinated 
via **Docker Compose**. The containers are deployed on **AWS** in an
**Amazon EC2** instance.

Build and deployment to the EC2 instance is completely automated through a
**GitHub Actions** workflow.

The **REST API** allows both internal and external requests and can serve
the details for all available projects in JSON format.

SSL certification with Certbot.

The domain name is provided by Namecheap for free, courtesy of the 
GitHub Student Developer Pack. Thanks GitHub!

