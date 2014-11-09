from urllib2 import Request, urlopen, URLError
import json
import sys, re

def parseBooks(request):
    print "parser for bookdata"
    result = []
    
    try:
        response = urlopen(request)
        items = response.read()
        items = json.loads(courses)    
        for book in items["course"]["books"]:
            dict ={}
            dict["title"] =  book["title"]
            dict["author"] = book["author"]
            dict["isbn"] = book["isbn"] 
            result.append(dict)
        return result
    except URLError, e:
        print 'Got an error code:', e
              
def parseClassSections(request):
    print "parse json and get the class sections"   
    result = []
#     print request
    try:
        response = urlopen(request)
        items = response.read()
        items = json.loads(items)
        
        if items["ssr_get_classes_resp"]["search_result"]["subjects"] is None: return result
            
        for course in items["ssr_get_classes_resp"]["search_result"]["subjects"]["subject"]["classes_summary"]["class_summary"]:
#             list = []
#             print course["crse_id"]
            print course
            result.append(course["class_section"])
#            
#             result.append(list)
        print result 
        return result
    except URLError, e:
        print 'Got an error code:', e           
              
              
def parseCourse(request):
    print "json parser for course data"
    result = []
#     print request
    try:
        response = urlopen(request)
        items = response.read()
        items = json.loads(items)
            
        for course in items["ssr_get_courses_resp"]["course_search_result"]["subjects"]["subject"]["course_summaries"]["course_summary"]:
            dict ={}
#             print course["crse_id"]
            dict["course_id"] = course["crse_id"]
#             print course["catalog_nbr"]
            dict["catalog_nbr"] = course ["catalog_nbr"]
            result.append(dict)
        return result
    except URLError, e:
        print 'Got an error code:', e