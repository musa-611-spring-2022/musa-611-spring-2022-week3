'''
Usage:

    curl "https://opendata.arcgis.com/api/v3/datasets/d46a7e59e2c246c891fbee778759717e_0/downloads/data?format=csv&spatialRefId=4326" > phl_school_facilities.csv
    cat phl_school_facilities.csv | python3 prep_school_facility_data.py > phl_school_facilities.js
'''

import csv
import json
import sys

# The CSV file may have a byte-order mark (BOM)
sys.stdin.reconfigure(encoding='utf-8-sig')

# Read the CSV
reader = csv.DictReader(sys.stdin)
rows = list(reader)

# Write out what should be a valid JavaScript file
print(f'const schools = {json.dumps(rows, sort_keys=True, indent=2)};')
