import sys, re 
from urllib2 import Request, urlopen, URLError

def deleteFromClass_To_Book(class_id, isbn):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/class_to_book/delete.php?class_id='"+class_id+"'&isbn='"+isbn+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def deleteFromCourse(class_id, dept_id):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/course/delete.php?class_id='"+class_id+"'&dept_id='"+dept_id+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def deleteFromDepartment(dept_id):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/department/delete.php?dept_id='"+dept_id+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def deleteFromListings(listing_id, netid, isbn):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/delete.php?listing_id='"+listing_id+"'&netid='"+netid+"'&isbn='"+isbn+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def deleteFromScore(tid):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/score/delete.php?tid='"+tid+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def deleteFromTextbooks(isbn):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/textbooks/delete.php?isbn='"+isbn+"'"
    url = fixURL(url)
    print url
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e
        
        
def deleteFromTransactions(tid):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/transactions/delete.php?tid='"+tid+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e
        
def deleteFromUsers(netid):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/delete.php?netid='"+netid+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def fixURL(url):
    return url.replace (" ", "%20")

if __name__ == '__main__':
    deleteFromUsers("jjj")