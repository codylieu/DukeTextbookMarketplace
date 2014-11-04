from urllib2 import Request, urlopen, URLError
import json

KEY = '48a841041e19085bb7a6e9cc4638ec7f';

TERM = 'FA14';
DEPT = 'ECE';
COURSE = '280L';
SEC = '001';

req = 'https://streamer.oit.duke.edu/curriculum/courses/subject/COMPSCI?access_token=' + KEY;

req1 = Request(req)


try:
    response = urlopen(req1)
    test = response.read()
    print test
    
except URLError, e:
    print 'No . Got an error code:', e


request = Request('http://dukebooks.collegestoreonline.com/ePOS?form=shared3/textbooks/json/json_books.html&term=' + TERM + '&dept='+ DEPT + '&crs=' + COURSE + '&sec=' + SEC +'&store=320&dti=YES&desc=&bSug=&cSug=&H=N')

try:
    response = urlopen(request)
    courses = response.read()
    courses = json.loads(courses)    
    for book in courses["course"]["books"]:
        print "title: " + book["title"]
        print "author: " + book["author"]
        print "isbn: " + book["isbn"]
    
except URLError, e:
    print 'No kittez. Got an error code:', e