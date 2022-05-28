from turtle import clear
import requests
import json
# import demo_model as dm
from nltk.corpus import wordnet as wn


syns = []

def Definition (word_def):
    syns = wn.synsets(word_def)
    return syns
# print('Well at least lets try this')