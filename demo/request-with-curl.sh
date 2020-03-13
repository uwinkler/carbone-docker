#!/bin/sh

URL=localhost:3030/render
DATA=`cat testdata.min.json`
OUTPUT_FILE=invoice.pdf
TEMPLATE_FILE=template.odt

curl -f\
  -X POST\
  -u demo:demo\
  -F "template=@${TEMPLATE_FILE};type=application/vnd.oasis.opendocument.text"\
  -F data="$DATA"\
  -F options='{"convertTo":"pdf"}'\
  -F mailto='["tom@example.com"]'\
  -F formatters='{}'\
  ${URL} --output ${OUTPUT_FILE}
