#!/bin/sh

URL=localhost:3030/render
OUTPUT_FILE=invoice.pdf
TEMPLATE_FILE=template.odt
DATA_FILE=testdata.min.json

DATA=`cat ${DATA_FILE}`

curl -f\
  -X POST\
  -u demo:demo\
  -F "template=@${TEMPLATE_FILE};type=application/vnd.oasis.opendocument.text"\
  -F data="$DATA"\
  -F options='{"convertTo":"pdf"}'\
  -F email='{"to":["tom@example.com", "jerry@example.com"],"subject":"Your Report is Ready!","text":"We prepared a document for you.\n\nBest Regards,\nThe Kodira Automatons."}'\
  -F formatters='{}'\
  ${URL} --output ${OUTPUT_FILE}
