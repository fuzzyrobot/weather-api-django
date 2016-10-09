"""
Communicates with weather api. Gets data from openweathermap.org
"""

from django.http import HttpResponse

import requests


def get_weather(request):
    '''
    Submits request with auth key to openweathermap API and returns
    weather forecast data in json format
    '''
    url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London,UK&cnt=7&mode=json'
    auth = auth_openweathermap()
    req_url = url + '&APPID=' + auth
    call_weather = requests.get(req_url)
    return HttpResponse(call_weather)


def auth_openweathermap():
    '''
    Returns authentication token
    '''
    api_key = '83946d614291fa5661fdb9504bde2d8e'
    return api_key
