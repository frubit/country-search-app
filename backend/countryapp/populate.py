# Code used for populating sqlite database

from country.models import Country

countries = [
 "Brazil", "Belgium", "Canada", "China", "France", "Germany",
 "India", "Indonesia", "Ireland", "Italy", "Japan",
 "Kenya", "Luxembourg", "Mexico", "New Zealand", "Nigeria", "Portugal", "Russia",
 "South Africa", "South Korea", "Spain", "Sweden", "Thailand", "Ukraine",
 "United Kingdom", "United States of America", "Vietnam", "Zambia"
 ]


for country in countries:
	Country.object.create(name=country)
