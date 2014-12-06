import sys, re 
import MySQLConnection


def insertToClassToBook(class_id , isbn):
    print "hi"
    conn = MySQLConnection.connect()

def insertToCourse(class_id, dept_id, course_num, course_name):
    ""
    
def insertToDepartment(dept_id, deptName):
    ""

def insertToListings(listing_id, netid, isbn, date, statusOfBook, conditionOfBook, price):
    ""

def insertToScore(tid, score):
    ""
    
def insertToTextbooks(isbn, title, author, description, edition):
    ""

def insertToTransactions(tid, netid, listing_id, type, status, date_posted, date_paid):
    ""

def insertToUsers(netid, firstName, lastName, major, phoneNumber):
    ""
    
if __name__ == '__main__':
    insertToClassToBook("aaa", "sss")
    