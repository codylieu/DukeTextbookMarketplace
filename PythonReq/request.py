from urllib2 import Request, urlopen, URLError
from parser import *
import json

KEY = '48a841041e19085bb7a6e9cc4638ec7f'

def getCatalogNum_courseID(listOfSubject):
    print "return a list of tuples containing catalog number and course ID"
    catalogNum_courseIDList = []
    for subject in listOfSubject:
        reqURL = 'https://streamer.oit.duke.edu/curriculum/courses/subject/'+ subject +'?access_token=' + KEY
        print reqURL
        request = Request(reqURL)
        catalogNum_courseIDList = parseCourse(request)
    print " this is catalognum_courseIDlist :"
    print catalogNum_courseIDList
    return catalogNum_courseIDList
        
def getClassSection(catalogNum_courseIDList):
    print "return a list of class section associated with each element in the list that is being past in"
    catalog_sec_dict = {}
    term = '1500%20-%202014%20Fall%20Term'
    for dict in catalogNum_courseIDList:
        print dict["course_id"]
        print dict["catalog_nbr"]
        reqURL = 'https://streamer.oit.duke.edu/curriculum/classes/strm/'+ term +'/crse_id/'+dict["course_id"]+'?access_token=' +KEY
        request = Request(reqURL)
        sections = parseClassSections(request)
        if len(sections) > 0:
            catalog_sec_dict[dict["catalog_nbr"]] = sections
            print 'HEY'
            print catalog_sec_dict
            
    print catalog_sec_dict


    for key,value in catalog_sec_dict.items():
        for section in value:
            getTextBookInfo(key, section)

    return catalog_sec_dict

def getTextBookInfo(course, sec):
    TERM = 'FA14';
    DEPT = 'ECE';

    request = Request('http://dukebooks.collegestoreonline.com/ePOS?form=shared3/textbooks/json/json_books.html&term=' + TERM + '&dept='+ DEPT + '&crs=' + course + '&sec=' + sec +'&store=320&dti=YES&desc=&bSug=&cSug=&H=N')
    try:
       response = urlopen(request)
       courses = response.read()
       courses = json.loads(courses)    
       for book in courses["course"]["books"]:
           print "title: " + book["title"]
           print "author: " + book["author"]
           print "isbn: " + book["isbn"]



if __name__ == '__main__':
    getClassSection(getCatalogNum_courseID(["ECE"]))
