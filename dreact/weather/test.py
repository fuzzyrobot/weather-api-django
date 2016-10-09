import json

from django.test import TestCase


class WeatherViewsTestCase(TestCase):
    def test_django_api(self):
        print('Testing request to django api endpoint...')
        resp = self.client.get('/weather')
        self.assertEqual(resp.status_code, 200)

    def test_openweather_api(self):
        print('Testing request to openweather.org api...')
        resp = self.client.get('/weather')
        response_body = json.loads(resp.content)
        self.assertEqual(int(response_body['cod']), 200)
