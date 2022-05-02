
from typing import Final
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import definition as defi




def Similarity(Final_example, word_def):
    model = SentenceTransformer('nli-distilroberta-base-v2')
    syns = defi.Definition(word_def)
    Result = []
    temp_list = []
    sentences = []
    temp_score = 0
    temp_index = 0
    temp_inner_list = []

    for int_1 in syns:
        temp_list.append(int_1.definition())
        Result.append(temp_list)
        temp_list = []
    
    for sent in Final_example:
        for idx in range(len(Result)):
            temp = Result[idx]
            sentences.append(temp[0])
            sentences.append(sent)
            sentence_embeddings = model.encode(sentences)
            similarity_score = cosine_similarity(
            [sentence_embeddings[0]],
            sentence_embeddings[1:]
            ).flatten()
            sentences = []
            if temp_score < similarity_score:
                temp_score = similarity_score
                temp_index = idx
        Result[temp_index].append(sent)
    return Result

    
def Sentences_similarity_check(main_sentence, second_sentence):
    model = SentenceTransformer('nli-distilroberta-base-v2')
    # temp = []
    # temp.append(main_sentence)
    sentences = []
    # sentences.append(main_sentence)
    sentences.append(main_sentence)
    sentences.append(second_sentence)
    sentence_embeddings = model.encode(sentences)
    similarity_score = cosine_similarity(
            [sentence_embeddings[0]],
            sentence_embeddings[1:]
            ).flatten()
    FInal_Result = []

    FInal_Result.append(second_sentence)
    FInal_Result.append(similarity_score)
    
    return FInal_Result

    # sentences 
    