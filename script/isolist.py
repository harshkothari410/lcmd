# -*- coding: utf-8 -*-
import requests,json

def dicttojson(dictdata):
	return "harsh"


s = requests.get('http://www.loc.gov/standards/iso639-2/php/code_list.php')

data = s.text

s = '<td scope="row">'
datadict = {}
datalist = []

while data.find(s) != -1:
	iso = data[data.find(s )+ len(s) : data.find(s )+ len(s) + 3]
	td = '<td>'
	temp = data[data.find(s)+ len(s) :data.find(s )+ len(s) + 100]
	temp = temp[temp.find(td) + len(td):]
	temp = temp[temp.find(td) + len(td):]
	engname = temp[:temp.find('</td>')]
	data = data[data.find(s)+ len(s) :]
	datadict[iso] = engname
	datalist.append([iso,engname])

json = json.dumps(datadict,ensure_ascii=False, indent=4, separators=(',', ': '))
f = open('../data/isolist.json','w')
f.write(json)