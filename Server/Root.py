from turtle import clear
import requests
import json
# import demo_model as dm

def root_form(word_def):
    # print("we inside of root now and the word is: ", word_def)
    url_root = "https://twinword-lemmatizer1.p.rapidapi.com/extract/"
    querystring_root = {"text": word_def}
    headers = {
                    'x-rapidapi-host': "twinword-lemmatizer1.p.rapidapi.com",
                    'x-rapidapi-key': "60ecddf193msh8f2f879fa15da0ep145c16jsnae3ae7a9451e"
              }
    response_root = requests.request("GET", url_root, headers=headers, params=querystring_root)
    test_string_root = response_root.text
    result_root = json.loads(test_string_root)
    if(result_root["result_msg"] == 'Success'):
        for lem in result_root["lemma"]:
             word_def = lem
    return word_def
