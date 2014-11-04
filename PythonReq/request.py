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
        reqURL = 'https://streamer.oit.duke.edu/curriculum/classes/strm/'+ term +'/crse_id/'+dict["course_id"]+'?access_token=' +KEY
        request = Request(reqURL)
        sections = parseClassSections(request)
        if len(sections) > 0:
            catalog_sec_dict[dict["course_id"]] = sections
            
    print catalog_sec_dict
    return catalog_sec_dict

def getTextBookInfo(listOfSubject,catalogNum_courseIDList,classSectionList):
    print "make a request to get the json from bookstore website"



if __name__ == '__main__':
    getClassSection(getCatalogNum_courseID(["ITALIAN"]))
