import requests
import json
import Text_similarity as Ts

def Example(word_ex):
    Final_example = []
    url_example = "https://twinword-word-graph-dictionary.p.rapidapi.com/example/"

    querystring_example = {"entry": word_ex}
    headers = {
        'x-rapidapi-host': "twinword-word-graph-dictionary.p.rapidapi.com",
        'x-rapidapi-key': "60ecddf193msh8f2f879fa15da0ep145c16jsnae3ae7a9451e"
        }
    response_example = requests.request("GET", url_example, headers=headers, params=querystring_example)
    test_string_example = response_example.text
    result_example = json.loads(test_string_example)

    for key in result_example:
        if key == 'example':
            for k in result_example[key]:
                Final_example.append(k)
            
    Result = Ts.Similarity(Final_example, word_ex)
    return Result

    