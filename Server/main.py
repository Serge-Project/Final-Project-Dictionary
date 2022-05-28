from ast import Import
from fnmatch import translate
import definition as defi
import Root as rt
import Example as ex
import Text_similarity as Ts
import English_Chinese as EC

def get_Command_line():
            # My modified part
        Test = """
                \n Enter one of the command below: 
                 1. Definition: To find the meaning of a word 
                 2. Example: Type a word and find out how to use this word in a sentence
                 3. Root: Enter any word in any form (past tense, plural, past participle) to find the root form of the word
                 4. Similarity: Find The percentage of similarity between sentences
                 5. Translate: Translate a word/sentence fromEnglish to Chinese and vice-versa
              """;
        # 
        print(Test)
        print('> ', end='')
        Command_line = input()
        return Command_line

def Print_Definition(syns):       
    y=1
    for int_1 in syns:
        print(y,'.',int_1.definition())
        y+=1
        x=1
        for ex in int_1.examples():
            print("\t", x,'.', ex)
            x+=1


def Print_Example(Result):
    check = False
    print()
    for l in Result:
        if len(l) > 1:
            for xx in l:
                if check == False:
                    print(xx)
                    check = True
                else:
                    print("   ", xx)
            check = False
            print()

def main():
    # model, tokenizer = Load_Bert()
    while True:
        Command_line = get_Command_line()
        if Command_line == "Definition":
            word_def = input("\nEnter a word to find its meaning \n> ")
            syns = defi.Definition(word_def)
            Print_Definition(syns)
        elif Command_line == "Root":
            word_def = input("\nEnter a word to find its root form \n> ")
            result = rt.root_form(word_def)
            print("The root form of the word ", word_def, " is:\n",result)
        elif Command_line == "Example":
            word_ex = input("Enter a word\n")
            Result = ex.Example(word_ex)
            Print_Example(Result)
        elif Command_line == "Similarity":
            print("Enter the main sentence (Every sentences entered after this will be compared to it) or exit to exit this feature")
            main_sentence  = input()
            second_sentence = ""
            while main_sentence != "exit":
                print("Enter a sentence to compare with your main sentence")
                second_sentence = input()
                Final_Result = Ts.Sentences_similarity_check(main_sentence, second_sentence)
                print()
                print(main_sentence)
                print(second_sentence, "      ", round(Final_Result[1][0]*100),"%")
        elif Command_line == "Translate":
            print("Enter a word/Sentence to be translated")
            sentence = input()
            print(EC.Translation(sentence)[0])
        else:
            print("This is a wrong command")

if __name__ == '__main__':
    main()
