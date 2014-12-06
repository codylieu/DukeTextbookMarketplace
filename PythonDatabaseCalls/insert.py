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
        
def insertToListings(listing_id, netid, isbn, statusOfBook, conditionOfBook, price):
   url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/insert.php?listing_id='"+listing_id+"'&netid='"+netid+"'&isbn='"+isbn+"'&statusOfBook='"+statusOfBook+"'&conditionOfBook='"+conditionOfBook+"'&price='"+price+"'"
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def insertToScore(score):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/score/insert.php?score='"+score+"'"
    req = Request(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
    
def insertToTextbooks(isbn, title, author, description, edition):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/textbooks/insert.php?isbn='"+isbn+"'&title='"+title+"'&author='"+author+"'&description='"+description+"'&edition='"+edition+"'"
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToTransactions(netid, listing_id, type, status, date_paid):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/transactions/insert.php?netid='"+netid+"'&listing_id='"+listing_id+"'&type='"+type+"'&status='"+status+"'&date_paid='"+date_paid+"'"
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
    