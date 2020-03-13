# Carbone Docker

Embedded Carbone in a Docker image with simple REST API.

## Authentication

Requests require HTTP Basic Authentication. Username and password must be passed to the server process via the USERNAME and PASSWORD environment variables, otherwise it will exit immedately with a non-zero exit code and, thus, stop the container.

## E-Mail deployment

Generated reports can be sent via E-Mail if the request has a _mailto_ field with a JSON array of strings containing recipient addresses. If left out, empty or invalid, no emails will be sent.

The SMTP client connection can be configured by a set of environment variables:

- _SMTP_HOST_, _SMTP_PORT_ - host and port to connect to
- _SMTP_USER_ - username for SMTP authentication and as sender in messages' _FROM_ field
- _SMTP_PASSWORD_ - password for SMTP authentication
- _SMTP_UNSAFE_: if left undefined or empty (default), will attempt to use TLS encryption.

You can execute `npm run smtp-dummy` to launch a local dummy SMTP server that will log all received mails to standard output.

Executing `run-local.sh` will setup all environment variables to connect to it and launch the API server.

## How to consume exposed API ?

~~The simpliest way to use this image is to use `node` and install [`carbone-connect` package](https://npmjs.org/carbone-connect).~~ We extended the API with authentication, so this doesn't work anymore. :(

## From carbone.io website

_Fast, Simple and Powerful report generator in any format PDF, DOCX, XLSX, ODT, PPTX, ODS [, ...]_

_... using your JSON data as input._

See [carbone.io website](https://carbone.io) for full **Carbone** documentation.
