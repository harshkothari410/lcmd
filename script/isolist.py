# -*- coding: utf-8 -*-
import requests,json

s = requests.get('http://www.loc.gov/standards/iso639-2/php/code_list.php')

print s.text