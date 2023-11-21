import konlpy
import scipy as sp
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer

def dist_raw(v1, v2):
    delta = v1 - v2
    return sp.linalg.norm(delta.toarray())

def compareStrings(str1, str2):
    okt = Okt()
    str1_tokens = okt.morphs(str1)
    str2_tokens = okt.morphs(str2)

    sentence1 = ' '.join(str1_tokens)
    sentence2 = ' '.join(str2_tokens)

    vectorizer = TfidfVectorizer(min_df=1, decode_error='ignore')

    X = vectorizer.fit_transform([sentence1])
    Y = vectorizer.transform([sentence2])  # fit_transform를 transform으로 변경

    print(X.toarray())
    print(Y.toarray())

    d = dist_raw(X, Y)
    
    return d

string1 = input()
string2 = input()

dist = compareStrings(string1, string2)
print("%.2f" %(dist))