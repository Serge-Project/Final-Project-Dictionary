from unittest import result
from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_cors import CORS, cross_origin
from scipy import interpolate
import numpy as np
import pandas as pd
import definition as defi


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)



class Dictionary (Resource):
    @cross_origin()
    def post(self):
        result_dict = {}
        temp_list = []
        third_list = []
        word_def = ""
        request_data = request.get_json()
        for x in request_data:
            if(x == "word"):
                word_def = request_data[x]
        syns = defi.Definition(word_def)
        y=1
        for int_1 in syns:
            temp_list += int_1.definition()
            # print(y,'.',int_1.definition())
        print(temp_list)

            
        
        return {"test": "test"}

        

api.add_resource(Dictionary, "/dictionary")

if __name__ == "__main__":
	app.run(debug=True)