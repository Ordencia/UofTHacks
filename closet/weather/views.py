from django.shortcuts import render

# Create your views here.
import requests
from django.shortcuts import render
from .models import City
from .forms import CityForm

def index(request):
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1'

    if request.method == 'POST':
        form = CityForm(request.POST)
    else:
        form = CityForm()

    if (form.is_valid()):
        city = form.save()

    city_weather = {
        'city' : 'Please Enter a City',
        'temperature' : 0,
        'description' : '--',
        'icon' : '09d',     
    }

    #form = CityForm()
    
    #weather_data = ""
   # weather_data = []

    if (form.is_valid()):
        try:
            # for city in cities:

            r = requests.get(url.format(city)).json()

            city_weather = {
                'city' : city,
                'temperature' : r['main']['temp'],
                'description' : r['weather'][0]['description'],
                'icon' : r['weather'][0]['icon'],
            }

            
                #weather_data.append(city_weather)
                # context = {'weather_data' : city_weather, 'form' : form}
                # return render(request, 'weather/weather.html', context)
        except KeyError:
            pass
        except Exception as e:
            pass
    context = {'city_weather' : city_weather, 'form': form}
    return render(request, 'weather/weather.html', context)

