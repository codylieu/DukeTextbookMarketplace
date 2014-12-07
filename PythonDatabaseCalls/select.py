import sys, re 
from urllib2 import Request, urlopen, URLError

def selectListingInfo():
    url = "http://colab-sbx-211.oit.duke.edu/DukeTextbookMarketplace/PHPDatabaseCalls/selectListingInfo.php"
    url = fixURL(url)
    req = Request(url)
    try:
        response = urlopen(req)
        print response.read()
        return response.read()
    except URLError,e:
        return e

def fixURL(url):
    return url.replace (" ", "%20")
        
if __name__ == '__main__':
    selectListingInfo()