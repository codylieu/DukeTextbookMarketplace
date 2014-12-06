import sys, re 
from urllib2 import Request, urlopen, URLError

def updateClassToBook(class_id , isbn):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/class_to_book/insert.php?class_id='"+class_id+"'&isbn='"+isbn+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def updateCourse(class_id, dept_id, course_num, course_name):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/course/insert.php?class_id='"+class_id+"'&dept_id='"+dept_id+"'&course_num='"+course_num+"'&course_name='"+course_name+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def updateDepartment(dept_id, deptName):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/department/insert.php?dept_id='"+dept_id+"'&deptName='"+deptName+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def updateListings(listing_id, netid, isbn, statusOfBook, conditionOfBook, price):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/insert.php?listing_id='"+listing_id+"'&netid='"+netid+"'&isbn='"+isbn+"'&statusOfBook='"+statusOfBook+"'&conditionOfBook='"+conditionOfBook+"'&price='"+price+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def updateScore(score):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/score/insert.php?score='"+score+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def updateTextbooks(isbn, title, author, description, edition):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/textbooks/insert.php?isbn='"+isbn+"'&title='"+title+"'&author='"+author+"'&description='"+description+"'&edition='"+edition+"'"
    url = fixURL(url)
    print url
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e

def updateTransactions(netid, listing_id, type, status, date_paid):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/transactions/insert.php?netid='"+netid+"'&listing_id='"+listing_id+"'&type='"+type+"'&status='"+status+"'&date_paid='"+date_paid+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def updateUsers(netid, firstName, lastName, major, phoneNumber):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/insert.php?netid='"+netid+"'&firstName='"+firstName+"'&lastName='"+lastName+"'&major='"+major+"'&phoneNumber='"+phoneNumber+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def fixURL(url):
    return url.replace (" ", "%20")
