import sys, re 
from urllib2 import Request, urlopen, URLError

def insertToClassToBook(class_id , isbn):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/class_to_book/insert.php?class_id='"+class_id+"'&isbn='"+isbn+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToCourse(class_id, dept_id, course_num, course_name):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/course/insert.php?class_id='"+class_id+"'&dept_id='"+dept_id+"'&course_num='"+course_num+"'&course_name='"+course_name+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToDepartment(dept_id, deptName):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/department/insert.php?dept_id='"+dept_id+"'&deptName='"+deptName+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToListings(listing_id, netid, isbn, statusOfBook, conditionOfBook, price):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/listings/insert.php?listing_id='"+listing_id+"'&netid='"+netid+"'&isbn='"+isbn+"'&statusOfBook='"+statusOfBook+"'&conditionOfBook='"+conditionOfBook+"'&price='"+price+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e

def insertToScore(score):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/score/insert.php?score='"+score+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
    
def insertToTextbooks(isbn, title, author, description, edition):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/textbooks/insert.php?isbn='"+isbn+"'&title='"+title+"'&author='"+author+"'&description='"+description+"'&edition='"+edition+"'"
    url = fixURL(url)
    print url
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
    except URLError,e:
        print "Got error code: ", e
        
def insertToTransactions(netid, listing_id, type, status, date_paid):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/transactions/insert.php?netid='"+netid+"'&listing_id='"+listing_id+"'&type='"+type+"'&status='"+status+"'&date_paid='"+date_paid+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def insertToUsers(netid, firstName, lastName, major, phoneNumber):
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/Users/insert.php?netid='"+netid+"'&firstName='"+firstName+"'&lastName='"+lastName+"'&major='"+major+"'&phoneNumber='"+phoneNumber+"'"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
    except URLError,e:
        print "Got error code: ", e
        
def fixURL(url):
    return url.replace (" ", "%20")
    
    
#if __name__ == '__main__':
#     insertToUsers("user1", "jack", "fucker", "cs", "121142144214")
#     insertToTransactions("user1", "12", "type?", "1", "999")
#    insertToTextbooks("isbn121312312", "dam book","dam aouther", "description", "edition")
#     insertToListings("2", "user1", "isbn121312312", "0", "good", "$3.99")
#     insertToDepartment("cs12", "compsci")
#     insertToCourse("1", "cs12", "120", "fuck db")
#     insertToClassToBook("1" , "isbn121312312")
#     insertToScore(score) #gonna be a problem

    