from urllib2 import Request, urlopen, URLError
from parser import *
import json
import sys
sys.path.insert(0, '../PythonDatabaseCalls/')
import insert

KEY = '48a841041e19085bb7a6e9cc4638ec7f'
DEPT_NAME = ["ARTSVIS"]
FULL_NAME = 'Visual Arts'

def getCatalogNum_courseID(listOfSubject):
    print "return a list of tuples containing catalog number and course ID"
    catalogNum_courseIDList = []
    for subject in listOfSubject:
        reqURL = 'https://streamer.oit.duke.edu/curriculum/courses/subject/'+ subject +'?access_token=' + KEY
        print reqURL
        request = Request(reqURL)
        catalogNum_courseIDList = parseCourse(request)
    #print " this is catalognum_courseIDlist :"
    #print catalogNum_courseIDList
    return catalogNum_courseIDList
        
def getClassSection(catalogNum_courseIDList):
    print "return a list of class section associated with each element in the list that is being past in"
    catalog_sec_dict = {}
    term = '1500%20-%202014%20Fall%20Term'
    for dict in catalogNum_courseIDList:
        #print dict["course_id"]
        #print dict["catalog_nbr"]
        reqURL = 'https://streamer.oit.duke.edu/curriculum/classes/strm/'+ term +'/crse_id/'+dict["course_id"]+'?access_token=' +KEY
        request = Request(reqURL)
        sections = parseClassSections(request)
        if len(sections) > 0:
            catalog_sec_dict[dict["catalog_nbr"]] = sections
            #print catalog_sec_dict
            
    #print catalog_sec_dict


    for key,value in catalog_sec_dict.items():
        for section in value:
            getTextBookInfo(key, section)

    return catalog_sec_dict

def getTextBookInfo(course, sec):
    TERM = 'FA14';
    DEPT = DEPT_NAME[0];
    insert.insertToDepartment(DEPT, FULL_NAME)

    course = course.strip()

    request = Request('http://dukebooks.collegestoreonline.com/ePOS?form=shared3/textbooks/json/json_books.html&term=' + TERM + '&dept='+ DEPT + '&crs=' + course + '&sec=' + sec +'&store=320&dti=YES&desc=&bSug=&cSug=&H=N')

    try:
       response = urlopen(request)
       courses = response.read()
       courses = json.loads(courses)   
       if courses["course"] is None: return 
       if "books" not in courses["course"]: return 
       for book in courses["course"]["books"]:
           if "title" in book:
                print "title: " + book["title"]
                title = book["title"]
           if "author" in book:
                print "author: " + book["author"]
                author = book["author"]
           if "isbn" in book:
                print "isbn: " + book["isbn"]
                isbn = book["isbn"]
           if not "No Books Found" in title:
               print "MAKE CALL"

               insert.insertToCourse(DEPT + course, DEPT, course, getClassNumberMap()[str(course).strip()])

               insert.insertToTextbooks(isbn, title, author, '', '')
               insert.insertToClassToBook(DEPT + course, isbn)
               # make PHP call

    except URLError, e:
        print 'Got an error code:', e


if __name__ == '__main__':
    getClassSection(getCatalogNum_courseID(DEPT_NAME))
