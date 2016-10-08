from django.http import HttpResponse

import requests


def get_weather(request):
    weather = 'weather now available lol'
    url = 'http://api.openweathermap.org/data/2.5/forecast?q=London,UK&mode=json'
    auth = auth_openweathermap()
    req_url = url + '&APPID=' + auth
    call_weather = requests.get(req_url)
    print call_weather
    return HttpResponse(call_weather)


def auth_openweathermap():
    # Submit authentication token
    api_key = '83946d614291fa5661fdb9504bde2d8e'
    return api_key
