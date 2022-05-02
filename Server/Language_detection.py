import requests
import json

def Language(Text):
    result=""
    url = "https://language-detection10.p.rapidapi.com/detect_language"
    querystring = {"text": Text}
    headers = {
        "X-RapidAPI-Host": "language-detection10.p.rapidapi.com",
        "X-RapidAPI-Key": "60ecddf193msh8f2f879fa15da0ep145c16jsnae3ae7a9451e"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    test_string_example = response.text
    result_example = json.loads(test_string_example)
    # print(result_example)
    for key in result_example:
            if key == 'language':
                return result_example[key]
