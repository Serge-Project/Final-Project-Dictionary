import requests
import Language_detection as Ld
import json


Final_result = ""

def Translation(word):
    Lang = Ld.Language(word)
    lan_from = ""
    lang_to = ""

    if Lang == "en":
        lan_from = "en"
        lang_to = "zh-TW"
    else:
        lan_from = "zh-TW"
        lang_to = "en"

   
    return Final_result

def Translate_Action(lan_from, lang_to, word):
    url = "https://rapid-translate-multi-traduction.p.rapidapi.com/t"

    payload = {
        "from": lan_from,
        "to": lang_to,
        "e": "",
        "q": [word]
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
        "X-RapidAPI-Key": "60ecddf193msh8f2f879fa15da0ep145c16jsnae3ae7a9451e"
    }

    response = requests.request("POST", url, json=payload, headers=headers)
    test_string_example = response.text
    result_example = json.loads(test_string_example)

        
