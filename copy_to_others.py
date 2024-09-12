import os
import time

with open("index.html", "r", encoding="utf-8") as f:
	index = f.read()

while True:
	with open("index.html", "r", encoding="utf-8") as f:
		_index = f.read()
	
	if _index != index:
		index = _index
		
		pages = {
			'./Explore.html': 'Explore',
			'./Planet-Gaia-Derinkuyu.html': 'planet',
			'./Life-on-planet.html': 'life',
			'./About.html': 'about',
			'./Team.html': 'team',
		}
		for page in pages:
			# print(os.path.abspath(page))
			with open(page, "w", encoding="utf-8") as f:
				f.write(index)

		print("Copied to others")

	time.sleep(1)