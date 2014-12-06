import sys, re 
from urllib2 import Request, urlopen, URLError

def insertToClassToBook(class_id , isbn):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToCourse(class_id, dept_id, course_num, course_name):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToDepartment(dept_id, deptName):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToListings(listing_id, netid, isbn, date, statusOfBook, conditionOfBook, price):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def insertToScore(tid, score):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
    
def insertToTextbooks(isbn, title, author, description, edition):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToTransactions(tid, netid, listing_id, type, status, date_posted, date_paid):
    url = ""
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToUsers(netid, firstName, lastName, major, phoneNumber):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/insert.php?netid='"+netid+"'&firstName='"+firstName+"'&lastName='"+lastName+"'&major='"+major+"'&phoneNumber='"+phoneNumber+"'"
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
    
if __name__ == '__main__':
    insertToUsers("peter11200s", "peter", "lastName", "cs", "123123124")
    