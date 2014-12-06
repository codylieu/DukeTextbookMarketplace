import sys, re
import MySQLdb

class connect():
    def __init__(self):
        self.db = MySQLdb.connect("localhost", "root", "bitnami", "duke_textbook_marketplace")
        print "hi"
        
    def getdb(self):
        return self.db
    
    def closeConn(self):
        self.db.close()